/*=========================================
PRELOADER
=========================================*/

const progressBar = document.getElementById("progressBar");
const topBtn = document.getElementById("backToTop");
const typing = document.getElementById("typing");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);
});

/*=========================================
SCROLL EVENTS
=========================================*/

window.addEventListener("scroll", () => {

    /* Progress Bar */

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width =
        (scrollTop / scrollHeight) * 100 + "%";

    /* Back To Top */

    topBtn.style.display =
        window.scrollY > 500 ? "flex" : "none";

    /* Active Navigation */

    let current = "";

    sections.forEach(section => {

        if (pageYOffset >= section.offsetTop - 120) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );

    });

});

/*=========================================
BACK TO TOP BUTTON
=========================================*/

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/*=========================================
TYPING EFFECT
=========================================*/

const words = [
    "Administrative Assistant",
    "Virtual Assistant",
    "Data Entry Specialist"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();

/*=========================================
FADE-IN ANIMATION
=========================================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".skill-card, .timeline-card, .portfolio-card, .tool, .certificate-card, .contact-card"
).forEach(element => {

    element.classList.add("hidden");
    observer.observe(element);

});

/*=========================================
CURRENT YEAR
=========================================*/

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
