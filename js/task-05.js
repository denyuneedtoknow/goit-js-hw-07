const input = document.getElementById("name-input")
const username = document.getElementById("name-output")

function inputChange(event) {
    if (input.value !== '') {
        username.textContent = event.currentTarget.value
    } else {
        username.textContent = "незнакомец"
    }
}

input.addEventListener('input', inputChange)







