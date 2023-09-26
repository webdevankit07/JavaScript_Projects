const inputEl = document.getElementById('input');
const meaning_containerEl = document.getElementById('meaning-container');


const fetchAPI = async(word) => {

    try{
        meaning_containerEl.innerHTML = `<p>Searching..</p>`

        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data =  await res.json();
        
        if(data.title){
            meaning_containerEl.innerHTML = `
                <p>Not Found!</p>
                <p>Word Title: "${word}"</p>
                <p>Meaning: N/A </p>
            `

            setTimeout(()=> {
                meaning_containerEl.innerHTML = `
                    <p>Type a word and press Enter.</p>
                `
            }, 5000)

        }else{
            meaning_containerEl.innerHTML = `
            <p>Word Title: <span class="title" id="title">${data[0].word}</span></p>
            <p>Meaning: <span class="meaning" id="meaning">${data[0].meanings[0].definitions[0].definition}</span></p>
            <audio src="${data[0].phonetics[0].audio}" controls id="audio"></audio>
            `
        }

    }
    catch(err){
        console.log(err);
        meaning_containerEl.innerHTML = `<p>Some error Occured, please try agian later..</p>`
    }

}


inputEl.addEventListener('keyup', (e)=>{
    if(e.target.value && e.key === `Enter`){
        fetchAPI(e.target.value);
    }
})