const containerEl = document.querySelector('.container');
const kits = ["crash", "kick", "snare", "tom"];


kits.forEach(kit => {
    const btnEl = document.createElement('button');
    btnEl.classList.add('btn')
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = `url('./images/${kit}.png')`
    containerEl.appendChild(btnEl);

    const audioEl = document.createElement('audio');
    audioEl.src = `./sounds/${kit}.mp3`;
    containerEl.appendChild(audioEl);

    btnEl.addEventListener('click', () => {
        audioEl.play();
    })

    window.addEventListener('keydown', (e) => {
        if(e.key === kit.slice(0,1)){
            audioEl.play();
            btnEl.style.backgroundSize = "105%";
            setTimeout(() => {
            btnEl.style.backgroundSize = "100%";
            }, 100);
        }
    })
})