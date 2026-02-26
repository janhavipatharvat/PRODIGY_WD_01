const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

function scrollToRegister() {
    document.getElementById("register").scrollIntoView();
}

const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    message.innerText = "Registration Successful! See you at the workshop.";
    message.style.color = "green";
    form.reset();
});