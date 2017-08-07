module.exports = function(session) {
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