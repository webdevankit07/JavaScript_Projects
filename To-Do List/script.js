const inputEl = document.querySelector(".input");
const listEl = document.querySelector(".list");




// Updating Local Storage 
const updateLocalStorage = () => {
    const liEls = document.querySelectorAll('li');
    list = [];
    liEls.forEach(liEl => {
        list.push({
            name : liEl.innerText,
            checked : liEl.classList.contains("checked")
        })
    })
    localStorage.setItem("list", JSON.stringify(list));
}


//2. creating Tasks
const toDoList = (task) => {
    let inputText = inputEl.value;
    const liEl = document.createElement("li");
    if(inputText){
        liEl.innerText = inputText;
        listEl.appendChild(liEl);
        inputEl.value = "";
    }


    const chekBtnEl = document.createElement('i');
    chekBtnEl.classList.add('fa-sharp', 'fa-solid', 'fa-square-check')
    liEl.appendChild(chekBtnEl);

    chekBtnEl.addEventListener('click', () => {
        liEl.classList.toggle('checked');
        updateLocalStorage();
    })


    const trashBtnEl = document.createElement('i');
    trashBtnEl.classList.add('fa-solid', 'fa-trash')
    liEl.appendChild(trashBtnEl);
    trashBtnEl.addEventListener('click', () => {
        liEl.remove();
        updateLocalStorage();
    })
    updateLocalStorage();
}
const formEl = document.getElementById("form");
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList();
})












//1. Tasks From localStorage

const localToDoList = (task) => {
    if(task){
        inputText = task.name;             
    }


    const liEl = document.createElement("li");   
    if(task && task.checked){
        liEl.classList.add("checked")
    }


    if(inputText){
        liEl.innerText = inputText;
        listEl.appendChild(liEl);     // listEl declare on Top.......
        inputEl.value = "";
    }


    const chekBtnEl = document.createElement('i');
    chekBtnEl.classList.add('fa-sharp', 'fa-solid', 'fa-square-check')
    liEl.appendChild(chekBtnEl);
    chekBtnEl.addEventListener('click', () => {
        liEl.classList.toggle('checked');
        updateLocalStorage();
    })


    const trashBtnEl = document.createElement('i');
    trashBtnEl.classList.add('fa-solid', 'fa-trash')
    liEl.appendChild(trashBtnEl);
    trashBtnEl.addEventListener('click', () => {
        liEl.remove();
        updateLocalStorage();
    })
    updateLocalStorage();
}
let list = JSON.parse(localStorage.getItem("list"));
list.forEach(task => {
    localToDoList(task);
});