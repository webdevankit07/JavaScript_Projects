const btnEl = document.getElementById('btn');
const animeImgEl = document.getElementById('anime-img');
const animeNameEl = document.getElementById('anime-name');
const animeContainerEl = document.getElementById('anime-container');

btnEl.addEventListener('click', async() => {
    try{
        btnEl.style.background = `gray`;
        btnEl.innerText = `Loading...`;
        animeNameEl.innerText = `updating...`
        animeImgEl.src = `Loading.svg`;


        const res = await fetch('https://api.catboys.com/img');
        const data = await res.json();
        
        animeImgEl.src = `${data.url}`;
        animeNameEl.innerText = `${data.artist}`;
        

        btnEl.style.background = `darkgreen`;
        btnEl.innerText = `Get Anime`;
        animeContainerEl.style.display = `block`;
        
    }catch(err){
        console.log(err);
        animeNameEl.innerText = `An error Occured, please try again later..`;
    }
})