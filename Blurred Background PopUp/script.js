const containerEl = document.querySelector('.container');
const joinBtnEl = document.querySelector('.btn');
const popUpcontainerEl = document.querySelector('.popup_container');
const popupBtnEl = document.querySelector('.popup-btn');
const closeEl = document.querySelector('.close_icon');
const inputEl = document.getElementById('email');


joinBtnEl.addEventListener('click', () => {
    containerEl.classList.add('active');
    popUpcontainerEl.classList.remove('active');
})

popupBtnEl.addEventListener('click', () => {
    containerEl.classList.remove('active');
    popUpcontainerEl.classList.add('active');
    inputEl.value = "";
})

closeEl.addEventListener('click', () => {
    containerEl.classList.remove('active');
    popUpcontainerEl.classList.add('active');
    inputEl.value = "";
})