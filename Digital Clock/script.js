const hourEl = document.getElementById('hours');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');


const twoDigit = (number) => {
    return number < 10 ? `0${number}` : number ;
}


const generateTime = () => {
    let h = twoDigit(new Date().getHours());
    let m = twoDigit(new Date().getMinutes());
    let s = twoDigit(new Date().getSeconds());

    if(h > 12){
        h = h - 12;
        ampmEl.innerText = "PM"
    }
    else{
        ampmEl.innerText = "AM"
    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;


    setTimeout(generateTime, 1000);

}
generateTime();



