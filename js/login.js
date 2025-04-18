function validateEmail(email) {
    const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailTest.test(email);
}

function validatePassword(password) {
    const passwordTest = /^.{6,10}$/;
    return passwordTest.test(password);
}

const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const successBox = document.getElementById('success-box');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";



    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let valid = true;

    if (!validateEmail(email)) {
        emailError.textContent = 'Por favor, insira um email válido.';
        valid = false;
    }

    if (!validatePassword(password)) {
        passwordError.textContent = 'A senha deve ter entre 6 e 10 caracteres.';
        valid = false;
    }

    if (valid) {
        successBox.style.display = 'block';

        setTimeout(() => {
            window.location.href = 'kanban.html';
        }, 2000);
    }
});
