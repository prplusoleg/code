$(document).ready(function() {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    var currentHour = (new Date().getUTCHours() + 3); // Проверка часов для Украины
    var months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
    var days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];

    if (currentHour >= 00) {
        $(".textwebinar").text("Завтра, " + tomorrow.getDate() + " " + months[tomorrow.getMonth()]);
    } else {
        $(".textwebinar").text("Сьогодні, " + today.getDate() + " " + months[today.getMonth()]);
    }
});
