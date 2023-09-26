const ratingEls = document.querySelectorAll('.rating');
let selectedRating="";


ratingEls.forEach(rating => {
    rating.addEventListener('click', (e) => {
        ratingEls.forEach(rating => {
            rating.classList.remove('active');
        })
        rating.classList.add('active');

        selectedRating = e.target.innerText || e.target.parentNode.innerText;
    });
});




const contaierEl = document.getElementById('main-container')
const btnEl = document.getElementById('btn');
btnEl.addEventListener('click', () => {
    if(selectedRating !== ""){
        contaierEl.innerHTML = `
            <h1>Thank You!</h1>
            <br>
            <strong>Feedback: ${selectedRating}</strong>
            <br>
            <br>
            <p>We'll use your feedback to improve our coustomer support.</p>
        `
    }
})


