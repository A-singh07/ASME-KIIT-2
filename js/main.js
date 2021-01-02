
// mobile-info

if (window.matchMedia("(max-width: 48em)").matches) {
    $(".mobile-info").css("display", "grid");
    $(".mother-container").css("display", "none");
}
else {
    $(".mobile-info").css("display", "none");
    $(".mother-container").css("display", "block");
}


// ----- Loader  --- Gsap 

const tl = gsap.timeline();

tl.to(".hide-text", {
    y: "0%",
    duration: 1.3,
    stagger: 0.3,
    ease: "back.out"
});
tl.to(".intro-slider", {
    y: "-100%",
    duration: 1.5,
    delay: 0.6
});
tl.to(".intro", {
    y: "-100%",
    duration: 1
}, "-=1");
tl.fromTo("#mother-container", { autoAlpha: "0", display: "none" }, { autoAlpha: "1", display: "block" }, "-=1");


// ----- NAVBAR

var sidebar = $(".sidebar");
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

// ----- TIMELINE

$(window).scroll(function () {

    //to check scrol pos: -
    // const samY = document.documentElement.scrollTop;
    // console.log('Scroll Y: ' + samY);

    if ($(this).scrollTop() > 750)
        $("#progress-line").addClass("animate-progress-line");
    else
        $("#progress-line").removeClass("animate-progress-line");
})

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


// ----- OUR TEAM

$(".tabs").click(function () {
    $(this).prevAll().removeClass("tab-active");
    $(this).nextAll().removeClass("tab-active");
    $(this).addClass("tab-active");
});

function activeCont(cont) {
    $(".t-content").removeClass("t-content-active");
    $("#" + cont).addClass("t-content-active");
}


// ----- GALLERY

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