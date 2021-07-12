const counter = document.querySelector('#value')
const btnIncrement = document.querySelector('button[data-action = "increment"]')
const btnDecrement = document.querySelector('button[data-action = "decrement"]')


let counterValue = 0

btnIncrement.addEventListener('click', () => {
    counterValue += 1
    counter.textContent = `${counterValue}`
})
btnDecrement.addEventListener('click', () => {
    counterValue -= 1
    counter.textContent = `${counterValue}`
})

