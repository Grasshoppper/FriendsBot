module.exports = function(session) {
    var i = Math.floor(Math.random() * 5) + 1;       
    switch (i) {
        case 1:
            session.sendTyping();
            session.send("Нахуй пошел " + session.message.user.name);
            break;
        case 2:
            session.sendTyping();
            session.send("И тебе здарова, пидрила " + session.message.user.name);
            break;
        case 3:
            session.sendTyping();
            session.send("Здарова от твоей мамаши " + session.message.user.name);
            break;
        case 4:
            session.sendTyping();
            session.send("Ну привет " + session.message.user.name);
            break;
        case 5:
            session.sendTyping();
            session.send("Доебаться решил, " + session.message.user.name + "?");
            break;
        default:
            session.sendTyping();
            session.send("Мелкомякгие пидоры " + session.message.user.name);
            break;
    }
};