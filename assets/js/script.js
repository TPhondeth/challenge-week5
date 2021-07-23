// Document Ready
$(document).ready(function(){
    
    // Display current date
    let currentDateEl = moment().format("dddd MMMM D, YYYY");
    $('#currentDay').text(currentDateEl);

    // Time blocks change color based on hour of day
    let hourEl = moment().get("hour");
    $('.hour').each( function() {
        let timeBlock = parseInt($(this).attr("value"));
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

    // Variable to declare all time blocks
    let eventsEl = document.querySelectorAll('.event');
    
    // forEach loop to save event input
    eventsEl.forEach(function(event, i) {
        const eventInput = event.querySelector('textarea');
        const saveBtn = event.querySelector('button');
        eventInput.value = localStorage.getItem('event-' + (i + 1))

        // Event listener
        saveBtn.addEventListener('click', function() {
            localStorage.setItem('event-' + (i + 1), eventInput.value);
        })
    })
});