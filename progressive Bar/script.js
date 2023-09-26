const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');
const stepsEl = document.querySelectorAll('.step')
const progressEl = document.querySelector('.progress_bar_front');






const updateStepProgress = () => {
    stepsEl.forEach((stepEl, index) => {
        if(index < currenChecked){
            stepEl.classList.add('checked');
            stepEl.innerHTML = `
                <i class="fa-solid fa-check"></i>
                <small>${index === 0 ? "Start" : index === stepsEl.length -1 ? "Final" : "Step" + index}</small>
            `
        }
        else{
            stepEl.classList.remove('checked');
            stepEl.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
        `
        }
    })

    const checkedNumber = document.querySelectorAll('.checked');
    progressEl.style.width = ((checkedNumber.length - 1)/(stepsEl.length - 1)) * 100 + "%";
    console.log(((checkedNumber.length - 1)/(stepsEl.length -1)) * 100 + "%");

    if(currenChecked === 1){ 
        prevEl.disabled = true;
    }
    else if(currenChecked === stepsEl.length){
        nextEl.disabled = true;
    }
    else{
        prevEl.disabled = false;
        nextEl.disabled = false;
    }
}


let currenChecked = 1;
nextEl.addEventListener('click', () => {
    currenChecked++
    if(currenChecked > stepsEl.length){
        currenChecked = stepsEl.length;
    }
    updateStepProgress();
})


prevEl.addEventListener('click', () => {
    currenChecked--;
    if(currenChecked < 1){
        currenChecked = 1;
    }
    updateStepProgress();
})