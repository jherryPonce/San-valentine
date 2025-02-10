const button = document.getElementById("movableButton");
button.addEventListener("touchstart", moveButton); 
button.addEventListener("mouseenter", moveButton); 


const path = window.location.pathname; 
const nombreSPLIT = path.split("/")[1] || "AMOR"; 
const nombreFormateado = decodeURIComponent(nombreSPLIT).replace(/-/g, " ");
const nombre = nombreFormateado.charAt(0).toUpperCase() + nombreFormateado.slice(1);


const preguntaElement = document.getElementById("pregunta");
if (preguntaElement) {
  preguntaElement.textContent = `¿${nombre}, QUIERES SER MI SAN VALENTÍN?`;
}


window.addEventListener("click", () => {
    const audio = document.getElementById("miAudio");
    audio.muted = false;
}, { once: true }); // Solo ejecuta esto una vez


const moveButton = () => {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;

  };

  