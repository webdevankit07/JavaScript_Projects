const btnEl = document.querySelector('.btn');
const inputEl = document.querySelector('#input');


const createPassword = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passLength = 14;
    let password = "";

    for(let i=0; i< passLength; i++){
        const randomNum = Math.round(Math.random()*(chars.length - 1))
        password += chars[randomNum];
    }
    inputEl.value = password;
}
btnEl.addEventListener('click',createPassword);



const alertEl = document.getElementById('alert_container');
const copyEl = document.querySelector('#copy');
copyEl.addEventListener('click', () => {
    if(!inputEl.value){
        alertEl.innerText = "Please Generate Password..."
        alertEl.style.backgroundColor = "red";
        alertEl.style.color = "white";
        setTimeout(() => {
            alertEl.classList.add('active');
        }, 500)
        setTimeout(() => {
            alertEl.classList.remove('active');
        }, 3000)
    }
    else{
        inputEl.select();
        inputEl.setSelectionRange(0, 20);
        navigator.clipboard.writeText(inputEl.value);
        alertEl.innerText = ` ${inputEl.value} copied!....`
        alertEl.style.backgroundColor = "lightgreen";
        alertEl.style.color = "black";
        setTimeout(() => {
            alertEl.classList.add('active');
        }, 500)
        setTimeout(() => {
            alertEl.classList.remove('active');
        }, 3000)
    }
})