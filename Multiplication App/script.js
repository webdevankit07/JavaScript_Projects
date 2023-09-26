const scoreEl = document.getElementById('score');
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}
scoreEl.innerText = `score: ${score}`;

const updateLocalStorage = () => {
    localStorage.setItem("score", JSON.stringify(score));
}


const num1 = Math.round(Math.random()*10);
const num2 = Math.round(Math.random()*10);
const questionEl = document.getElementById('question');
questionEl.innerHTML = `What is ${num1} multiply by ${num2}?`
const answer = num1*num2;

const formEl = document.getElementById('form');
formEl.addEventListener('submit', () => {
    const inputEl = document.getElementById('input');
    const userAns = +inputEl.value;

    if(answer === userAns){
        score++
        updateLocalStorage();
    }
    else{
        score--
        updateLocalStorage();
    }
    inputEl.setAttribute("autofocus", );
})
