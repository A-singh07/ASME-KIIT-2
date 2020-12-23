// Loader
function loaderTime() {
    setTimeout(showpage, 5000);
}
function showpage() {
    $("#loader-container").css("display", "none");
    $("#mother-container").css("display", "block");
}

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