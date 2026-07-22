 new Swiper(".card-wrapper", {
    loop: true,
    spaceBetween: 30,

    slidesPerView: 1,

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const mobileNav = document.querySelector(".mobile-nav");
const burgerMenu = document.querySelector(".menu-bars");
const closeBtn = document.querySelector(".close");

burgerMenu.addEventListener("click", () => {
    mobileNav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
});