const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const imageContainerEl = document.querySelector('.image-container');
let a = 0;
let timer;
nextBtn.addEventListener('click', () => {
    a += 45;
    upDategallery();
    clearTimeout(timer);
    timer = setInterval(() => {
        a += 45;
        upDategallery();
    }, 3000)
})

prevBtn.addEventListener('click', () => {
    a -= 45;
    upDategallery();
    clearTimeout(timer);
    timer = setInterval(() => {
        a -= 45;
        upDategallery();
    }, 3000)
})

const upDategallery = () => {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${a}deg)`;
}

timer = setInterval(() => {
    a += 45;
    upDategallery();
}, 3000)