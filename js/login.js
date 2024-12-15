
function validateEmail(email) {
    const emailTest = /\w+@\w+\w+/;
    return emailTest.test(email); 
}

//console.log(validateEmail("paula@gmail.com")); 
//console.log(validateEmail("DGDGU"));  
 
function validatePassword(password) {
    const passwordTest = /^(?=.{6,10}$)/; 
    return passwordTest.test(password); 
}
//console.log(validatePassword("uIh"));   
//console.log(validatePassword("uoguu")); 
//console.log(validatePassword("abcdef"));
//console.log(validatePassword("abcdefghij")); 
//console.log(validatePassword("abcdefghijk")); 

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function (event) {
 
const email = emailInput.value.trim();
const password = passwordInput.value.trim();

    if (!validateEmail(email)) {
        alert("Por favor, insira um email válido.");
        isValid = false;
    }

    if (!validatePassword(password)) {
        alert("A senha deve ter entre 6 e 10 caracteres.");
        isValid = false;
    }
    if (isValid) {
        alert("Login realizado com sucesso!");
        form.submit();
    }
});
