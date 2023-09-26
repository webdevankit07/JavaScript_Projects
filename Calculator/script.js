let string="";
let buttons = document.querySelectorAll('.button');
let inputEL = document.querySelector('.input');

Array.from(buttons).forEach((button) =>{

    button.addEventListener('click', (e) => {

        if(e.target.innerHTML == 'AC'){
            string =""
            inputEL.value = string;
        }
        else if ( e.target.innerHTML == '='){
            string = eval(string);
            inputEL.value = string;
        }
        else if ( e.target.innerHTML == 'DE'){
            string = string.toString().slice(0,-1);
            inputEL.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            inputEL.value = string;
        }

    })

})