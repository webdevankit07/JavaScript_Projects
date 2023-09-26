const trailerContainerEl = document.querySelector('.trailer_container');
const videoEl = document.querySelector('video');

const trailer = () =>{
    trailerContainerEl.classList.remove('active')
}

const closeTrailer = () =>{
    trailerContainerEl.classList.add('active')
    videoEl.pause();
    videoEl.currentTime = 0;
}