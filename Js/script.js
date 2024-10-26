function verificarCodigo() {
    const codigoIngresado = document.getElementById("codigo").value.trim(); // Elimina espacios en blanco

    console.log("Código ingresado:", codigoIngresado); // Debug: verifica el valor ingresado

    // Verifica si el código es correcto (sin espacios y en minúsculas)
    if (codigoIngresado.toLowerCase() === "makinglove") {
        // Establece el tiempo de inicio de la cuenta regresiva en localStorage
        localStorage.setItem("countdownStartTime", new Date().getTime());
        // Redirige a la página de cuenta regresiva
        window.location.href = "unlockFinal.html"; // Cambia esto a la ruta correcta de tu página de cuenta regresiva
    } else {
        alert("Código incorrecto. Intenta nuevamente.");
    }
}