const navbarEl = document.getElementById('navbar');
const bottomContainerEl = document.getElementById('bottom_container');
console.log(bottomContainerEl.offsetTop);

window.addEventListener('scroll', () => {
    if(window.scrollY >  bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add('active');
    }
    else{
        navbarEl.classList.remove('active');
    }
})