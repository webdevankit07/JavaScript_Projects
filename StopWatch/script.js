const countdownEl = document.getElementById('countdown')
const startEl = document.getElementById('start')
const stopEl = document.getElementById('stop')
const resetEl = document.getElementById('reset')
let interval;

let milisecond = 00;
let second = 00;
let minute = 00;
let hour = 00;




const startCountDown = () => {
    clearInterval(interval);
    interval = setInterval(() => {
        milisecond++
        countdownEl.innerText = `${hour<10 ? `0${hour}` : hour}: ${minute<10 ? `0${minute}` : minute} : ${ second<10 ? `0${second}` : second} : ${milisecond<10 ? `0${milisecond}` : milisecond}`
        if(milisecond > 99){
            milisecond=00;
            second++
        }

        if(second  > 59){
            second = 00;
            minute++
        }

        if(minute  > 59){
            minute = 00;
            hour++
        }
    }, 10)
}

const stopCountDown = () => {
    clearInterval(interval);
}

const resetCountDown = () => {
    clearInterval(interval);
    countdownEl.innerText = `00 : 00 : 00 : 00`;
}

startEl.addEventListener('click', startCountDown)
stopEl.addEventListener('click', stopCountDown)
resetEl.addEventListener('click', resetCountDown)