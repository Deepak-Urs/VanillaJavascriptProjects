const daysE1 = document.getElementById('days')
const hoursE1 = document.getElementById('hours')
const minutesE1 = document.getElementById('mins')
const secondsE1 = document.getElementById('seconds')


const newYears = '1 Jan 2022';

function countdown() {
    const currentDate = new Date();
    const newYearsDate = new Date(newYears)

    const totalsSeconds = new Date(newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalsSeconds / 3600 / 24)
    const hours = Math.floor(totalsSeconds / 3600) % 24;
    const minutes = Math.floor(totalsSeconds / 60) % 60;
    const seconds = Math.floor(totalsSeconds) % 60;

    daysE1.innerHTML = formatTime(days)
    hoursE1.innerHTML = formatTime(hours)
    minutesE1.innerHTML = formatTime(minutes)
    secondsE1.innerHTML = formatTime(seconds)
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

setInterval(countdown, 1000);