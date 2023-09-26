const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const digitalClockEl = document.querySelector('.digital_clock')



const updateClock = () => {
    const currTime = new Date();
    let h = currTime.getHours();
    let m = currTime.getMinutes();
    let s = currTime.getSeconds();

    const hRoration = (h/12)*360 + m/2;
    const mRoration = (m/60)*360;
    const sRoration = (s/60)*360;

    hourEl.style.transform = `rotate(${hRoration}deg)`
    minuteEl.style.transform = `rotate(${mRoration}deg)`
    secondEl.style.transform = `rotate(${sRoration}deg)`

    h = h>12 ? h-12 : h;
   
    digitalClockEl.innerText = `${h<9 ? "0"+h : h} : ${m<9? "0"+m : m} : ${s<10 ? "0"+s : s}`
}
updateClock();
setInterval(updateClock, 1000);