const burgerMenu = document.querySelector(".burgerMenu");

const iconBurgerMenu = document.querySelector(".fa-bars");
const iconClose = document.querySelector(".fa-times");
const column = document.querySelector("aside");
const body = document.querySelector("body");
const header = document.querySelector("header");

burgerMenu.addEventListener("click", function() {
    iconBurgerMenu.classList.toggle("show");
    iconClose.classList.toggle("show");
    column.classList.toggle("show");
    body.classList.toggle("blockedBody");
    header.classList.toggle("headerOpacity");
});

/* footer year */
document.querySelector("span.footerYear").innerHTML = new Date().getFullYear();
/* /footer year */