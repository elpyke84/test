console.log("hola")
document.querySelector('.menu-btn').addEventListener('click', () => {
    console.log("click!!")
    document.querySelector(".nav-menu").classList.toggle("show")
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news', {delay: 300});
ScrollReveal().reveal('.banner', {delay: 300});
ScrollReveal().reveal('.cards-banner', {delay: 300});