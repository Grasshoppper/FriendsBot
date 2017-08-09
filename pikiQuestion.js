var builder = require('botbuilder');

module.exports = [
    function(session) {
        session.send("Есть 2 стула, на 1 пики точенные на 2 хуи дроченные, на какой сам сядешь, на какой мать посадишь?");
        builder.Prompts.text(session, "Хуи или пики?");
    },
    function(session, results) {
        session.dialogData.answer = results.response.toLowerCase();
        console.log(session.dialogData.answer);
        if (session.dialogData.answer == "хуи") {
            session.send("Ну, тебе не привыкать");
            session.endDialog();
        } else if (session.dialogData.answer == "пики") {
            session.send("Те же хуи, только острые, внезапно оказались в твоем очке");
            session.endDialog();
        } else {
            session.send("Хуйню ответил");
            session.endDialog();
        }
    }
]