$(document).ready(function() {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    var months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

    var formattedDate = tomorrow.getDate() + ' ' + months[tomorrow.getMonth()];

    $(".tomorrow").text(formattedDate);
});
