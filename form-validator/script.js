const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if password match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        messageContainer.style.borderColor = 'green';
        message.style.color = 'green';
    }
}

function storeForm() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Validate Fomr
    validateForm();
    if (isValid && passwordsMatch) {
        storeForm();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);