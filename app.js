var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3979, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function(session) {
    session.message.text = session.message.text.toLowerCase();

    defaultMessages(session);
    
    if ( (session.message.text.indexOf("привет") !== -1) ||  (session.message.text.indexOf("здарова") !== -1) || (session.message.text.indexOf("прив") !== -1) || (session.message.text.indexOf("хай") !== -1)) {
        sayHi(session);
    }
    
    if ( (session.message.text.indexOf("вопрос") !== -1) || (session.message.text.indexOf("загад") !== -1)) {
        var i = Math.floor(Math.random() * 2) + 1;       
        switch (i) {
            case 1:
                session.beginDialog('pikiQuestion');
                break;
            case 2:
                session.beginDialog('vilkaQuestion');
                break;
            default:
                break;
        }    
    }

    if ( (session.message.text.indexOf("песн") !== -1) || (session.message.text.indexOf("пой") !== -1) || (session.message.text.indexOf("хуй в рот") !== -1)) {
        singSong(session);
    }

});

var sayHi = require('./sayHi');
var singSong = require("./singSong");
var defaultMessages = require("./defaultMessages");
bot.dialog('pikiQuestion', require('./pikiQuestion'));
bot.dialog('vilkaQuestion', require('./vilkaQuestion'));



