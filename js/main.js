"use strict";

let burger = document.getElementById("burger");
let menu = document.getElementById("menu");
let bg = document.getElementById("bg");

burger.addEventListener("click", function () {
    let isCross = this.classList.contains("cross");

    if (isCross) {
        burger.classList.remove("cross");
        menu.classList.remove("visible");
        bg.classList.remove("visible");
    } else {
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
    autoplaySpeed: 3000,
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


let tab = function () {
    let tabNav = document.querySelectorAll(".features__nav-item"),
        tabContent = document.querySelectorAll(".features__tab"),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener("click", selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove("is-active");
        });
        this.classList.add("is-active");
        tabName = this.getAttribute("data-tab-name");
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add("is-active") : item.classList.remove("is-active");
        });
    }
};


tab();