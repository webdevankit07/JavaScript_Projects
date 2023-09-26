const btnEl = document.getElementById('btn');
const colorsContainer = document.querySelector('.colors_container');


const singleHexColorGenerator = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        let random = Math.round(Math.random()*15);
        hexColor += hex[random];
    }
    return hexColor;
}


const colorPalateGenerator = () => {
    const colorPalate = [];
    for(i = 0; i<4; i++){
        colorPalate.push(singleHexColorGenerator());
    }
    return colorPalate;
}



const renderColorPalate = () =>{

    colorsContainer.innerHTML = "";
    let colorPalate = colorPalateGenerator();
    colorPalate.forEach((color, i) => {
        // craete colorPlatae div 
        const colorDiv = document.createElement('div')
        colorDiv.id = `color${i +1}`
        colorDiv.className = `colorBox`
        colorDiv.style.background = color;
        colorsContainer.appendChild(colorDiv)

        // craete color tage = ptag
        const colorTag = document.createElement('p')
        colorTag.id = `colorTag${i +1}`;
        colorTag.className = `colorTag`;
        colorTag.innerHTML = color;
        colorDiv.appendChild(colorTag);
    });

}
renderColorPalate();
btnEl.addEventListener('click', renderColorPalate)





// cpoy Function ..........
const colortags = document.querySelectorAll('.colorTag');

const copytoClipBoard = (id) => {
    const el = document.getElementById(id);

    navigator.clipboard.writeText(el.innerText).then(() => alert('Text CopiedS')).catch((error) => alert('Couldnnot Cpoy'));
}

colortags.forEach((colortag, i) => {
    colortag.addEventListener('click', () => copytoClipBoard(`colorTag${i +1}`))
})