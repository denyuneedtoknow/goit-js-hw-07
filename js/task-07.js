const rangeInput = document.querySelector('#font-size-control')
const variableText = document.querySelector('#text')

function sizeChanger() {

    variableText.style.fontSize = `${rangeInput.value}px`
}
rangeInput.addEventListener('change', sizeChanger)