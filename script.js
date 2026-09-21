const botonMensaje = document.getElementById("botonMensaje");
const mensajeOculto = document.getElementById("mensajeOculto");

botonMensaje.addEventListener("click", function () {
  mensajeOculto.style.display = "block";
});

document.addEventListener("click", function (event) {
  const corazon = document.createElement("div");

  corazon.classList.add("corazon");

  corazon.innerHTML = "❤️";

  corazon.style.left = event.clientX + "px";
  corazon.style.top = event.clientY + "px";

  document.body.appendChild(corazon);

  setTimeout(function () {
    corazon.remove();
  }, 1500);
});
