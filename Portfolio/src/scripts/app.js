// Header nav
let headerNav = document.querySelector(".header");
let menuBtn = document.querySelector(".menu__btn");
menuBtn.addEventListener("click", ()=>{
    let menu = document.querySelector(".menu");
    let menuLinks = document.querySelectorAll(".menu__el--link");
    menu.classList.toggle("menu--open");
    menuLinks.forEach((item)=>{
        item.addEventListener("click", ()=>{
            menu.classList.remove("menu--open");
        });
    });

});
//Case study open btn


let projetsBtn = document.querySelectorAll(".projets__btn");
let main = document.querySelector(".main");
projetsBtn.forEach((item)=>{
    item.addEventListener("click", ()=>{
        if(item.classList.contains("projets__btn--janus")){
            let janusCase = document.querySelector(".caseStudy--janus");
            janusCase.classList.add("open");
        } else if (item.classList.contains("projets__btn--dataplay")){
            let dataplayCase = document.querySelector(".caseStudy--dataplay");
            dataplayCase.classList.add("open");
        } else if(item.classList.contains("projets__btn--rux")){
            let ruxCase = document.querySelector(".caseStudy--rux");
            ruxCase.classList.add("open");
        }else if(item.classList.contains("projets__btn--df")){
            let dfCase = document.querySelector(".caseStudy--df");
            dfCase.classList.add("open");
        }
        headerNav.style.display = "none";
        main.style.display= "none";
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

let projetsBtnInside = document.querySelectorAll(".section--caseStudy .projets__btn");
projetsBtnInside.forEach((item)=>{
    item.addEventListener("click",()=>{
        let activeCase = document.querySelector(".open");
        activeCase.classList.remove("open");
    });
});

// Case study close btn

let closeBtn = document.querySelectorAll(".header__btn");

closeBtn.forEach((item)=>{
    item.addEventListener("click", ()=>{
        let activeCase = document.querySelector(".open");
        activeCase.classList.remove("open");
        headerNav.style.display = "block";
        main.style.display= "block";
        let projetsID = document.getElementById("Projets");
        window.scrollTo({ top: projetsID.offsetTop - 60, behavior: "smooth" });

    });
});


