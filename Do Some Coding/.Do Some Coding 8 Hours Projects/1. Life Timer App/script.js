const setting = document.querySelector('#setting_btn');
const inputDOB = document.querySelector('#dob');
const addBtn = document.querySelector('#add');
const container = document.querySelector('#container');
const calDate = document.querySelector('#calDate');


setting.addEventListener('click', () => {
    inputDOB.style.display = 'block';
    addBtn.style.display = 'block';
    setting.style.display = 'none';
    calDate.style.display = 'block';
    container.style.display = 'none';
})


let timeSpend = (years, months, days, hours, minutes, seconds) =>{
    const year = document.querySelector('#year');
    const month = document.querySelector('#month');
    const day = document.querySelector('#day');
    const hour = document.querySelector('#hour');
    const minute = document.querySelector('#minute');
    const second = document.querySelector('#second');

    let twoDigit = (number) => {
        return number > 10 ? number : `0${number}`
    }


    


    year.innerText = twoDigit(years);
    month.innerText = twoDigit(months);
    day.innerText = twoDigit(days);
    hour.innerText = twoDigit(hours);
    minute.innerText = twoDigit(minutes);
    second.innerText = twoDigit(seconds);
}



let timSpendCal = () =>{

    inputDOB.style.display = 'none';
    addBtn.style.display = 'none';
    setting.style.display = 'block';

    
    var updateTime = setInterval(() => {
        let DobVal = inputDOB.value;
        let time = new Date();
        let timediff = time - new Date(DobVal);


        let years = Math.floor(timediff / (1000*60*60*24*365));
        let months = Math.floor(timediff / (1000*60*60*24*365) % 12);
        let days = Math.floor(timediff / (1000*60*60*24) % 30);
        let hours = Math.floor(timediff / (1000*60*60) % 24);
        let minutes = Math.floor(timediff / (1000*60) % 60 );
        let seconds = Math.floor(timediff / (1000) % 60);

        timeSpend(years, months, days, hours, minutes, seconds);

    }, 1000)
}

addBtn.addEventListener('click', timSpendCal);


