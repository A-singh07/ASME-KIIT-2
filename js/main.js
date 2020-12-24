// Loader
function loaderTime() {
    setTimeout(showpage, 5000);
}
function showpage() {
    $("#loader-container").css("display", "none");
    $("#mother-container").css("display", "block");
}


// NAVBAR
var sidebar_i = $(".sidebar li i");
var sidebar_span = $(".sidebar li span");
var nav = $("#nav");
var nav_ham = $("#hamburger");
var nav_close = $("#nav #nav-close");

$("#hamburger").click(function () {

    $(".sidebar").animate({ width: '180px' }, 300, function () {
        sidebar_span.css("display", "inline");
        nav_ham.hide();
        nav_close.show();
    });
    nav.animate({ width: '180px' }, 300);
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