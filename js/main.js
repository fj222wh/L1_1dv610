const submitBtn = document.querySelector('#submitBtn')
const messageDisplay = document.querySelector('#messageDisplay')
const inputName = document.querySelector('#inputName')
const startMenu = document.querySelector('#start')

const outputDiv = document.querySelector('#output')
const outputImg = document.querySelector('#outputImg')

submitBtn.addEventListener('click', (event) => {
    const name = inputName.value
    outputDiv.classList.remove('hidden')
    startMenu.classList.add('hidden')
    renderPicture(name)
})

function showMessage(name) {
    messageDisplay.textContent = 'Hello ' + name
}

async function renderPicture(name) {
    // const img = document.createElement('img')
    // img.setAttribute('alt', 'A random picture of a cat is loading...')
    // img.setAttribute('src', '/images/loading.gif')
    // outputDiv.appendChild(img)

    // const imgURL = await getCatPicture()
    // console.log('this is the url')
    // console.log(imgURL)
    // img.setAttribute('src', imgURL)
    // img.classList.add('catImage')

    const imgURL = await getCatPicture()
    outputImg.setAttribute('src', imgURL)
    showMessage(name)

}

async function getCatPicture() {
    const apiKey = 'live_nXvPKiGk07dhi7fi57A8LUvveH2M81OMy1OPtpY0eixa0bHtMA0eIX2xzKu4ZEAI'
    const url = 'https://api.thecatapi.com/v1/images/search'

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "x-api-key": apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return data[0].url

    } catch(error) {
        console.log(error)
    }
}
