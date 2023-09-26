const searchEl = document.getElementById('search');
const countriesEl = document.querySelectorAll('.countries');

searchEl.addEventListener('keyup', () => {
    const inputVal = searchEl.value;
    
    countriesEl.forEach(country => {
        if(country.innerText.split(" ").join("").toLowerCase().includes(inputVal.split(" ").join("").toLowerCase())){
            country.style.display = ``;
        }
        else{
            country.style.display = `none`;
        }
    })
})