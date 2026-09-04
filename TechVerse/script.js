
// Mobile Menu

const menu=document.querySelector(".menu-btn");
const links=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

if(links.style.display==="flex"){

links.style.display="none";

}else{

links.style.display="flex";
links.style.flexDirection="column";

}

});

// Fade Animation

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity=0;
card.style.transform="translateY(40px)";
card.style.transition=".6s";

observer.observe(card);

});