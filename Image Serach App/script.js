const apiKey = `mI5fSaPQTvEBEeFH2M3agQmQv_XNLVaFZqA4jVNczyk`;
const formEl = document.querySelector('form');
const searchInputEl = document.getElementById('search-input');
const searchResultEl = document.querySelector('.search-results');
const showMoreButton = document.getElementById('show-more-button');
let page = 1;

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    searchImages();
})

showMoreButton.addEventListener('click', () => {
    searchImages();
})


const searchImages = async() => {
    inputData = searchInputEl.value;
    console.log(inputData);

    const res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`)
    const data = await res.json();
    const results = data.results;

    results.forEach(result => {
        searchResultEl.innerHTML += `
            <div class="search-result">
                <img src=${result.links.download} alt="image">
                <a href=${result.links.html} target="_blank" rel="noopener noreferrer">${result.alt_description
            }</a>
            </div>
        `
    })
}