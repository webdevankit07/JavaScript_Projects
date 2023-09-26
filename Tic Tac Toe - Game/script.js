let music = new Audio ('./music.mp3');
let audioTurn = new Audio ('./ting.mp3');
let gameOver = new Audio ('./gameover.mp3');


let turn = "X";
let isgameOver = false


// Function to change the Turn........

const changeTurn = () => {
    return turn === "X" ? "O":"X"
}




// Function to Chek for a  win..........

const checkWin = () => {
    let boxText = document.querySelectorAll('.box-text')

    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]

    win.forEach((e) => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) &&  (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")){
            isgameOver = true
            gameOver.play();
            document.querySelector('.info').innerText = boxText[e[0]].innerText + "  Won";
            document.querySelector('img').style.width = "200px";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}



// Game_Logic....//
// music.play();

let boxes = document.querySelectorAll('.box');

Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector('.box-text')
    element.addEventListener('click', () => {
        if(boxText.innerText === ""){
            boxText.innerText = turn;
            audioTurn.play();
            turn = changeTurn();
            checkWin();
            if(!isgameOver){
                document.querySelector('.info').innerText =`Turn for  ${turn}`;
            }
        }
    })

})




// Reset...
let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.box-text')
    Array.from(boxText).forEach((element) => {
        element.innerText = "";
    })
    isgameOver = false
    turn = "X";
    document.querySelector('.info').innerText =`Turn for  ${turn}`;
    document.querySelector('img').style.width = "0";
    document.querySelector('.line').style.width = "0";
})


