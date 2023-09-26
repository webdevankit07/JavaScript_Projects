const starsEl = document.querySelectorAll('.fa-star');
const colorsArr = ["red", "orange", "lightblue", "lightgreen", "green"]

starsEl.forEach((starEl, index) => {
    starEl.addEventListener('click',() => {
        updateEmoji(index);
        upDateRating(index);
    })
})


const updateEmoji = (index) => {
    const emojisEl = document.querySelectorAll('.fa-regular');
    emojisEl.forEach(emojiEl => {
        emojiEl.style.transform = `translateX(-${index * 61}px)`;
        emojiEl.style.color = `${colorsArr[index]}`;
    })
}


const upDateRating = (index) => {
    starsEl.forEach((starEl,indx) => {
        if(indx < index +1){
            starEl.classList.add('active')
        }
        else{
            starEl.classList.remove('active')
        }
    })
}
updateEmoji(0);
upDateRating(0);