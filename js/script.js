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

document.querySelector("span.footerYear").innerHTML = new Date().getFullYear();

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

/* scroll arrow up */
const scrollArrowUp = document.querySelector(".scroll-arrow-up");

window.onscroll = () => {
	if (window.scrollY >= window.innerHeight) {
		scrollArrowUp.classList.add("show");
        scrollArrowUp.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
	} else {
		scrollArrowUp.classList.remove("show");
	}
};