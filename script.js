// Array con información de las tarjetas
const viajes = [
    { img: "assets/images/dubai-img.png", ciudad: "القاهرة", precio: "رحلة 1500 دولار / 3 أيام" },
    { img: "assets/images/cairo-img.png", ciudad: "دبي", precio: "رحلة 2500 دولار / 3 أيام" },
    { img: "assets/images/istanbul-img.png", ciudad: "اسطنبول", precio: "رحلة 1000 دولار / 3 أيام" },
    { img: "assets/images/istanbul-img.png", ciudad: "اسطنبول", precio: "رحلة 1000 دولار / 3 أيام" },
    { img: "assets/images/istanbul-img.png", ciudad: "اسطنبول", precio: "رحلة 1000 دولار / 3 أيام" },
    { img: "assets/images/istanbul-img.png", ciudad: "اسطنبول", precio: "رحلة 1000 دولار / 3 أيام" },
    { img: "assets/images/istanbul-img.png", ciudad: "اسطنبول", precio: "رحلة 1000 دولار / 3 أيام" },
    { img: "assets/images/istanbul-img.png", ciudad: "اسطنبول", precio: "رحلة 1000 دولار / 3 أيام" },
];

let currentIndex = 0;

// Seleccionar elementos
const carouselItems = document.getElementById("carouselItems");
const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

// Función para cargar las tarjetas
function loadCards() {
    carouselItems.innerHTML = viajes.map(viaje => `
    <div class ="cards"
        <div class="card">
            <img src="${viaje.img}" alt="${viaje.ciudad}">
            <div class="card-content">
                <p class="card-title">${viaje.ciudad}</p>
                <p class="card-price">${viaje.precio}</p>
            </div>
        </div>
    </div>
    `).join('');
}

// Cargar las tarjetas al inicio
loadCards();



//Scroll de section

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible"); // Para que se reinicie
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));





