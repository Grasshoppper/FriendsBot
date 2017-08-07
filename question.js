var builder = require('botbuilder');

module.exports = [
    function(session) {
        session.send("Есть 2 стула, на 1 пики точенные на 2 хуи дроченные, на какой сам сядешь, на какой мать посадишь?");
        builder.Prompts.choice(session, "Каков твой ответ", "хуи|пики", builder.ListStyle.auto);
    },
    function(session, results) {
        session.dialogData.answer = results.response.entity.toLowerCase();
        console.log(session.dialogData.answer);
        if (session.dialogData.answer == "хуи") {
            session.send("Ебать ты лох");
            session.endDialog();
        } else if (session.dialogData.answer == "пики") {
            session.send("Пидрила ебаная!!!)");
            session.endDialog();
        } else {
            session.send("Хуйню ответил");
            session.endDialog();
        }
    }
]