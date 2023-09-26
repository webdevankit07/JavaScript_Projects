const containerEl = document.querySelector('.container');
for(let i=0; i < 30; i++){
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color_container');
    containerEl.appendChild(colorContainerEl)
}




const randomColor = () => {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode ="";
    
    for(let i=0; i<colorCodeLength; i++){
        const randomNum = Math.floor(Math.random()*chars.length)
        colorCode += chars[randomNum];
    }
    return "#"+ colorCode;
}



const colorContainerEls = document.querySelectorAll('.color_container');
function generateColor(){
    colorContainerEls.forEach(colorContainerEl => {
        const newColorCode = randomColor();
        colorContainerEl.innerText = `${newColorCode}`
        colorContainerEl.style.backgroundColor = `${newColorCode}`;

        colorContainerEl.addEventListener('click', () => {
            const notificationEl = document.querySelector('.notification');
            navigator.clipboard.writeText(colorContainerEl.innerText).then(() =>{
                notificationEl.classList.add('active');
                notificationEl.style.backgroundColor = "lightgreen";
                notificationEl.style.color = "black";
                notificationEl.innerText = `${newColorCode} Copied!`;
                setTimeout(() => {
                    notificationEl.classList.remove('active');
                }, 1000)
            }).catch(() => {
                notificationEl.classList.add('active');
                notificationEl.style.backgroundColor = "red";
                notificationEl.style.color = "white";
                notificationEl.innerText = `Error not Copied!`;
                setTimeout(() => {
                    notificationEl.classList.remove('active');
                }, 1000)
            });
            
        })
    })
}
generateColor();





