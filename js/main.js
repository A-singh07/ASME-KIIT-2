// document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=' + (1 / window.devicePixelRatio));


// Loader
// function loaderTime() {
//     setTimeout(showpage, 5000);
// }
// function showpage() {
//     $("#loader-container").css("display", "none");
//     $("#mother-container").css("display", "block");
// }

// INTRO

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".hide-text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".intro-slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");


// NAVBAR

var sidebar_i = $(".sidebar li i");
var sidebar_span = $(".sidebar li span");
var nav = $("#nav");
var nav_ham = $("#hamburger");
var nav_close = $("#nav #nav-close");

$("#hamburger").click(function () {

    $(".sidebar").animate({ width: '250px' }, 300, function () {
        sidebar_span.css("display", "inline");
        nav_ham.hide();
        nav_close.show();
    });
    nav.animate({ width: '250px' }, 300);
    sidebar_i.css("width", "30%");

});

$("#nav-close").click(function () {

    sidebar_span.css("display", "none");
    nav.animate({ width: '70px' }, 300);
    sidebar_i.css("width", "100%");

    $(".sidebar").animate({ width: '70px' }, 300, function () {
        nav_ham.show();
        nav_close.hide();
    });
});

// TIMELINE

// for small dots to show active
$(".step").click(function () {
    $(this).addClass("tl-active").prevAll().addClass("tl-active");
    $(this).nextAll().removeClass("tl-active");
});


var totalSteps = $(".step");
var division = 100 / (totalSteps.length - 1);

function activeFunc(step) {

    //for progress-line animation
    if (step == 1) {
        $("#progress-line").css("width", "3%");
    }
    else {
        $("#progress-line").css("width", ((step - 1) * division) + "%");
    }
    // showing the content
    $(".content-timeline").removeClass("cnt-active");
    $(".content" + step).addClass("cnt-active");

}


//OUR TEAM

$(".tabs").click(function () {
    $(this).prevAll().removeClass("tab-active");
    $(this).nextAll().removeClass("tab-active");
    $(this).addClass("tab-active");
});

function activeCont(cont) {
    $(".t-content").removeClass("t-content-active");
    $("#" + cont).addClass("t-content-active");
}


// GALLERY

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 180,
        stretch: 0,
        depth: 260,
        modifier: 2,
        slideShadows: true,
    }

});