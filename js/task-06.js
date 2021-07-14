const input = document.getElementById("validation-input")

const validQuantity = Number(input.dataset.length)

function inputBlured(event) {

    if (event.currentTarget.value.length === validQuantity) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        console.log(false);
        input.classList.add('invalid')
        input.classList.remove('valid')
    }

}

input.addEventListener('blur', inputBlured)

