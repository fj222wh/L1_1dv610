/**
 * The main module.
 */

import { getCatPicture, getRandomQuote} from "./fetchData.js"

const submitBtn = document.querySelector('#submitBtn')
const messageDisplay = document.querySelector('#messageDisplay')
const inputName = document.querySelector('#inputName')
const startMenu = document.querySelector('#start')
const outputDiv = document.querySelector('#output')
const outputImg = document.querySelector('#outputImg')
const restartBtn = document.querySelector('#restart')
const quote = document.querySelector('#quote')

submitBtn.addEventListener('click', (event) => {
    const name = inputName.value
    startApp(name)

})

restartBtn.addEventListener('click', (event) => {
    resetApp()
})

function startApp(name) {
    messageDisplay.textContent = ''
    outputDiv.classList.remove('hidden')
    startMenu.classList.add('hidden')
    renderPicture(name)
}

function resetApp() {
    quote.textContent = ''
    inputName.value = ''
    outputImg.style.opacity = '0'
    outputDiv.classList.add('hidden')
    startMenu.classList.remove('hidden')
}

async function showMessage(name) {
    quote.textContent = await getRandomQuote()
    messageDisplay.textContent = 'Welcome back ' + name + '!'
}

async function renderPicture(name) {
    const imgURL = await getCatPicture()
    console.log(imgURL)
    outputImg.style.backgroundImage = `url('${imgURL}')`
    showMessage(name)
    outputImg.style.opacity = '1'
}


