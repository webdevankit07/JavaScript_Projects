const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector('body');
inputEl.checked = false;


const updateBody = () => {
    if(inputEl.checked){
        bodyEl.style.backgroundColor = "black"
    }
    else{
        bodyEl.style.backgroundColor = "white"
    }
}
updateBody();



inputEl.addEventListener("input", () => {
    updateBody();
    console.log(inputEl.checked);
})


