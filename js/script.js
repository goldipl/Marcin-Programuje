const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileMenuLi = document.querySelector(".mobileMenu_li");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

mobileMenuLi.addEventListener("click", () => {
    burger.classList.remove("active");
    mobileMenu.classList.remove("active");
});


/* footer year */
document.querySelector("span.footerYear").innerHTML = new Date().getFullYear();
/* /footer year */