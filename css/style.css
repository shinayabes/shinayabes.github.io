/*=========================================
SHINA YABES PORTFOLIO
script.js
PRELOADER
=========================================*/

/*==============================
CURRENT YEAR
==============================*/

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

/*==============================
SCROLL REVEAL
==============================*/

const revealElements = document.querySelectorAll(
".hero, .about, .why-hire, .timeline-card, .skill-card, .tool, .portfolio-card, .certificate, .contact"
);

const observer = new IntersectionObserver(
window.addEventListener("load", () => {

(entries)=>{
    const preloader = document.getElementById("preloader");

entries.forEach(entry=>{
    preloader.style.opacity = "0";

if(entry.isIntersecting){
    setTimeout(() => {

entry.target.classList.add("show");
        preloader.style.display = "none";

}
    }, 500);

});

},
/*=========================================
SCROLL PROGRESS BAR
=========================================*/

{
window.addEventListener("scroll", () => {

threshold:.15
    const scrollTop = document.documentElement.scrollTop;

}
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

);
    const progress = (scrollTop / scrollHeight) * 100;

revealElements.forEach(element=>{

element.classList.add("fade-up");

observer.observe(element);
    document.getElementById("progressBar").style.width =
        progress + "%";

});

/*==============================
ACTIVE NAVIGATION
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");
/*=========================================
BACK TO TOP BUTTON
=========================================*/

window.addEventListener("scroll",()=>{
const topBtn = document.getElementById("backToTop");

let current="";
window.addEventListener("scroll", () => {

sections.forEach(section=>{
    if (window.scrollY > 500) {

const sectionTop=section.offsetTop-120;
        topBtn.style.display = "flex";

const sectionHeight=section.clientHeight;
    }

if(pageYOffset>=sectionTop){
    else {

current=section.getAttribute("id");
        topBtn.style.display = "none";

}
    }

});

navLinks.forEach(link=>{

link.classList.remove("active");
topBtn.addEventListener("click", () => {

if(link.getAttribute("href")==="#" + current){
    window.scrollTo({

link.classList.add("active");
        top: 0,

}
        behavior: "smooth"

});
    });

});

/*==============================
SMOOTH BUTTON EFFECT
==============================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0)";

});

});

/*==============================
PORTFOLIO HOVER
==============================*/
/*=========================================
TYPING EFFECT
=========================================*/

const cards=document.querySelectorAll(".portfolio-card");
const words = [

cards.forEach(card=>{
    "Administrative Assistant",

card.addEventListener("mouseenter",()=>{
    "Virtual Assistant",

card.style.transform="translateY(-10px)";
    "Data Entry Specialist"

});
];

card.addEventListener("mouseleave",()=>{
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

card.style.transform="translateY(0)";
const typing = document.getElementById("typing");

});
function typeEffect() {

});
    const current = words[wordIndex];

/*==============================
TYPEWRITER EFFECT
==============================*/
    if (!deleting) {

const typing=document.getElementById("typing");
        typing.textContent =
            current.substring(0, charIndex + 1);

if(typing){
        charIndex++;

const words=[
        if (charIndex === current.length) {

"Administrative Assistant",
            deleting = true;

"Virtual Assistant",
            setTimeout(typeEffect, 1800);

"Data Entry Specialist",
            return;

"General Administrative Support"
        }

];
    } else {

let wordIndex=0;
        typing.textContent =
            current.substring(0, charIndex - 1);

let charIndex=0;
        charIndex--;

let deleting=false;
        if (charIndex === 0) {

function type(){
            deleting = false;

const currentWord=words[wordIndex];
            wordIndex++;

if(!deleting){
            if (wordIndex >= words.length) {

typing.textContent=currentWord.substring(0,charIndex++);
                wordIndex = 0;

if(charIndex>currentWord.length){
            }

deleting=true;
        }

setTimeout(type,1800);
    }

return;
    setTimeout(typeEffect, deleting ? 40 : 90);

}

}else{
typeEffect();

typing.textContent=currentWord.substring(0,charIndex--);
/*=========================================
ACTIVE NAVIGATION
=========================================*/

if(charIndex<0){
const sections = document.querySelectorAll("section");

deleting=false;
const navLinks = document.querySelectorAll(".nav-links a");

wordIndex=(wordIndex+1)%words.length;
window.addEventListener("scroll", () => {

}
    let current = "";

}
    sections.forEach(section => {

setTimeout(type,deleting?45:90);
        const top = section.offsetTop - 120;

}
        const height = section.offsetHeight;

type();
        if (pageYOffset >= top) {

}
            current = section.getAttribute("id");

/*==============================
BACK TO TOP BUTTON
==============================*/
        }

const topButton=document.getElementById("topBtn");
    });

if(topButton){
    navLinks.forEach(link => {

window.addEventListener("scroll",()=>{
        link.classList.remove("active");

if(window.scrollY>500){
        if (link.getAttribute("href") === "#" + current) {

topButton.classList.add("show");
            link.classList.add("active");

}else{
        }

topButton.classList.remove("show");

}
    });

});

topButton.addEventListener("click",()=>{
/*=========================================
FADE-IN ANIMATION
=========================================*/

window.scrollTo({
const observer = new IntersectionObserver(

top:0,
(entries) => {

behavior:"smooth"
entries.forEach(entry => {

});
if (entry.isIntersecting) {

});
entry.target.classList.add("show");

}

/*==============================
SCROLL PROGRESS BAR
==============================*/

const progress=document.getElementById("progressBar");

if(progress){

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/scrollHeight)*100;

progress.style.width=percent+"%";

});

}

/*==============================
PRELOADER (OPTIONAL)
==============================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("preloader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{
},

loader.style.display="none";
{

},500);
threshold: .15

}

});
);

/*==============================
COPY EMAIL
==============================*/
document.querySelectorAll(

const email=document.querySelector(".contact-email");
".skill-card,.timeline-card,.portfolio-card,.tool,.certificate-card,.contact-card"

if(email){
).forEach(el => {

email.addEventListener("click",()=>{
el.classList.add("hidden");

navigator.clipboard.writeText("va.shinayabes@gmail.com");
observer.observe(el);

const original=email.innerHTML;
});

email.innerHTML="Copied to clipboard!";
/*=========================================
CURRENT YEAR
=========================================*/

setTimeout(()=>{
const year = new Date().getFullYear();

email.innerHTML=original;
const yearElement = document.getElementById("year");

},1800);
if (yearElement) {

});
    yearElement.textContent = year;

}

/*==============================
END
==============================*/
