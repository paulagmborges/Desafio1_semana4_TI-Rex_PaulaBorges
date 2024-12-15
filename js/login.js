function validateEmail(email) {
    const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailTest.test(email); 
}
function validatePassword(password) {

    const passwordTest = /^.{6,10}$/; 
    return passwordTest.test(password); 
}
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateEmail(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }
 
    if (!validatePassword(password)) {
        alert("A senha deve ter entre 6 e 10 caracteres.");
        return;
    }

    alert("Login realizado com sucesso!");
    location.href = "kanban.html"; 
    form.reset(); 
});
