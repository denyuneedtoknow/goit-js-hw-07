const refs = {

    inputNumber: document.querySelector('input'),
    btnRender: document.querySelector('[data-action=render]'),
    btnDestroy: document.querySelector('[data-action=destroy]'),
    boxesArea: document.querySelector('#boxes')
}

console.dir(refs.btnRender);
console.dir(refs.btnDestroy);
console.dir(refs.inputNumber);

const DivMaker = function (height, width) {
    // const divElement = document.createElement('div')
    // divElement.innerHTML = `height = ${height}px, width = ${width}px`
    // divElement.setAttribute('heigth', `${height}px`)
    // divElement.setAttribute('width', `${width}px`)
    // divElement.style.backgroundColor = rgb(255, 255, 0)
    refs.boxesArea.insertAdjacentHTML('beforeEnd', `<div style="height:${height}px; width:${width}px; background-color:rgb(255,255,0)></div>`)
    console.dir(refs.boxesArea);
}

function createBoxes(amount) {
    amount = inputNumber.value
    console.log(amount);
}
// function destroyBoxes()

refs.btnRender.addEventListener('click', DivMaker)
// btnDestroy.addEventListener('click', destroyBoxes)

DivMaker(50, 60)
