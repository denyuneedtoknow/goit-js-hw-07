const refs = {

    inputNumber: document.querySelector('input'),
    btnRender: document.querySelector('[data-action=render]'),
    btnDestroy: document.querySelector('[data-action=destroy]'),
    boxesArea: document.querySelector('#boxes')
}

refs.boxesArea.style.display = "flex";
refs.boxesArea.style.alignItems = 'center'
refs.boxesArea.style.display = "grid";
refs.boxesArea.style.gridTemplateColumns = "1fr 1fr 1fr";

function random_rgb() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
}

function createBoxes(amount) {


    const divArray = []
    amount = refs.inputNumber.value
    for (let i = 0; i < amount; i += 1) {
        const randomColor = random_rgb();

        const divHeight = 30 + 10 * i
        const divWidth = 30 + 10 * i

        divArray[i] = document.createElement('div')
        divArray[i].style.height = `${divHeight}px`
        divArray[i].style.width = `${divWidth}px`
        divArray[i].style.backgroundColor = randomColor
        divArray[i].style.margin = '10px'

    }
    refs.boxesArea.append(...divArray)
    refs.inputNumber.value = ""

}

function destroyBoxes() {
    refs.boxesArea.innerHTML = ''
}


refs.btnRender.addEventListener('click', createBoxes)
refs.btnDestroy.addEventListener('click', destroyBoxes)




