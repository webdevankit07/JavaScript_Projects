let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');


const newYearTime = new Date("jan 1, 2024  00:00:00").getTime();

const upDateCountDown = () => { 
    const now  = new Date().getTime();
    const timeDiff = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    daysEl.innerText = `${Math.round(timeDiff/day)}`;
    hoursEl.innerText = `${Math.round((timeDiff % day) / hour)}`;
    minutesEl.innerText = `${Math.round((timeDiff % hour ) / minute)}`;
    secondsEl.innerText = `${Math.round((timeDiff % minute) / second)}`;
}

upDateCountDown();
setInterval(upDateCountDown, 1000);
