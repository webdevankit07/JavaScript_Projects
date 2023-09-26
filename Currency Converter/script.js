const currencyFirstEl = document.getElementById('currency-first');
const currencySecondEl = document.getElementById('currency-second');
const currencyInput1El = document.getElementById('currency-input-1');
const currencyInput2EL = document.getElementById('currency-input-2');




const update =()=>{
    fetch(`https:/v6.exchangerate-api.com/v6/fdd453ae2303ce45d00ab3d9/latest/${currencyFirstEl.value}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.conversion_rates[currencySecondEl.value];
        // const rate = data;
        console.log(rate);
    });
}

currencyFirstEl.addEventListener('change', update);
currencySecondEl.addEventListener('change', update);
currencyInput1El.addEventListener('change', update);