var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3979, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: "370319f0-a4c9-4803-820f-c834653766f3",
    appPassword: "mpXv3HwCjenszA0yrq0TPGL"
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function(session) {
    session.message.text = session.message.text.toLowerCase();
    
    if ( (session.message.text.indexOf("привет") !== -1) ||  (session.message.text.indexOf("ку") !== -1) || (session.message.text.indexOf("прив") !== -1) || (session.message.text.indexOf("хай") !== -1)) {
        sayHi(session);
    }
    
    if ( (session.message.text.indexOf("вопрос") !== -1) || (session.message.text.indexOf("загадка") !== -1)) {
        session.beginDialog('question');
    }

    if ( (session.message.text.indexOf("песн") !== -1) || (session.message.text.indexOf("пой") !== -1)) {
        session.beginDialog('singSong');
    }

});

var sayHi = require('./sayHi');
bot.dialog('question', require('./question'));
bot.dialog('singSong', require('./singSong'));


