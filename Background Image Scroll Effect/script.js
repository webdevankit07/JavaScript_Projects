const bgImageEl = document.getElementById('bg-image');
const containerEl = document.querySelector('.container');



const updateImage = () => {
    bgImageEl.style.opacity = 1 - window.scrollY / 900;
    bgImageEl.style.backgroundSize = `${160 - window.scrollY/14}%`
}


window.addEventListener('scroll', () => {
    updateImage();
})


