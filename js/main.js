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

$('.reviews__container').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});