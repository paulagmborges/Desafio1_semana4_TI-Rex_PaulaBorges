function validateEmail(email) {
    const emailTest = /\w+@\w+\.\w+/;
    return emailTest.test(email); 
}
//console.log(validateEmail("paula@gmail.com")); 
//console.log(validateEmail("DGDGU"));  
function validateName(name) {
    return name.trim() !== '';
}
//console.log(validateName("paula"))
//console.log(validateName(" "))

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
        alert("O nome não pode estar vazio.");
        return;
    }

    else {
        localStorage.setItem('email', email);
        localStorage.setItem('name', name);

        alert("Inscrição realizada com sucesso!");
        form.reset();
    }
});