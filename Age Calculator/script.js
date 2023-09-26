const btnEl = document.getElementById('btn');
const birthdayEl = document.getElementById('birthday');
const resultEl = document.getElementById('result');

btnEl.addEventListener('click', () => {
    let birthdayVal = birthdayEl.value;
    console.log(birthdayVal);
    if(!birthdayVal){
        resultEl.style.color = 'red';
        resultEl.innerText = 'Please Enter Your Birthday.'
    }
    else{
        const age = getAge(birthdayVal);
        resultEl.style.color = 'black';
        resultEl.innerText = `Your age is ${age} years Old.`
    }

    resultEl.style.display = 'block';
})

const getAge = (birthdayVal) => {
    const currentDate = new Date;
    const birthDate = new Date(birthdayVal);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();

    if(month< 0 || month===0 && currentDate.getDate() < birthDate.getDate()){
        age--
    }
    return age;
}

// const ram = jaishreeram();
// console.log(ram);
const jaishreeram = () => {
    return 'Jai Shree Ram'
}