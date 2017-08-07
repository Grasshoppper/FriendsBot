var builder = require('botbuilder');
var sleep = require('sleep');

module.exports = [
    function(session) {
        session.send("Пока водитель ланоса щелкает еблом");
        sleep.sleep(1)
        session.send("В киоске покупая нескафе и честер красный");
        session.send("Я двери акуратно открываю а потом");
        session.send("Хватаю магнитолу рву проводку и на масу");
        session.send("Опа");
        session.send("Хуй в рот");
        session.send("Хуй в глаз");
        builder.Prompts.text(session, "подпевайте");
    },
    function(session, result) {
        if (result.response.toLowerCase() == "еблом не щелкай пидорас") {
            session.send("Хуй в рот");
            session.send("Хуй в глаз");
            session.send("Еблом не щелкай пидорас");
            session.send("Хуй в рот");
            session.send("Хуй в глаз");
            session.send("Еблом не щелкай пидорас");
            session.endDialog();
        } else 
        {
            session.send("Еблом не щелкай пидорас");
            session.send("Чет я заебался");
            session.endDialog();
        }
    }
]