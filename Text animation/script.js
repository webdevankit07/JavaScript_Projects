const containerEl = document.querySelector('.container');
const creers = ["Youtuber", "Web Developer", "Freelancer", "instructor"]
let creersIndex = 0;
let charIndex = 0;


const updateText = () => {
    containerEl.innerHTML = `
        <h1>I am ${creersIndex === 3 ? "an" : "a"} ${creers[creersIndex].slice(0,charIndex)}</h1>
    `;
    if(charIndex === creers[creersIndex].length){
        creersIndex++
        charIndex = 0;
        if(creersIndex === creers.length){
            creersIndex = 0;
            charIndex = 0;
        }
    }
    charIndex++
    setTimeout(updateText, 400)

}
updateText();