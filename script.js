const christmas = '2020-12-25';
let countdownValue = Date;

const countdownEl = document.getElementById('countdown');
const timeElements = document.querySelectorAll('span');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


// Populate Countdown
function updateDOM() {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log('distance', distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    // Populating Countdown with updated Maths
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

}
function runCountdown() {
    countdownValue = new Date(christmas).getTime();
    console.log('countdown value:', countdownValue);
    updateDOM();
}

setInterval(runCountdown, 1000);