let direction = {x:0, y:0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let speed = 2;
let lastPaintTime = 0;

//! Game Functions....
const main = (ctime) => {
    if((ctime - lastPaintTime)/1000 < 1/speed) return;
    lastPaintTime = ctime;
    gameEngine();
    window.requestAnimationFrame(main);
}

const gameEngine = () => {
    
}






//! Main logic starts here 
window.requestAnimationFrame(main);