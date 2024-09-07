const btnmobile = document.getElementById("btn-mobile");

function toggleAtivo(event) {
  if (event.type === "touchstart") event.preventDefault();
  const navegacao = document.getElementById("navegacao");
  navegacao.classList.toggle("active");
  const active = navegacao.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", "active");
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  }
}

btnmobile.addEventListener("click", toggleAtivo);
btnmobile.addEventListener("touchstart", toggleAtivo);

// Slide

var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 60,
  sliderPerGroup: 3,
  loopFillGrowWithBlank: true,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },

    1000: {
      slidesPerView: 3,
    },
  },
});

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
