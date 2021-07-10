const input = document.querySelector('#validation-input');

function checkСondition(event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
       return input.style.borderColor = "green";
    }
    else return input.style.borderColor = "red";
}

input.addEventListener('blur', checkСondition);