const passRangeValueEl = document.getElementById('passRangeValue');
const passRangeInputEl = document.getElementById('passRangeInput');
const genBtnEl = document.getElementById('genBtn');
const passowrdEl = document.getElementById('passowrd');
let isUpperCase = false;
let isNumbers = false;
let isSymbols = false;
let passValue = "8";

passRangeInputEl.addEventListener("input", (e) => {
    passValue = +e.target.value;
    passRangeValueEl.innerText = passValue;
})


const generatePassword = (passLength) => {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = isUpperCase ?  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const numbers = isNumbers ?  "0123456789" : "";
    const symbols = isSymbols ? "!@#$%^&*()_+" : "";
    const passWordChar = lowerCaseLetters + upperCaseLetters + numbers + symbols;
    let password ="";

    for(let i=0; i<passLength; i++){
        const charIndex = Math.floor(Math.random() * passWordChar.length);
        password += passWordChar[charIndex];
    }
    return password;
}


genBtnEl.addEventListener('click', () =>{

    const uppercaseCheckEl = document.getElementById("uppercase") 
    const numbersCheckEl = document.getElementById("numbers") 
    const symbolsCheckEl = document.getElementById("symbols") 
    
    isUpperCase = uppercaseCheckEl.checked;
    isNumbers   = numbersCheckEl.checked;
    isSymbols   = symbolsCheckEl.checked;

    const password = generatePassword(passValue);
    passowrdEl.innerText = password;
});


passowrdEl.addEventListener('click', (e) => {
    navigator.clipboard.writeText(passowrdEl.innerText).then(()=> alert('Succefully Copied')).catch((error) => alert(error));
})