document.addEventListener('DOMContentLoaded', solve);

function solve() {

    // add individual event listeners to each btn
    document.getElementById('daysBtn').addEventListener('click', convertDays);
    document.getElementById('hoursBtn').addEventListener('click', convertHours);
    document.getElementById('minutesBtn').addEventListener('click', convertMinutes);
    document.getElementById('secondsBtn').addEventListener('click', convertSeconds);

    function convertDays(e) {
        e.preventDefault();
         // - read associated input field
        let days = Number(document.getElementById('days-input').value);
          // - convert value to seconds
        updateFields(days * 86400);
    }

    function convertHours(e) {
        e.preventDefault();
         // - read associated input field
        let hours = Number(document.getElementById('hours-input').value);
          // - convert value to seconds
        updateFields(hours * 3600);
    }

    function convertMinutes(e) {
        e.preventDefault();
        // - read associated input field
       let minutes = Number(document.getElementById('minutes-input').value);
         // - convert value to seconds
       updateFields(minutes * 60);
    }

    function convertSeconds(e) {
        e.preventDefault();
        // - read associated input field
       let seconds = Number(document.getElementById('seconds-input').value);
         // - convert value to seconds
       updateFields(seconds);
    }

    function updateFields(seconds) {
         // - pass seconds to function which upradates all fields
        document.getElementById('days-input').value = (seconds / 86400).toFixed(2);
        document.getElementById('hours-input').value = (seconds / 3600).toFixed(2);
        document.getElementById('minutes-input').value = (seconds / 60).toFixed(2);
        document.getElementById('seconds-input').value = (seconds).toFixed(2);
    }
}