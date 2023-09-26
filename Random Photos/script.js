const imageeContainerEl = document.querySelector('.imagee_container');
const btnEl = document.querySelector('.btn');
const btnRefeshEl = document.querySelector('#btnRefesh');

let i;

const loadImage = () => {
    for(i = 1; i<=20; i++){
        const imgEl = document.createElement('img');
        imgEl.src = `https://picsum.photos/250/250?random=${Math.floor(Math.random()*2000)}`
        imageeContainerEl.appendChild(imgEl);
    }
}
loadImage();


btnEl.addEventListener('click', loadImage);
btnRefeshEl.addEventListener('click', () => {
    document.location.reload();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})