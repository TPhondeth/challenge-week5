// Document Ready
$(document).ready(function(){
    
    // Display current date
    var currentDateEl = moment().format("dddd MMMM D, YYYY");
    $('#currentDay').text(currentDateEl);

    // Time blocks change color based on hour of day
    var hourEl = moment().get("hour");
    $('.hour').each( function() {
        var timeBlock = parseInt($(this).attr("value"));
        if (timeBlock < hourEl) {
            $(this).addClass("past");
        }
        if (timeBlock === hourEl) {
            $(this).addClass("present");
        }
        if (timeBlock > hourEl) {
            $(this).addClass("future");
        }
    });

    // Save event input to local storage
    var eventInputEl = document.querySelector(".event-input");
    var saveBtnEl = document.querySelector(".saveBtn");

    // Event listener
    saveBtnEl.addEventListener('click', saveEvent);

    eventInputEl.value = localStorage.getItem('event');

    function saveEvent() {
        localStorage.setItem('event', eventInputEl.value);
    }
    
});