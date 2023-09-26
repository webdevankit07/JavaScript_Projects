const qrformEl = document.getElementById('qr_form');
const qrContainerEl = document.getElementById('qrContainer');
const qrImgEl = document.getElementById('qrImg');
const qrInputTextEl = document.getElementById('qrInputText');
const generateQREl = document.getElementById('generateQR');







const renderImg = (url) => {
    generateQREl.innerText = "Loading..."
    
    setInterval( () => {
        if(!url){
            return;
        }
        else {
            qrImgEl.src = url;
            qrContainerEl.classList.add("show");
        }
    }, 500)            
            
            
    qrImgEl.addEventListener('load', () => {
        generateQREl.innerText = "QR Code Generated"
    })
}



qrformEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(qrformEl);
    const text = formData.get('qrText');
    if(!text) return;

    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    console.log(text);

    renderImg(qrCodeURL);
})



qrInputTextEl.addEventListener('keyup', () => {

    if(!qrInputTextEl.value.trim()){
        qrContainerEl.classList.remove("show");
    }
})