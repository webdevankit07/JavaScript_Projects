const countrsEl = document.querySelectorAll(".counter");


countrsEl.forEach(counter => {
    const upDateCounter = () => {
        const targetCount = +counter.getAttribute('data-ceil');
        const currentCount = +counter.innerText;
        const incr = targetCount / 10;
        
        if(currentCount < targetCount){
            counter.innerText = `${Math.round(currentCount+incr)}`;
            setTimeout(upDateCounter, 50);
        }
        else{
            counter.innerText = targetCount;
        }
    }
    upDateCounter();
})
