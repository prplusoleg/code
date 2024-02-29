$(document).ready(function() {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    var currentHour = (new Date().getUTCHours() + 3); // Проверка часов для Украины
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    var days = ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"];

    if (currentHour >= 18) {
        $(".textwebinar").text("завтра, " + tomorrow.getDate() + " " + months[tomorrow.getMonth()] + " у 19:00");
    } else {
        $(".textwebinar").text("сегодня, " + today.getDate() + " " + months[today.getMonth()] + " у 19:00");
    }
});
