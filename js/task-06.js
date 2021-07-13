const input = document.getElementById("validation-input")
console.log(input);
const validQuantity = input.dataset.length
console.log(validQuantity);
function inputValidator(event) {
    // console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === validQuantity) {
        console.log(true);
    }
}


input.addEventListener('input', inputValidator)