window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1200); // ⏱️ tiempo de animación
});


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


// ===== DATOS =====
const aves = [
  {
    nombre: "colibri_cometa",
    img1: "imagenes/colibri_cometa_v1.png",
    img2: "imagenes/colibri_cometa_v2.png",
    audio: "audios/colibri_cometa.mp3"
  },
  {
    nombre: "colibri_gigante",
    img1: "imagenes/colibri_gigante_v1.png",
    img2: "imagenes/colibri_gigante_v2.png",
    audio: "audios/colibri_gigante.mp3"
  },
  {
    nombre: "colibri_rutilante",
    img1: "imagenes/colibri_rutilante_v1.png",
    img2: "imagenes/colibri_rutilante_v2.png",
    audio: "audios/colibri_rutilante.mp3"
  }
];

// ===== ESTADO =====
let indiceActual = 0;
let mostrandoA = true;

// ===== ELEMENTOS =====
const imgA = document.getElementById("imgA");
const imgB = document.getElementById("imgB");
const audio = document.getElementById("audioAve");

const btnLeft = document.getElementById("leftBtn");
const btnRight = document.getElementById("rightBtn");
const escucharBtn = document.getElementById("escucharBtn");

// ===== CAMBIO SUAVE REAL =====
function cambiarImagen(src) {
  const activa = mostrandoA ? imgA : imgB;
  const inactiva = mostrandoA ? imgB : imgA;

  inactiva.src = src;

  // forzar render (truco clave)
  inactiva.offsetHeight;

  inactiva.classList.add("activa");
  activa.classList.remove("activa");

  mostrandoA = !mostrandoA;
}

// ===== MOSTRAR AVE =====
function mostrarAve() {
  const ave = aves[indiceActual];
  cambiarImagen(ave.img1);
}

// ===== BOTONES =====
btnRight.addEventListener("click", () => {
  indiceActual = (indiceActual + 1) % aves.length;
  detenerAudio();
  mostrarAve();
});

btnLeft.addEventListener("click", () => {
  indiceActual = (indiceActual - 1 + aves.length) % aves.length;
  detenerAudio();
  mostrarAve();
});

// ===== ESCUCHAR =====
escucharBtn.addEventListener("change", () => {
  const ave = aves[indiceActual];

  if (escucharBtn.checked) {
    cambiarImagen(ave.img2);

    audio.src = ave.audio;
    audio.play();
  } else {
    detenerAudio();
  }
});

// ===== DETENER =====
function detenerAudio() {
  audio.pause();
  audio.currentTime = 0;

  escucharBtn.checked = false;

  const ave = aves[indiceActual];
  cambiarImagen(ave.img1);
}

// ===== FIN DE AUDIO =====
audio.addEventListener("ended", () => {
  detenerAudio();
});

// ===== INICIAL =====
mostrarAve();


// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {

  const btnMamiferos = document.getElementById("btn_mamiferos");
  const btnInsectos = document.getElementById("btn_insectos");

  // Evento botón mamíferos
  btnMamiferos.addEventListener("click", function () {
    // Aquí se mantiene tu animación existente (si ya la tienes)
    
    // Redirección después de un pequeño delay (opcional)
    setTimeout(() => {
      window.location.href = "https://ray123anza.github.io/transporte-lapaz/";
    }, 500); // puedes ajustar el tiempo
  });

  // Evento botón insectos
  btnInsectos.addEventListener("click", function () {
    // Mantiene tu animación

    setTimeout(() => {
      window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=w5r1XOvcsDL8kk2u";
    }, 500);
  });

});