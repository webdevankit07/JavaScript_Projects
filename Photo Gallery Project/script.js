const btnEl = document.getElementById('btn');
const errormassegeEl = document.getElementById(`errormassege`);
const galleryEl = document.getElementById(`gallery`);



btnEl.addEventListener('click', async() => {
    const inputValue = document.getElementById('input').value;
    if(inputValue<1 || inputValue>10){
        errormassegeEl.innerText = `Number Should be Between 0 and 11`;
        return;
    }

    try{
        btnEl.style.display = `none`;
        galleryEl.innerHTML = `<img src="loading.svg" alt="image">`;
        const res = await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random()*1000)}&client_id=UAjdp5WsFJE9Y_hIBWiqEBpZUSimElAmmd06_E3kWhY`)
        const data = await res.json();
        console.log(data);
        
        if(data){
            let i = 1;
            galleryEl.innerHTML = ``;
            data.forEach(img => {
                    console.log(`image ${i}` , img.urls.small);
                    const image = `<img src="${img.urls.small}" alt="image">`
                    galleryEl.innerHTML += image;
                    i++;
                })
        }
        errormassegeEl.innerText = ``;
        btnEl.style.display = `block`;

    }
    catch(err){
        console.log(err);
        console.log(`sdzjkcndjknkjnkj`);
    }

})