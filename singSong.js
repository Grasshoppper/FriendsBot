var builder = require('botbuilder');

module.exports = function(session) {
    session.sendTyping();
    session.send("Пока водитель ланоса щелкает еблом");
    session.sendTyping();
    setTimeout(() => {
        session.send("В киоске покупая нескафе и честер красный");
        session.sendTyping();
    }, 2000); 
    setTimeout(() => {
        session.send("Я двери акуратно открываю а потом");
        session.sendTyping();
    }, 4000);
    setTimeout(() => {
        session.send("Хватаю магнитолу рву проводку и на масу");
        session.sendTyping();
    }, 6000);
    setTimeout(() => {
        session.send("Опа");
        session.sendTyping();
    }, 8000);
    setTimeout(() => {
        session.send("Хуй в рот");
        session.sendTyping();
    }, 10000);
    setTimeout(() => {
        session.send("Хуй в глаз");
        session.sendTyping();
    }, 12000);
    setTimeout(() => {
        session.send("Еблом не щелкай пидорас");
    }, 14000);
} 