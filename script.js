const textField = document.querySelector('.qr-input')
const button = document.querySelector('.qr-btn')
const imgField = document.querySelector('.qr-img')
const text = document.querySelector('.text')

const container = document.querySelector('.container')


button.addEventListener('click', (e) => {
    const inputValue = textField.value
    console.log(inputValue)

    if (!inputValue) {
        text.textContent = 'Please Enter Something'
    }
    else {
        text.textContent = ''
        imgField.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        imgField.alt = `QR Code of ${inputValue}`
        addDownloadButton()
    }
})
function addDownloadButton() {

    if (imgField) {
        if (!container.querySelector('a.btn')) {
            const downloadButton = document.createElement('a');
            downloadButton.innerText = 'Download Image';
            downloadButton.classList.add('btn')
            downloadButton.href = imgField.src;
            downloadButton.download = 'downloaded_image.jpg';
            container.appendChild(downloadButton);
        }
    }
}
