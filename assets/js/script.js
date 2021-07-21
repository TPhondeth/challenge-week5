// Document Ready
$(document).ready(function(){
    
    // Display current date
    var currentDate = moment().format("dddd MMMM D YYYY");
    $('#currentDay').text(currentDate);
});