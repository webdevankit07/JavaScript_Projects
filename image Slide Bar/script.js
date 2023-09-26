const imageContainerEl = document.querySelector('.image_container');
const prevEl = document.querySelector('.prev');
const nextEL = document.querySelector('.next');
let currentImg = 1;
let timeOut;




const imageEls = document.querySelectorAll('img');
const updateImage = () => {
    if(currentImg > imageEls.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = imageEls.length;
    }
    imageContainerEl.style.transform = `translate(-${(currentImg-1)*500}px)`

    timeOut  = setTimeout(() => {
        currentImg++
        updateImage();
    }, 3000)

}
updateImage();


nextEL.addEventListener('click', () => {
    currentImg++
    clearTimeout(timeOut)
    updateImage();
})
prevEl.addEventListener('click', () => {
    currentImg--
    clearTimeout(timeOut)
    updateImage();
})