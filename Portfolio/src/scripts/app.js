

// Header nav
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
