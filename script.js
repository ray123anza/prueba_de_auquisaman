const escuchar = document.getElementById("escucharBtn");
const left = document.getElementById("leftBtn");
const right = document.getElementById("rightBtn");

// función para apagar ESCUCHAR
function apagarEscuchar() {
  if (escuchar.checked) {
    escuchar.checked = false;
  }
}

// eventos
left.addEventListener("click", apagarEscuchar);
right.addEventListener("click", apagarEscuchar);

const btnAves = document.getElementById("btn_aves");
const btnMamiferos = document.getElementById("btn_mamiferos");
const btnInsectos = document.getElementById("btn_insectos");

const botones = [btnAves, btnMamiferos, btnInsectos];

// 👉 estado inicial (al recargar)
window.addEventListener("load", () => {
  btnAves.checked = false;
  btnMamiferos.checked = true;
  btnInsectos.checked = true;
});

// 👉 lógica de exclusividad
botones.forEach(boton => {
  boton.addEventListener("click", (e) => {

    // si el botón ya está activo → NO hacer nada
    if (boton.checked) {
      e.preventDefault(); // evita que se apague
      return;
    }

    // apagar todos
    botones.forEach(b => b.checked = true);

    // encender solo el presionado
    boton.checked = false;
  });
});