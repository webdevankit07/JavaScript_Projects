const btnEL = document.getElementById('btn');
const appEl = document.getElementById('app');

btnEL.addEventListener('click', () => {
    const noteObj = {
        id : Math.round(Math.random()*100000),
        content : "",
    }

    const element = document.createElement("textarea");
    element.classList.add('note');
    element.placeholder = "Empty Note";
    element.value = noteObj.content;

    element.addEventListener("dblclick", ()=>{
        const warning = confirm('Do you Want to Delete your note');
        if(warning){
            
        }
    })
})