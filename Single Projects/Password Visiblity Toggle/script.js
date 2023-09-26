const eyeEl = document.getElementById('eye');
const passwordEl = document.getElementById('password');

eyeEl.addEventListener('click', () => {
    eyeEl.classList.toggle('fa-eye');
    if(eyeEl.classList.contains('fa-eye')){
        passwordEl.setAttribute('type', 'text');
    }else{
        passwordEl.setAttribute('type', 'password');
    }
}) 