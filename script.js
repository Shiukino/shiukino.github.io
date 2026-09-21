// MENSAJE OCULTO
const botonMensaje = document.getElementById("botonMensaje");
const mensajeOculto = document.getElementById("mensajeOculto");

botonMensaje.addEventListener("click", function () {
  mensajeOculto.style.display = "block";
});

// CORAZONES AL HACER CLICK
document.addEventListener("click", function (event) {
  const corazon = document.createElement("div");

  corazon.classList.add("corazon");

  corazon.innerHTML = "💚";

  corazon.style.left = event.clientX + "px";
  corazon.style.top = event.clientY + "px";

  document.body.appendChild(corazon);

  // Eliminar después de la animación

  setTimeout(function () {
    corazon.remove();
  }, 1500);
});
