// Obtener el tiempo de inicio de la cuenta regresiva
let startTime = localStorage.getItem("countdownStartTime");
let countdownTime = 5 * 60 * 1000; // 5 minutos

// Calcular cuánto tiempo ha pasado desde que comenzó la cuenta regresiva
if (startTime) {
    let elapsedTime = new Date().getTime() - startTime;
    countdownTime -= elapsedTime; // Resta el tiempo transcurrido de la cuenta regresiva
}

// Asegúrate de que el tiempo no sea negativo
if (countdownTime <= 0) {
    countdownTime = 0; // Resetea a 0 si ya ha pasado el tiempo
}

let countdownElement = document.getElementById("relojMain");

// Función para iniciar la cuenta regresiva
function startCountdown() {
    let countdownInterval = setInterval(() => {
        countdownTime -= 1000;
        let minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

        countdownElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            window.location.href = "enterCode.html"; // Redirige a la página de inicio
        }
    }, 1000);
}

// Iniciar la cuenta regresiva
startCountdown();
