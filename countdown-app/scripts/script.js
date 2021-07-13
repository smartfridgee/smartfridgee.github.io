const goalDate = '13 Nov 2021';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const dateEl = document.getElementById('date');

function updateDate(){
    const endDate = new Date(goalDate);
    const currentDate = new Date();

    const dateDiff = (endDate - currentDate) / 1000;
    
    let seconds = Math.floor(dateDiff) % 60;
    let minutes = Math.floor(dateDiff / 60) % 60;
    let hours = Math.floor(dateDiff / 3600) % 24;
    let days = Math.floor(dateDiff / 3600 / 24);

    daysEl.innerText = timeFormat(days);
    hoursEl.innerText = timeFormat(hours);
    minutesEl.innerText = timeFormat(minutes);
    secondsEl.innerText = timeFormat(seconds);
}

function timeFormat(time){
    return time < 10 ? "0" + time : time;
}

const timer = setInterval(updateDate, 1000);

window.onload = updateDate();
window.onload = dateEl.innerText = goalDate;