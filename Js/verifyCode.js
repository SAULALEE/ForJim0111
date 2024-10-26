// Define el código correcto
const correctCode = "00:00"; // Cambia este código a tu preferencia

function verifyCode() {
    let codeInput = document.getElementById("codeInput").value;
    let message = document.getElementById("message");

    // Compara el código ingresado con el código correcto
    if (codeInput === correctCode) {
        message.innerText = "¡Código aceptado! Redirigiendo...";
        localStorage.setItem("countdownStartTime", new Date().getTime()); // Guardar tiempo actual en local storage
        setTimeout(() => {
            window.location.href = "unlockMain.html"; // Asegúrate de que la página exista
        }, 1000);
    } else {
        message.innerText = "Código incorrecto. Por favor, intenta de nuevo.";
    }
}