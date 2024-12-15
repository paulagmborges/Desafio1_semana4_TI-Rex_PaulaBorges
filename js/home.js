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

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = emailInput.value.trim();
    const name = nameInput.value.trim();

    if (!validateEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if (!validateName(name)) {
        alert("O nome deve ter entre 2 e 20 caracteres e conter apenas letras.");
        return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('name', name);

    alert("Inscrição realizada com sucesso!");
    form.reset(); 
});
