const searchBarContainerEl = document.querySelector('.search_bar_container');
const magnifierEl = document.querySelector('.magnifier');
const mic_iconEl = document.querySelector('.mic-icon');
const inputEL = document.querySelector('.input');



magnifierEl.addEventListener('click', () => {
    searchBarContainerEl.classList.toggle('active');
})


inputEL.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
        window.open(`https://www.google.com/search?q=${inputEL.value}&sxsrf=AJOqlzX8cEcBUS-Wr4VKy62kOk-QS2Pf-g%3A1678425959658&source=hp&ei=Z78KZK6iJpD5wQOYnIn4Aw&iflsig=AK50M_UAAAAAZArNdy1gV4Lv2KcS_Auig1PYqFnuhYSp&ved=0ahUKEwju8ev4z9D9AhWQfHAKHRhOAj8Q4dUDCAg&uact=5&oq=ankit&gs_lcp=Cgdnd3Mtd2l6EAMyCAguELEDEIAEMggILhCxAxCABDILCC4QgwEQsQMQgAQyCggAEIAEEAIQywEyBQgAEIAEMgUIABCABDIFCAAQgAQyCAgAEIAEELEDMgsILhCABBCxAxCDATIICAAQgAQQsQM6BAgjECc6EQguEIAEELEDEIMBEMcBENEDOggIABCxAxCDAToLCAAQgAQQsQMQgwE6FAguEIAEELEDEIMBEMcBENEDENQCOgQIABBDOgoIABCxAxCDARBDOgoILhCxAxCDARBDOgQILhBDOgcILhCxAxBDOhAIABCABBAUEIcCELEDEIMBOgcIABCxAxBDOgoILhCDARCxAxBDOgcILhDUAhBDOggILhCABBCxA1AAWM4dYOohaAFwAHgAgAGQAogBzwiSAQUwLjUuMZgBAKABAQ&sclient=gws-wiz`)
    }
})
