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

fadeAnimation = () => {
    const checkItem = document.querySelectorAll(".check-slide-item");

    for (let i = 0; i < checkItem.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = checkItem[i].getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            checkItem[i].classList.add("active");
        } else {
            checkItem[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", fadeAnimation);