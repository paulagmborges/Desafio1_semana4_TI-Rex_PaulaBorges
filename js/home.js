function validateEmail(email) {
    const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailTest.test(email); 
}

function validateName(name) {
    const nameTest =  /^[a-zA-Zá-üÁ-ÜçÇ]{3,20}$/;
    return nameTest.test(name.trim()); 
}

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const emailError = document.getElementById('email-error');
const nameError = document.getElementById('name-error');
const successBox = document.getElementById('success-box');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = emailInput.value.trim();
    const name = nameInput.value.trim();
    let valid = true;

    emailError.textContent = '';
    nameError.textContent = '';
    successBox.style.display = 'none';

    if (!validateEmail(email)) {
        emailError.textContent = 'Por favor, insira um email válido.';
        valid = false;
    }

    if (!validateName(name)) {
        nameError.textContent = 'O nome deve ter entre 3 e 20 caracteres e conter apenas letras.';
        valid = false;
    }

    // Só continua se estiver tudo válido
    if (valid) {
        localStorage.setItem('email', email);
        localStorage.setItem('name', name);

        successBox.textContent = "Inscrição realizada com sucesso!";
        successBox.style.color = "green";
        successBox.style.display = 'block';

        form.reset(); 
    }
});

