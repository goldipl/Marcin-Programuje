const burgerMenu = document.querySelector(".burgerMenu");

const iconBurgerMenu = document.querySelector(".fa-bars");
const iconClose = document.querySelector(".fa-times");
const column = document.querySelector("aside");

burgerMenu.addEventListener("click", function() {
    iconBurgerMenu.classList.toggle("show");
    iconClose.classList.toggle("show");
    column.classList.toggle("show");

})