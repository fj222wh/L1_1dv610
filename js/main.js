const submitBtn = document.querySelector('#submitBtn')
const messageDisplay = document.querySelector('#messageDisplay')
const inputName = document.querySelector('#inputName')
const startMenu = document.querySelector('#start')

const outputDiv = document.querySelector('#output')
const outputImg = document.querySelector('#outputImg')

const restartBtn = document.querySelector('#restart')

submitBtn.addEventListener('click', (event) => {
    const name = inputName.value
    messageDisplay.textContent = ''
    outputDiv.classList.remove('hidden')
    startMenu.classList.add('hidden')
    renderPicture(name)
})

restartBtn.addEventListener('click', (event) => {
    inputName.value = ''
    outputImg.style.opacity = '0'
    outputDiv.classList.add('hidden')
    startMenu.classList.remove('hidden')
})

function showMessage(name) {
    messageDisplay.textContent = 'Hej igen ' + name + '!'
}

async function renderPicture(name) {
    const imgURL = await getCatPicture()
    console.log(imgURL)
    outputImg.style.backgroundImage = `url('${imgURL}')`
    showMessage(name)
    outputImg.style.opacity = '1'
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


