const questionEl = document.getElementById('question');
const formEl = document.getElementById('form');
let answerInputEl = document.getElementById('answerInput');
const scoreEl = document.getElementById('score');
let storedAnswer;
let score = +localStorage.getItem('score');


const randomNumber = (min, max) =>{
    return Math.round(Math.random()*(max - min )+min);
}
// console.log('randomNumber : ', randomNumber(10,20));


const generateQuestion = () =>{
    // const randomnumber1 = Math.round(Math.random()*10);
    // const randomnumber2 = Math.round(Math.random()*10);

    const randomnumber1 = randomNumber(1,10);
    const randomnumber2 = randomNumber(1,10);
    const questionType = randomNumber(1,4);

    let question;
    let answer;
    let firstNumber;
    let secondNumber;
    
    if(randomnumber1 < randomnumber2 && questionType > 2){
        firstNumber = randomnumber2;
        secondNumber = randomnumber1;
    }else{
        firstNumber = randomnumber1;
        secondNumber = randomnumber2;
    }





    switch(questionType){
        case 1:
            question = `Q. What is ${firstNumber} multiply by ${secondNumber} ?`
            answer = firstNumber*secondNumber;
        break;

        
        case 2:
            question = `Q. What is ${firstNumber} Add to ${randomnumber2} ?`
            answer = firstNumber + secondNumber;
        break;

        case 3:
            question = `Q. What is ${secondNumber} Subtract from ${firstNumber} ?`
            answer = firstNumber - secondNumber;
        break;

        case 4:
            question = `Q. What is ${firstNumber} Divided by ${secondNumber} ?`
            answer = firstNumber / secondNumber;
        break;

        default:
            question = `Q. What is ${firstNumber} Divided by ${secondNumber} ?`
            answer = firstNumber / secondNumber;
        break;

    }

    return {question, answer};

}


const showQuestion = () =>{
    const {question, answer} = generateQuestion();
    questionEl.innerText = question;
    scoreEl.innerText = score;
    storedAnswer = answer;
}
showQuestion();


const checkAnswer = (event) => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const userAnswer = +formData.get('useranswer');

    if(storedAnswer === userAnswer){
        score += 1;
        Toastify({
            text: `Your are Right and your score is ${score}`,
            gravity: "bottom",
            position: "center",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    }else{
        score -= 1;
        Toastify({
            text: `Your are Wrong and your score is ${score}`,
            gravity: "bottom",
            position: "center",
            style: {
                background: "linear-gradient(to right, #e33217, #ff001e)",
            },
        }).showToast();
    }

    scoreEl.innerText = score;
    localStorage.setItem('score', score)
    event.target.reset();
    showQuestion();
}