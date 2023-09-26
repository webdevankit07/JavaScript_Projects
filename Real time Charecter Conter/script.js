const textareaEl  = document.getElementById('textarea');
const totalCounterEl  = document.getElementById('total-counter');
const remainingCounterEl  = document.getElementById('remaining-counter');




const upDateCounter = () => {
    const count = textareaEl.value.length;
    totalCounterEl.innerText = count;
    remainingCounterEl.innerText = textareaEl.getAttribute('maxlength') - count;
}

textareaEl.addEventListener('keyup', () => {
    upDateCounter();
})
upDateCounter();
