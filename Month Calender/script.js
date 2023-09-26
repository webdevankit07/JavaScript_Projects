const monthEl = document.querySelector('.date h1')
const fullDateEl = document.querySelector('.date p')
const monthInx = new Date().getMonth();
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
monthEl.innerText = months[monthInx];
fullDateEl.innerText = new Date().toDateString();





const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;
const daysEl = document.querySelector('.days')
let days = "";

for(i=1; i<=firstDay; i++){
    days += `<div class="empty"></div>`
}

for(i=1; i<=lastDay; i++){
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`
    }else{
        days += `<div>${i}</div>`
    }
}
daysEl.innerHTML = days;

