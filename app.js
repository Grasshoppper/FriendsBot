var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
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
var bot = new builder.UniversalBot(connector, function (session) {
    session.message.text = session.message.text.toLowerCase();
    
    if ( (session.message.text.indexOf("привет") !== -1) ||  (session.message.text.indexOf("ку") !== -1) || (session.message.text.indexOf("прив") !== -1) || (session.message.text.indexOf("хай") !== -1)) {
        sayHi(session);
    }
    
    if ( (session.message.text.indexOf("вопрос") !== -1) || (session.message.text.indexOf("загадка") !== -1)) {
        session.beginDialog('question');
    }

});

var sayHi = function(session) {
    var i = Math.floor(Math.random() * 4) + 1;       
    switch (i) {
        case 0:
            session.send("Нахуй пошел " + session.message.user.name);
            break;
        case 1:
            session.send("И тебе здарова, пидрила " + session.message.user.name);
            break;
        case 2:
            session.send("Здарова от твоей мамаши " + session.message.user.name);
            break;
        case 3:
            session.send("Ну привет " + session.message.user.name);
            break;
        case 4:
            session.send("Доебаться решил, " + session.message.user.name + "?");
            break;
        default:
            session.send("Мелкомякгие пидоры " + session.message.user.name);
            break;
    }
};

bot.dialog('question', [
    function (session) {
        session.send("Есть 2 стула, на 1 пики точенные на 2 хуи дроченные, на какой сам сядешь, на какой мать посадишь?");
        builder.Prompts.text(session, "1 или 2");
    },
    function (session, results) {
        if (results.response == "1") {
            session.send("Ебать ты лох");
            session.endDialog();
        } else if (results.response == "2") {
            session.send("Пидрила ебаная!!!)");
            session.endDialog();
        } else {
            session.send("Хуйню ответил");
            session.endDialog();
        }
    },
]);
