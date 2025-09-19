let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('list.item')
let indicators = document.querySelector('indicators')
let dots = indicators.querySelectorAll('ul li')

nextButton.onclick = () => {
    console.log("Botão Next")
}

prevButton.onclick = () => {
    console.log("Botão prev")
}