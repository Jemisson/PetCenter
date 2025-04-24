// movimento para o navbar
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.style.top = "-100px"; // Esconde
  } else {
    header.style.top = "0";      // Mostra
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Carrossel
const container = document.getElementById("container-cards");
document.getElementById("btn-left").addEventListener("click", () => {
  container.scrollBy({ left: -580, behavior: "smooth" });
});
document.getElementById("btn-right").addEventListener("click", () => {
  container.scrollBy({ left: 580, behavior: "smooth" });
});

setInterval(() => {
  const maxScrollLeft = container.scrollWidth - container.clientWidth;
  if (container.scrollLeft >= maxScrollLeft) {
    container.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    container.scrollBy({ left: 580, behavior: "smooth" });
  }
}, 3000);


// menu sandwich
const menuBtn = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
