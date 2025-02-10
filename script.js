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


const path = window.location.pathname; 
const nombre = path.split("/")[1] || "AMOR"; 
const nombreFormateado = decodeURIComponent(nombre).replace(/-/g, " ");
const nombreCapitalizado = nombreFormateado.charAt(0).toUpperCase() + nombreFormateado.slice(1);

document.getElementById("pregunta").textContent = `¿${nombreCapitalizado}, QUIERES SER MI SAN VALENTÍN?`;


window.addEventListener("click", () => {
    const audio = document.getElementById("miAudio");
    audio.muted = false;
}, { once: true }); // Solo ejecuta esto una vez