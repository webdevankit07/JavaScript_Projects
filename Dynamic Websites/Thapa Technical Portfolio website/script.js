//? ========================================
//!   Creating Portfolio tabbed component          
//? ========================================

const p_ImgELs = document.querySelectorAll('.img-overlay');
const p_BtnEls = document.querySelectorAll('.p-btn');

p_BtnEls.forEach(btn => {
    btn.addEventListener('click', () => {
        p_BtnEls.forEach( btn => btn.classList.remove('p-btn-active') );
        btn.classList.add('p-btn-active')


        // to find the number in data atrr
        const btn_num = btn.getAttribute('data-btn-num');
        const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

        p_ImgELs.forEach(img => img.classList.add('p-img-hidden'));
        img_active.forEach(img => img.classList.remove('p-img-hidden'));
    })
})





//? ========================================
//!   Our Testimonial Section - Swiper          
//? ========================================
new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});
const widthSize = window.matchMedia('(max-width: 780px)');

const myJsMedia = (widthSize) => {
    if(widthSize.matches){
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay:{
                delay:2500,
            },
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        });
    }
    else{
        new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay:{
                delay:2500,
            },
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        });
    }
}
myJsMedia(widthSize);
widthSize.addEventListener('change', myJsMedia(widthSize))



//? ========================================
//!   Scroll to top Button          
//? ========================================
const footerEl = document.querySelector('.section-footer')
const scrollElement = document.createElement('div');
scrollElement.classList.add('scrollTop-style');
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-Top"></ion-icon>`;
footerEl.after(scrollElement);

scrollElement.addEventListener('click', () => {

    document.documentElement.scrollTop = 0;
})





//? ========================================
//!   Scroll sticky navbar          
//? ========================================
const bioDataSection = document.querySelector('.section-bioData');
const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if(window.scrollY > bioDataSection.offsetTop - 100){
        headerEl.style.position = 'sticky';
        headerEl.style.top = '0';
        headerEl.style.boxShadow = 'var(--shadow)';
    }
    else{
        headerEl.style.position = 'relative';
        headerEl.style.top = '0';
        headerEl.style.boxShadow = 'none';
    }
})





//? ========================================
//!   Counter Number         
//? ========================================
const counterSection = document.querySelector('.section-work-data');
const counterNumbers = document.querySelectorAll('.counter-numbers');

window.addEventListener('scroll', () => {
    if(window.scrollY > 1900 && window.scrollY < 1950){
        counterNumbers.forEach(counterNumber => {
            const updateCounter = () => {
                const tragetCount = +counterNumber.getAttribute('data-set');
                const StartingCount = +counterNumber.innerHTML;
                const incr = tragetCount/100;
                
                if(StartingCount < tragetCount){
                    counterNumber.innerHTML = `${Math.round(StartingCount+incr)}`
                    setTimeout(updateCounter, 20);
                }
                else{
                    counterNumber.innerHTML = tragetCount;
                }
            }
            updateCounter();
        })
    }
})






//? ========================================
//!   creatin responsive navbar      
//? ========================================
const NavbarBtnEl = document.querySelector('.mobile-navbar-btn');

NavbarBtnEl.addEventListener('click', () => {   
    headerEl.classList.toggle('active');
})










//? ========================================
//!   Form VAlidation And Wirking Form   
//? ========================================
