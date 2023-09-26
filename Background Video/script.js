const btnEl = document.querySelector('.btn');
const playEl = document.querySelector('.fa-solid');
const videoEl = document.querySelector('video');
const preLoader = document.querySelector('.preloader')


btnEl.addEventListener('click', () => {
    if(btnEl.classList.contains('pause')){
        btnEl.classList.remove('pause');
        btnEl.innerHTML = '<i class="fa-solid fa-play"></i>';
        videoEl.play();
    }
    else{
        btnEl.classList.add('pause');
        btnEl.innerHTML = '<i class="fa-solid fa-pause"></i>';
        videoEl.pause();
    }
})

window.addEventListener('load', () => {
    preLoader.style.zIndex = "-2";
})