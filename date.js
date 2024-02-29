$(document).ready(function() {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    var currentHour = (new Date().getUTCHours() + 3); // Проверка часов для Украины
    var months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
    var days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];

    if (currentHour >= 18) {
        $(".textwebinar").text("Завтра, " + tomorrow.getDate() + " " + months[tomorrow.getMonth()] + " у 19:00");
    } else {
        $(".textwebinar").text("Сьогодні, " + today.getDate() + " " + months[today.getMonth()] + " у 19:00");
    }
});
