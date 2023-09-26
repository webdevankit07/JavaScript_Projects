// ....................All Functions..............

// email Validation.....
const isEmail = (emailVal) => {
    let atSymbol = emailVal.indexOf("@");
    let dot = emailVal.lastIndexOf(".");

    if(atSymbol < 1) return false;
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}













// setErrorMsg...
let setErrorMsg = (input, errormsgs) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = "form-control error";
    small.innerText = errormsgs;
}



// setSuccessMsg...
let setSuccessMsg = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}




// success-submit Msg......
let successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    let count = formCon.length - 1;

    for(var i = 0; i < formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            let sRate = 0 + i;
            sendData(usernameVal,count, sRate);
        }else{
            return false;
        }
    }

}

















// Define the validate Function..........
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');


const validate = () =>{
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    // Validate userName......
    if(usernameVal === ""){
        setErrorMsg(username, 'username cannot be blank');
    }else if(usernameVal.length < 3){
        setErrorMsg(username, 'username min 3 char');
    }else{
        setSuccessMsg(username);
    }


    // Validate Email-Id......
    if(emailVal === ""){
        setErrorMsg(email, 'Email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid Email.');
    }else{
        setSuccessMsg(email);
    }


    // Validate phone......
    if(phoneVal === ""){
        setErrorMsg(phone, 'Phone cannot be blank');
    }else if(phoneVal.length != 10){
        setErrorMsg(phone, 'Not a valid Phone Number.');
    }else{
        setSuccessMsg(phone);
    }


    // Validate Password......
    if(passwordVal === ""){
        setErrorMsg(password, 'Pasword cannot be blank');
    }else if(passwordVal.length <= 5){
        setErrorMsg(password, 'Password must have min 6  char');
    }else{
        setSuccessMsg(password);
    }


    // Validate Confirm-password......
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Phone cannot be blank');
    }else if(passwordVal !== cpasswordVal){
        setErrorMsg(cpassword, 'Password Not Matching');
    }else{
        setSuccessMsg(cpassword);
    }

    successMsg(usernameVal);

}






// add event....
const form = document.querySelector('#form');
form.addEventListener('submit', e =>{
    e.preventDefault();
    validate();
})



const sendData = (usernameVal, sRate, count) => {
    if(sRate === count){
        alert('Registration Successful');
        swal("Good job! " + usernameVal,  "Registraion Successful!", "success");
        location.href = `demo.html?username=${usernameVal}`
    }
}


