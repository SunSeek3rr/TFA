"use strict";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

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

// Anim Svg Btn

CustomEase.create("customBezier", "M0,0 C0.14,1.07 0.66,1 1,1");

let Hex1 = document.querySelector("#Hex1");
let Hex2 = document.querySelector("#Hex2");
let Hex3 = document.querySelector("#Hex3");
let Hex4 = document.querySelector("#Hex4");
let Hex5 = document.querySelector("#Hex5");
let Hex6 = document.querySelector("#Hex6");

let Hex12 = document.querySelector("#Hex1-2");
let Hex22 = document.querySelector("#Hex2-2");
let Hex32 = document.querySelector("#Hex3-2");
let Hex42 = document.querySelector("#Hex4-2");
let Hex52 = document.querySelector("#Hex5-2");
let Hex62 = document.querySelector("#Hex6-2");

let allHex = document.querySelectorAll(".Hex");
let Btn = document.querySelector("#Btn");
let Btn2 = document.querySelector("#Btn-2");

Btn.addEventListener("mouseenter", ()=>{
    console.log("enter");

    Hex1.style.transform = "translate(-32px, -50px)";
    Hex2.style.transform = "translate(32px, -50px)";
    Hex3.style.transform = "translateX(56px)";
    Hex4.style.transform = "translate(32px, 50px)";
    Hex5.style.transform = "translate(-32px, 50px)";
    Hex6.style.transform = "translateX(-56px)";
    
    allHex.forEach((item)=>{
        item.classList.add("Hex-hover");
    });

//  LIGNES CENTRALES 

    gsap.to("#Line1", {
        attr: {x2 : 214.73, y2 : 157.92},
        duration: 0.3,
        ease: "customBezier"
    });
    gsap.to("#Line2", {
        attr: {x2 : 355.41, y2 : 158.08},
        duration: 0.3,
        ease: "customBezier"
    });
    gsap.to("#Line3", {
        attr: {x2 : 215.16, y2 : 394.26},
        duration: 0.3,
        ease: "customBezier"
    });
        gsap.to("#Line4", {
        attr: {x2 : 352.44, y2 : 394.26},
        duration: 0.3,
        ease: "customBezier"
    });
        gsap.to("#Line5", {
        attr: {x2 : 150.16, y2 : 275.5},
        duration: 0.3,
        ease: "customBezier"
    });
        gsap.to("#Line6", {
        attr: {x2 : 418.43, y2 : 275.5},
        duration: 0.3,
        ease: "customBezier"
    });

// VISAGE HEX

        gsap.to("#Face6 ellipse:nth-child(1)", { 
    attr: { cx: 44 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face6 ellipse:nth-child(2)", { 
    attr: { cx: 109 }, 
    duration: 0.3,
    opacity:0.7,  
    ease: "customBezier" 
    });

    gsap.to("#Face6 path", { 
    attr: { d: "M63,287c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });




    gsap.to("#Face5 ellipse:nth-child(1)", { 
    attr: { cx: 144, cy: 456.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face5 ellipse:nth-child(2)", { 
    attr: { cx: 209, cy: 456.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face5 path", { 
    attr: { d: "M163,472c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });



    gsap.to("#Face4 ellipse:nth-child(1)", { 
    attr: { cx: 360, cy: 456.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face4 ellipse:nth-child(2)", { 
    attr: { cx: 425, cy: 456.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face4 path", { 
    attr: { d: "M379,472c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });



    gsap.to("#Face3 ellipse:nth-child(1)", { 
    attr: { cx: 460, cy: 271.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face3 ellipse:nth-child(2)", { 
    attr: { cx: 525, cy: 271.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face3 path", { 
    attr: { d: "M479,287c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });




    gsap.to("#Face2 ellipse:nth-child(1)", { 
    attr: { cx: 360, cy: 86.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face2 ellipse:nth-child(2)", { 
    attr: { cx: 425, cy: 86.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face2 path", { 
    attr: { d: "M379,102c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });




        gsap.to("#Face1 .cls-9 path:nth-child(1)", { 
    attr: { d:"M151,86.5c0,7.46-3.13,13.5-7,13.5s-7-6.04-7-13.5,3.13-13.5,7-13.5,7,6.04,7,13.5Z" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face1 .cls-9 path:nth-child(2)", { 
    attr: { d:"M216,86.5c0,7.46-3.13,13.5-7,13.5s-7-6.04-7-13.5,3.13-13.5,7-13.5,7,6.04,7,13.5Z" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face1 path.cls-5", { 
    attr: { d: "M163,102c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

});


Btn.addEventListener("mouseleave", ()=>{
    console.log("leave");
    Hex1.style.transform = "translate(0px, 0px)";
    Hex2.style.transform = "translate(0px, 0px)";
    Hex3.style.transform = "translateX(0px)";
    Hex4.style.transform = "translate(0px, 0px)";
    Hex5.style.transform = "translate(0px, 0px)";
    Hex6.style.transform = "translateX(0px)";

    allHex.forEach((item)=>{
        item.classList.remove("Hex-hover");
    });
// LIGNES CENTRALES
    gsap.to("#Line1", {
        attr: {x2 : 246.7, y2 : 206.84},
        duration: 0.3,
        ease: "customBezier"
    });
    gsap.to("#Line2", {
        attr: {x2 : 322.91, y2 : 207.81},
        duration: 0.3,
        ease: "customBezier"
    });
    gsap.to("#Line3", {
        attr: {x2 : 245.08, y2 : 343.2},
        duration: 0.3,
        ease: "customBezier"
    });
        gsap.to("#Line4", {
        attr: {x2 : 322.61, y2 : 343.37},
        duration: 0.3,
        ease: "customBezier"
    });
        gsap.to("#Line5", {
        attr: {x2 : 207.01, y2 : 275.5},
        duration: 0.3,
        ease: "customBezier"
    });
        gsap.to("#Line6", {
        attr: {x2 : 361, y2 : 275.5},
        duration: 0.3,
        ease: "customBezier"
    });

//  VISAGES HEX
        gsap.to("#Face6 ellipse:nth-child(1)", { 
    attr: { cx: 100 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face6 ellipse:nth-child(2)", { 
    attr: { cx: 165 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face6 path", { 
    attr: { d: "M119,287c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });




        gsap.to("#Face5 ellipse:nth-child(1)", { 
    attr: { cx: 175, cy: 406.21 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face5 ellipse:nth-child(2)", { 
    attr: { cx: 240, cy: 406.21 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face5 path", { 
    attr: { d: "M194,421.71c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });



    gsap.to("#Face4 ellipse:nth-child(1)", { 
    attr: { cx: 328, cy: 407.68 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face4 ellipse:nth-child(2)", { 
    attr: { cx: 393, cy: 407.68 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face4 path", { 
    attr: { d: "M347,423.18c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });



    gsap.to("#Face3 ellipse:nth-child(1)", { 
    attr: { cx: 403, cy: 271.5 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face3 ellipse:nth-child(2)", { 
    attr: { cx: 468, cy: 271.5 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face3 path", { 
    attr: { d: "M422,287c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });




    gsap.to("#Face2 ellipse:nth-child(1)", { 
    attr: { cx: 328, cy: 136.5 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face2 ellipse:nth-child(2)", { 
    attr: { cx: 393, cy: 136.5 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face2 path", { 
    attr: { d: "M347,152c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });




        gsap.to("#Face1 .cls-9 path:nth-child(1)", { 
    attr: { d:"M182.5,136.79c0,7.46-3.13,13.5-7,13.5s-7-6.04-7-13.5,3.13-13.5,7-13.5,7,6.04,7,13.5Z" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face1 .cls-9 path:nth-child(2)", { 
    attr: { d:"M247.5,136.79c0,7.46-3.13,13.5-7,13.5s-7-6.04-7-13.5,3.13-13.5,7-13.5,7,6.04,7,13.5Z" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face1 path.cls-5", { 
    attr: { d: "M194.5,152.29c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });
    
});

Btn2.addEventListener("mouseenter", ()=>{
    console.log("enter");

    Hex12.style.transform = "translate(-32px, -50px)";
    Hex22.style.transform = "translate(32px, -50px)";
    Hex32.style.transform = "translateX(56px)";
    Hex42.style.transform = "translate(32px, 50px)";
    Hex52.style.transform = "translate(-32px, 50px)";
    Hex62.style.transform = "translateX(-56px)";
    
    allHex.forEach((item)=>{
        item.classList.add("Hex-hover");
    });

//  LIGNES CENTRALES 

    gsap.to("#Line1-2", {
        attr: {x2 : 214.73, y2 : 157.92},
        duration: 0.3,
        ease: "customBezier"
    });
    gsap.to("#Line2-2", {
        attr: {x2 : 355.41, y2 : 158.08},
        duration: 0.3,
        ease: "customBezier"
    });
    gsap.to("#Line3-2", {
        attr: {x2 : 215.16, y2 : 394.26},
        duration: 0.3,
        ease: "customBezier"
    });
        gsap.to("#Line4-2", {
        attr: {x2 : 352.44, y2 : 394.26},
        duration: 0.3,
        ease: "customBezier"
    });
        gsap.to("#Line5-2", {
        attr: {x2 : 150.16, y2 : 275.5},
        duration: 0.3,
        ease: "customBezier"
    });
        gsap.to("#Line6-2", {
        attr: {x2 : 418.43, y2 : 275.5},
        duration: 0.3,
        ease: "customBezier"
    });

// VISAGE HEX

        gsap.to("#Face6-2 ellipse:nth-child(1)", { 
    attr: { cx: 44 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face6-2 ellipse:nth-child(2)", { 
    attr: { cx: 109 }, 
    duration: 0.3,
    opacity:0.7,  
    ease: "customBezier" 
    });

    gsap.to("#Face6-2 path", { 
    attr: { d: "M63,287c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });




    gsap.to("#Face5-2 ellipse:nth-child(1)", { 
    attr: { cx: 144, cy: 456.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face5-2 ellipse:nth-child(2)", { 
    attr: { cx: 209, cy: 456.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face5-2 path", { 
    attr: { d: "M163,472c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });



    gsap.to("#Face4-2 ellipse:nth-child(1)", { 
    attr: { cx: 360, cy: 456.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face4-2 ellipse:nth-child(2)", { 
    attr: { cx: 425, cy: 456.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face4-2 path", { 
    attr: { d: "M379,472c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });



    gsap.to("#Face3-2 ellipse:nth-child(1)", { 
    attr: { cx: 460, cy: 271.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face3-2 ellipse:nth-child(2)", { 
    attr: { cx: 525, cy: 271.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face3-2 path", { 
    attr: { d: "M479,287c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });




    gsap.to("#Face2-2 ellipse:nth-child(1)", { 
    attr: { cx: 360, cy: 86.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face2-2 ellipse:nth-child(2)", { 
    attr: { cx: 425, cy: 86.5 }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face2-2 path", { 
    attr: { d: "M379,102c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });




        gsap.to("#Face1-2 .cls-9 path:nth-child(1)", { 
    attr: { d:"M151,86.5c0,7.46-3.13,13.5-7,13.5s-7-6.04-7-13.5,3.13-13.5,7-13.5,7,6.04,7,13.5Z" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face1-2 .cls-9 path:nth-child(2)", { 
    attr: { d:"M216,86.5c0,7.46-3.13,13.5-7,13.5s-7-6.04-7-13.5,3.13-13.5,7-13.5,7,6.04,7,13.5Z" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

    gsap.to("#Face1-2 path.cls-5", { 
    attr: { d: "M163,102c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0.7, 
    ease: "customBezier" 
    });

});


Btn2.addEventListener("mouseleave", ()=>{
    console.log("leave");
    Hex12.style.transform = "translate(0px, 0px)";
    Hex22.style.transform = "translate(0px, 0px)";
    Hex32.style.transform = "translateX(0px)";
    Hex42.style.transform = "translate(0px, 0px)";
    Hex52.style.transform = "translate(0px, 0px)";
    Hex62.style.transform = "translateX(0px)";

    allHex.forEach((item)=>{
        item.classList.remove("Hex-hover");
    });
// LIGNES CENTRALES
    gsap.to("#Line1-2", {
        attr: {x2 : 246.7, y2 : 206.84},
        duration: 0.3,
        ease: "customBezier"
    });
    gsap.to("#Line2-2", {
        attr: {x2 : 322.91, y2 : 207.81},
        duration: 0.3,
        ease: "customBezier"
    });
    gsap.to("#Line3-2", {
        attr: {x2 : 245.08, y2 : 343.2},
        duration: 0.3,
        ease: "customBezier"
    });
        gsap.to("#Line4-2", {
        attr: {x2 : 322.61, y2 : 343.37},
        duration: 0.3,
        ease: "customBezier"
    });
        gsap.to("#Line5-2", {
        attr: {x2 : 207.01, y2 : 275.5},
        duration: 0.3,
        ease: "customBezier"
    });
        gsap.to("#Line6-2", {
        attr: {x2 : 361, y2 : 275.5},
        duration: 0.3,
        ease: "customBezier"
    });

//  VISAGES HEX
        gsap.to("#Face6-2 ellipse:nth-child(1)", { 
    attr: { cx: 100 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face6-2 ellipse:nth-child(2)", { 
    attr: { cx: 165 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face6-2 path", { 
    attr: { d: "M119,287c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });




        gsap.to("#Face5-2 ellipse:nth-child(1)", { 
    attr: { cx: 175, cy: 406.21 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face5-2 ellipse:nth-child(2)", { 
    attr: { cx: 240, cy: 406.21 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face5-2 path", { 
    attr: { d: "M194,421.71c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });



    gsap.to("#Face4-2 ellipse:nth-child(1)", { 
    attr: { cx: 328, cy: 407.68 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face4-2 ellipse:nth-child(2)", { 
    attr: { cx: 393, cy: 407.68 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face4-2 path", { 
    attr: { d: "M347,423.18c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });



    gsap.to("#Face3-2 ellipse:nth-child(1)", { 
    attr: { cx: 403, cy: 271.5 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face3-2 ellipse:nth-child(2)", { 
    attr: { cx: 468, cy: 271.5 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face3-2 path", { 
    attr: { d: "M422,287c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });




    gsap.to("#Face2-2 ellipse:nth-child(1)", { 
    attr: { cx: 328, cy: 136.5 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face2-2 ellipse:nth-child(2)", { 
    attr: { cx: 393, cy: 136.5 }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face2-2 path", { 
    attr: { d: "M347,152c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });




        gsap.to("#Face1-2 .cls-9 path:nth-child(1)", { 
    attr: { d:"M182.5,136.79c0,7.46-3.13,13.5-7,13.5s-7-6.04-7-13.5,3.13-13.5,7-13.5,7,6.04,7,13.5Z" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face1-2 .cls-9 path:nth-child(2)", { 
    attr: { d:"M247.5,136.79c0,7.46-3.13,13.5-7,13.5s-7-6.04-7-13.5,3.13-13.5,7-13.5,7,6.04,7,13.5Z" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });

    gsap.to("#Face1-2 path.cls-5", { 
    attr: { d: "M194.5,152.29c9.56,7.96,16.25,8.04,27,0" }, 
    duration: 0.3,
    opacity:0, 
    ease: "customBezier" 
    });
    
});