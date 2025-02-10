const path = window.location.pathname; 

const nombreSPLIT = path.split("/")[1] || "AMOR"; 

const nombreFormateado = decodeURIComponent(nombreSPLIT).replace(/-/g, " ");
const nombre = nombreFormateado.charAt(0).toUpperCase() + nombreFormateado.slice(1).toUpperCase();



const preguntaElement = document.getElementById("pregunta");
if (preguntaElement) {
  preguntaElement.textContent = `¿${nombre}, QUIERES SER MI SAN VALENTÍN?`;
}

const button = document.getElementById("movableButton");

button.addEventListener("mouseenter", () => {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;

});


button.addEventListener("touchstart", () => {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;

});


button.addEventListener("click",()=>{

    button.textContent = 'MEJOR VUELVE MAÑANA'
})


const audio = document.getElementById("miAudio");

// Función para reproducir el audio al interactuar con la página
const enableAudio = () => {
  audio.play().catch((error) => {
    console.warn("El navegador bloqueó el audio automático:", error);
  });
};

// Detecta la primera interacción del usuario
const enableAudioOnInteraction = () => {
  document.body.addEventListener("click", enableAudio, { once: true });
  document.body.addEventListener("touchstart", enableAudio, { once: true });
};

// Habilita la reproducción en la primera interacción
enableAudioOnInteraction();