var builder = require('botbuilder');

module.exports = function(session) {
    if (session.message.text.indexOf("пидрила") !== -1) {
        session.sendTyping();
        session.send("Э Йо. Че как, гомики?");
    }

    if (session.message.text.indexOf("сук") !== -1) {
        session.sendTyping();
        session.send("Сам сука!");
    }

    if ( (session.message.text.indexOf("че") !== -1) && (session.message.text.indexOf("за") !== -1)) {
        session.sendTyping();
        session.send("Рвемся в топ");
    }

    if ( (session.message.text.indexOf("сан") !== -1) && (session.message.text.indexOf("пидрила") !== -1)) {
        session.sendTyping();
        session.send("Нихуя");
    }

    if ( (session.message.text.indexOf("пошел") !== -1) && (session.message.text.indexOf("нахуй") !== -1)) {
        session.sendTyping();
        session.send("Только в очко твоей мамаши");
    }

    if ( (session.message.text.indexOf("иди") !== -1) && (session.message.text.indexOf("нахуй") !== -1)) {
        session.sendTyping();
        session.send("Только в очко твоей мамаши");
    }

    if (session.message.text.indexOf("пиздец") !== -1) {
        session.sendTyping();
        session.send("Такие дела, сука");
    }

    if (session.message.text.indexOf("ору") !== -1) {
        session.sendTyping();
        session.send("Не ори без масти, сука");
    }

    if (session.message.text.indexOf("ты че") !== -1) {
        session.sendTyping();
        session.send("А че, сука?");
    }

    if (session.message.text.indexOf("въебать") !== -1) {
        session.sendTyping();
        session.send("Мамку свою въеби, сука?");
    }

    if ( (session.message.text.indexOf("че как") !== -1) || (session.message.text.indexOf("как дела") !== -1)) {
        session.sendTyping();
        session.send("Нихуево так, получше чем у тебя с порваной жопой");
    }

    if (session.message.text.indexOf("аха") !== -1) {
        session.sendTyping();
        session.send("Пахаха, сука?");
    }

    if (session.message.text.indexOf("ебать ты л") !== -1) {
        session.sendTyping();
        session.send("Получше тебя буду, сука?");
    }

    if ( (session.message.text.indexOf("мамку") !== -1) || (session.message.text.indexOf("ебал") !== -1)) {
        session.sendTyping();
        session.send("Моя мамка комп, значит ты ее в дисковод ебал");
    }
}