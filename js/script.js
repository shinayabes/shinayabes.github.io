/*==================================================
SHINA PORTFOLIO
script.js
==================================================*/

/*==============================
PRELOADER
==============================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    },500);

});

/*==============================
SCROLL PROGRESS BAR
==============================*/

window.addEventListener("scroll",()=>{

    const winScroll=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const scrolled=(winScroll/height)*100;

    document.getElementById("progressBar").style.width=scrolled+"%";

});

/*==============================
BACK TO TOP
==============================*/

const topBtn=document.getElementById("backToTop");
const hero=document.getElementById("home");

window.addEventListener("scroll",()=>{

    if(window.scrollY>hero.offsetHeight-150){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==============================
ACTIVE NAVIGATION
==============================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-140;

        const height=section.offsetHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*==============================
TYPING EFFECT
==============================*/

const words=[

"Administrative Assistant",

"Virtual Assistant",

"Data Entry Specialist"

];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function typeEffect(){

    const current=words[wordIndex];

    if(!deleting){

        typing.textContent=current.substring(0,charIndex+1);

        charIndex++;

        if(charIndex===current.length){

            deleting=true;

            setTimeout(typeEffect,1800);

            return;

        }

    }

    else{

        typing.textContent=current.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?45:90);

}

typeEffect();

/*==============================
FADE ANIMATION
==============================*/

const observer=new IntersectionObserver(

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

document.querySelectorAll(

".service-card,.skill-card,.tool,.portfolio-card,.certificate-item,.road-card,.why-card,.education-card"

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/*==============================
PORTFOLIO MODAL
==============================*/

const modal=document.getElementById("imageModal");

const modalImg=document.getElementById("modalImage");

const closeBtn=document.querySelector(".close-modal");

document.querySelectorAll(".portfolio-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

modal.classList.add("active");

modalImg.src=btn.dataset.image;

});

});

/*==============================
CERTIFICATE MODAL
==============================*/

document.querySelectorAll(".certificate-image").forEach(img=>{

img.addEventListener("click",()=>{

modal.classList.add("active");

modalImg.src=img.src;

});

});

/*==============================
CLOSE MODAL
==============================*/

closeBtn.addEventListener("click",()=>{

modal.classList.remove("active");

});

modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.remove("active");

}

});

/*==============================
COPY SOCIAL
==============================*/

document.querySelectorAll(".social-copy").forEach(btn=>{

btn.addEventListener("click",()=>{

navigator.clipboard.writeText(btn.dataset.copy);

const original=btn.dataset.copy;

btn.dataset.copy="Copied!";

setTimeout(()=>{

btn.dataset.copy=original;

},1500);

});

});

/*==============================
COUNTER ANIMATION
==============================*/

const counters=document.querySelectorAll(".stat-card h2");

let counted=false;

function runCounters(){

if(counted) return;

if(window.scrollY>100){

counted=true;

counters.forEach(counter=>{

const text=counter.innerText;

const number=parseInt(text);

const suffix=text.replace(number,"");

let count=0;

const speed=number/60;

const update=()=>{

count+=speed;

if(count<number){

counter.innerText=Math.floor(count)+suffix;

requestAnimationFrame(update);

}

else{

counter.innerText=text;

}

};

update();

});

}

}

window.addEventListener("scroll",runCounters);

/*==============================
CURRENT YEAR
==============================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==============================
ESC CLOSE MODAL
==============================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

modal.classList.remove("active");

}

});

/*==============================
SMOOTH BUTTON RIPPLE
==============================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-3px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="";

});

});
