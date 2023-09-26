const counterEl = document.querySelector('.counter');
const barEl = document.querySelector('.loading_bar_front');


counterEl.innerText = "20%";

let idx = 0;

const updateNum = () => {
    counterEl.innerText = idx + "%";
    barEl.style.width = idx + "%"
    idx++
    if(idx <= 100){
        setTimeout(updateNum, 10)
    }
}
updateNum(); 
