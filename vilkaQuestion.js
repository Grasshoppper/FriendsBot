var builder = require('botbuilder');

module.exports = [ 
    function(session) {
        session.send("Вилкой в глаз или в жопу раз?");
        builder.Prompts.text(session, "Так куда?");
    },
    function(session, results) {
        session.dialogData.answer = results.response.toLowerCase();
        console.log(session.dialogData.answer);
        if (session.dialogData.answer.indexOf("гла") !== -1) {
            session.send("Теперь в твой глаз будут хуй засовывать");
            session.endDialog();
        } else if (session.dialogData.answer.indexOf("жоп") !== -1) {
            session.send("Бля, братан, наверное у тебя огромное очко");
            session.endDialog();
        } else {
            session.send("Раз ты такой хитрожопый, получай вилкой в жопу и хуем в глаз");
            session.endDialog();
        }
    }
]