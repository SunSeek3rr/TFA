"use strict";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

// Changer l'image déco de la section accueil en fonction du device
let width = window.innerWidth;
console.log(width);
if (width >= 1440){

    let deco = document.querySelector(".accueil__deco img");
    deco.src = "assets/images/Accueil_deco-desktop.svg";
    
    let graph = document.querySelector(".fonctionnement__visuel");
    graph.src = "assets/images/fonctionnement-graph-desktop.svg"

} else if (width >= 768){

    let deco = document.querySelector(".accueil__deco img");
    deco.src = "assets/images/Accueil_deco-tablet.svg";

    let graph = document.querySelector(".fonctionnement__visuel");
    graph.src = "assets/images/fonctionnement-graph-tablet.svg"

}

// Menu
let menuBtn = document.querySelector(".menu__btn");
menuBtn.addEventListener("click", ()=>{
    let menu = document.querySelector(".header__menu");
    menu.classList.toggle("menu-open");
    let menuLinks = document.querySelectorAll(".menu__list .menu__el");
    menuLinks.forEach((link)=>{
        link.addEventListener("click", ()=>{
            menu.classList.remove("menu-open");
        });
    });
});