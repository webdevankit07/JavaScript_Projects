const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById('result');
const userSocreEL = document.getElementById('user-socre');
const computerSocreEl = document.getElementById('computer-socre');
let userScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const result = play(button.id, computerPlay())
        resultEl.innerText = result;
        userSocreEL.innerText = userScore;
        computerSocreEl.innerText = computerScore;
    })
})

const computerPlay = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

const play = (player, computer) => {
    if(player===computer){
        return `it's Tie`
    }else if(
        (player ==="rock" && computer==="scissors")||
        (player ==="paper" && computer==="rock")||
        (player ==="scissors" && computer==="paper")
    ){
        userScore++;
        return `You won!`
    }else{
        computerScore++;
        return `You Loose!`
    }
}
