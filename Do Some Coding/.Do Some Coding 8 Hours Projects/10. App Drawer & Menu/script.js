const menuBarEl = document.getElementById('menuBar');
const menuMobileEl = document.getElementById('menuMobile');
const close_BtnEl = document.getElementById('close_Btn');


const menuClose = () => {
    menuMobileEl.classList.toggle('show_menu');
}

menuBarEl.addEventListener('click', () => {
    menuClose();
})

close_BtnEl.addEventListener('click', () => {
    menuClose();
})