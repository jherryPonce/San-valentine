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

    // Habilita la reproducción en la primera interacción
enableAudioOnInteraction();

});


button.addEventListener("touchstart", () => {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
    // Habilita la reproducción en la primera interacción
enableAudioOnInteraction();

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




  //parte 2

  document.getElementById("generarEnlace").addEventListener("click", function () {
    const nombre = document.getElementById("nombreInput").value.trim();
    const numero = document.getElementById("numeroInput").value.trim();
    
    if (nombre === "" || numero === "") {
      alert("Por favor, ingresa el nombre y el número de WhatsApp.");
      return;
    }

   // Formatear nombre para URL
   const nombreFormateado = encodeURIComponent(nombre.replace(/\s+/g, "-"));

   // Obtener la URL actual del sitio
   const baseUrl = window.location.origin;
   const enlaceFinal = `${baseUrl}/${nombreFormateado}`;

   // Mostrar loader
   document.getElementById("loader").style.display = "block";
   
   setTimeout(() => {
     // Ocultar loader y mostrar el enlace generado
     document.getElementById("loader").style.display = "none";
     document.getElementById("enlaceCard").style.display = "block";
     
     const enlaceElemento = document.getElementById("enlaceGenerado");
     enlaceElemento.href = enlaceFinal;
     enlaceElemento.textContent = enlaceFinal;
   }, 1500); // Simulación de carga

   // Enviar por WhatsApp
   document.getElementById("enviarWhatsApp").addEventListener("click", function () {
     const mensaje = `¡Hola! Te comparto este enlace especial: ${enlaceFinal}`;
     const whatsappUrl = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
     window.open(whatsappUrl, "_blank");
   });
 });


  document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    const nombreSPLIT = path.split("/")[1];

    if (nombreSPLIT) {
        document.getElementById("portada").classList.add("hidden");
        document.getElementById("contenedor").classList.remove("hidden");
        document.getElementById("contenedor").style.display = "flex";
    }
});