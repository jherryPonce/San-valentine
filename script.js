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

button.addEventListener("click",()=>{

    alert('AL MENOS LO INTENTE');
})


// const path = window.location.pathname; 
// const nombreSPLIT = path.split("/")[1] || "AMOR"; 
// const nombreFormateado = decodeURIComponent(nombreSPLIT).replace(/-/g, " ");
// const nombre = nombreFormateado.charAt(0).toUpperCase() + nombreFormateado.slice(1);

// document.getElementById("pregunta").textContent = `¿${nombre}, QUIERES SER MI SAN VALENTÍN?`;


const path = window.location.pathname; 

// Asegurarse de que hay un nombre en la URL o usar un valor predeterminado
const nombreSPLIT = path.split("/")[1] || "AMOR"; 

// Decodificar el nombre, manejar guiones y formatear
const nombreFormateado = decodeURIComponent(nombreSPLIT).replace(/-/g, " ");
const nombre = nombreFormateado.charAt(0).toUpperCase() + nombreFormateado.slice(1);

// Actualizar el texto en la página
const preguntaElement = document.getElementById("pregunta");
if (preguntaElement) {
  preguntaElement.textContent = `¿${nombre}, QUIERES SER MI SAN VALENTÍN?`;
}


window.addEventListener("click", () => {
    const audio = document.getElementById("miAudio");
    audio.muted = false;
}, { once: true }); // Solo ejecuta esto una vez