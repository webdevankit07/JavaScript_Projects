const menuEl = document.querySelector('.menu');
const sociallistEl = document.querySelector('.social_list');
const lists = document.querySelectorAll('li');
const selectedlistEl = document.querySelector('#selectedlist');

menuEl.addEventListener('click', ()=> {
    menuEl.classList.toggle('rotate');
    sociallistEl.classList.toggle('hide');
})

lists.forEach(list => {
    list.addEventListener('click', () => {
        const listEl = list.innerHTML;
        selectedlistEl.innerHTML = listEl;
        menuEl.classList.toggle('rotate');
        sociallistEl.classList.toggle('hide');
    })
})