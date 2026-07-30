// =========================================
// KING NIGHT STUDIO
// Premium JavaScript
// =========================================

// ==========================
// Loader
// ==========================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

loader.style.pointerEvents="none";

},1500);

});

// ==========================
// AOS
// ==========================

AOS.init({

duration:1000,

once:true,

offset:100,

easing:"ease-in-out"

});

// ==========================
// Progress Bar
// ==========================

const progressBar=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

progressBar.style.width=scrolled+"%";

});

// ==========================
// Navbar Scroll
// ==========================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

// ==========================
// Back To Top
// ==========================

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backToTop.classList.add("show");

}else{

backToTop.classList.remove("show");

}

});

backToTop.addEventListener("click",(e)=>{

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ==========================
// Active Navigation
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

if(window.scrollY>=top){

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
// ==========================
// Counter Animation
// ==========================

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=Math.ceil(target/80);

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ==========================
// Portfolio Filter
// ==========================

const filterBtns=document.querySelectorAll(".filter-btn");

const portfolioItems=document.querySelectorAll(".portfolio-item");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

filterBtns.forEach(button=>{

button.classList.remove("active");

});

btn.classList.add("active");

const filter=btn.dataset.filter;

portfolioItems.forEach(item=>{

if(filter==="all"||item.dataset.category===filter){

item.style.display="block";

setTimeout(()=>{

item.style.opacity="1";

item.style.transform="scale(1)";

},100);

}else{

item.style.opacity="0";

item.style.transform="scale(.8)";

setTimeout(()=>{

item.style.display="none";

},300);

}

});

});

});

// ==========================
// Ripple Effect
// ==========================

document.querySelectorAll(".btn-main,.btn-outline").forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const rect=button.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.classList.add("ripple");

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ==========================
// Contact Form
// ==========================

const contactForm=document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

contactForm.reset();

});

}

// ==========================
// Newsletter
// ==========================

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Subscription completed successfully.");

newsletter.reset();

});

}
// ==========================
// Language Switcher
// ==========================

const translations={

en:{

logo:"KING NIGHT STUDIO",

home:"Home",

about:"About",

services:"Services",

portfolio:"Portfolio",

contact:"Contact",

heroTitle:"Create Luxury Brand Identity That People Never Forget",

heroText:"We craft premium logos, luxury visual identities and unforgettable branding experiences."

},

ar:{

logo:"كينج نايت ستوديو",

home:"الرئيسية",

about:"من نحن",

services:"الخدمات",

portfolio:"أعمالنا",

contact:"تواصل",

heroTitle:"نصنع هوية بصرية فاخرة لا تُنسى",

heroText:"نقدم تصميم الشعارات والهويات البصرية الفاخرة وتجارب العلامات التجارية الاحترافية."

}

};

document.querySelectorAll(".language-option").forEach(button=>{

button.addEventListener("click",(e)=>{

e.preventDefault();

const lang=button.dataset.lang;

document.documentElement.lang=lang;

document.documentElement.dir=lang==="ar"?"rtl":"ltr";

document.querySelector(".logo").textContent=translations[lang].logo;

const nav=document.querySelectorAll(".nav-link");

nav[0].textContent=translations[lang].home;

nav[1].textContent=translations[lang].about;

nav[2].textContent=translations[lang].services;

nav[3].textContent=translations[lang].portfolio;

nav[4].textContent=translations[lang].contact;

document.getElementById("hero-title").textContent=translations[lang].heroTitle;

document.getElementById("hero-text").textContent=translations[lang].heroText;

const btn=document.querySelector(".language-btn");

if(btn){

btn.innerHTML=lang==="ar"?"🌐 العربية":"🌐 English";

}

});

});

// ==========================
// Hero Mouse Parallax
// ==========================

const heroImage=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

if(heroImage){

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

heroImage.style.transform=`translate(${x}px,${y}px)`;

}

});

// ==========================
// Fade Observer
// ==========================

const fadeItems=document.querySelectorAll(

".service-card,.portfolio-item,.testimonial-card,.client-box,.feature-item,.stat-box"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.2

});

fadeItems.forEach(item=>{

item.classList.add("fade-up");

observer.observe(item);

});

// ==========================
// Disable Image Drag
// ==========================

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

// ==========================
// Disable Right Click
// ==========================

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

// ==========================
// Console
// ==========================

console.log(

"%c👑 KING NIGHT STUDIO",

"color:#FFD700;font-size:24px;font-weight:bold;"

);

console.log(

"%cLuxury Branding Website Loaded Successfully",

"color:#ffffff;font-size:14px;"

);
// =========================================
// LIGHTBOX SETTINGS
// =========================================

if(typeof lightbox!=="undefined"){

lightbox.option({

resizeDuration:300,

fadeDuration:300,

imageFadeDuration:300,

wrapAround:true,

disableScrolling:true,

alwaysShowNavOnTouchDevices:true,

albumLabel:"Project %1 of %2"

});

}

// =========================================
// Smooth Appearance
// =========================================

document.addEventListener("DOMContentLoaded",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s ease";

document.body.style.opacity="1";

},100);

});

// =========================================
// Hero Buttons Animation
// =========================================

const heroButtons=document.querySelectorAll(".hero-buttons a");

heroButtons.forEach((button,index)=>{

button.style.opacity="0";

button.style.transform="translateY(30px)";

setTimeout(()=>{

button.style.transition=".7s";

button.style.opacity="1";

button.style.transform="translateY(0)";

},700+(index*200));

});

// =========================================
// Social Hover Animation
// =========================================

document.querySelectorAll(".social-links a,.hero-social a").forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="translateY(-8px) rotate(360deg)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="translateY(0) rotate(0deg)";

});

});

// =========================================
// Current Year
// =========================================

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=

`© ${new Date().getFullYear()} King Night Studio. All Rights Reserved.`;

}

// =========================================
// Mobile Navbar Close
// =========================================

const navItems=document.querySelectorAll(".nav-link");

const navCollapse=document.querySelector(".navbar-collapse");

navItems.forEach(item=>{

item.addEventListener("click",()=>{

if(navCollapse && navCollapse.classList.contains("show")){

new bootstrap.Collapse(navCollapse).hide();

}

});

});

// =========================================
// Lazy Images
// =========================================

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

// =========================================
// Finished
// =========================================

console.log(

"%c🚀 Website Ready",

"color:#FFD700;font-size:18px;font-weight:bold;"

);
