const menu = document.querySelector("#bars");
const navbar = document.querySelector(".menu-nav");
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
// change menu icon
menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menu.classList.toggle("fa-xmark");
});
//remove and add activewhile scrolling
window.onscroll = () => {
    navbar.classList.remove("active");
    menu.classList.remove("fa-xmark");
    section.forEach((s) => {
        let top = window.scrollY;
        let height = s.offsetHeight;
        let offset = s.offsetTop - 150;
        let id = s.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
};

const searchIcon = document.querySelector("#search-icon");
const overlaySearch = document.querySelector(".search-form");
const close = document.querySelector(".close");
//open search overlay
searchIcon.addEventListener("click", () => {
    overlaySearch.classList.toggle("active");
});
//close search overlay
close.addEventListener("click", () => {
    overlaySearch.classList.remove("active");
});

//swiper technology technique
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

//dark and light mood
const body = document.querySelector("body");
const sunmoon = document.querySelector("#sunmoon");
sunmoon.addEventListener("click", () => {
    sunmoon.classList.toggle("fa-moon");
    body.classList.toggle("darkmood");
});