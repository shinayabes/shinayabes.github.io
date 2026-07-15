/*=========================================
SHINA YABES PORTFOLIO
script.js
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

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

revealElements.forEach(element=>{

element.classList.add("fade-up");

observer.observe(element);

});

/*==============================
ACTIVE NAVIGATION
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

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

const cards=document.querySelectorAll(".portfolio-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/*==============================
TYPEWRITER EFFECT
==============================*/

const typing=document.getElementById("typing");

if(typing){

const words=[

"Administrative Assistant",

"Virtual Assistant",

"Data Entry Specialist",

"General Administrative Support"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function type(){

const currentWord=words[wordIndex];

if(!deleting){

typing.textContent=currentWord.substring(0,charIndex++);

if(charIndex>currentWord.length){

deleting=true;

setTimeout(type,1800);

return;

}

}else{

typing.textContent=currentWord.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(type,deleting?45:90);

}

type();

}

/*==============================
BACK TO TOP BUTTON
==============================*/

const topButton=document.getElementById("topBtn");

if(topButton){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

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

loader.style.display="none";

},500);

}

});

/*==============================
COPY EMAIL
==============================*/

const email=document.querySelector(".contact-email");

if(email){

email.addEventListener("click",()=>{

navigator.clipboard.writeText("va.shinayabes@gmail.com");

const original=email.innerHTML;

email.innerHTML="Copied to clipboard!";

setTimeout(()=>{

email.innerHTML=original;

},1800);

});

}

/*==============================
END
==============================*/