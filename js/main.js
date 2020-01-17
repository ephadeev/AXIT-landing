"use strict";

let burger = document.getElementById("burger");
let menu = document.getElementById("menu");
let bg = document.getElementById("bg");

burger.addEventListener("click", function() {
    let isCross = this.classList.contains("cross");

    if(isCross) {
        burger.classList.remove("cross");
        menu.classList.remove("visible");
        bg.classList.remove("visible");
    }   else{
            burger.classList.add("cross");
            menu.classList.add("visible");
            bg.classList.add("visible");
        }

});