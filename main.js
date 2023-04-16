const form = document.querySelector("form");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");

function validaNumeros(numeroA, numeroB) {
    
    return numeroA > numeroB;
}

form.addEventListener("submit", function(e) {

    e.preventDefault();
    const numeroA = document.querySelector("#numeroA");
    const numeroB = document.querySelector("#numeroB");
    
    const validacao = validaNumeros(Number.parseInt(numeroA.value), Number.parseInt(numeroB.value));

    console.log(validacao);

    if(!validacao) {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";

    } else { 
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
    }
    
});