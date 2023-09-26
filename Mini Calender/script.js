const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month_name');
const dayNameEL = document.getElementById('day_name');
const dayNumberEl = document.getElementById('day_number');
const date = new Date();
console.log(date);




monthEl.innerText = date.toLocaleDateString("en", {month : "long"});
dayNameEL.innerText = date.toLocaleString("en", {weekday : "long"});
dayNumberEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();