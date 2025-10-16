$(function () {
    $(".hamburger").click(function (e) {
        $(".gnb-mo").toggleClass("openmenu");
        $("body").toggleClass("noscroll");
    });
    $(".nav > ul > li").click((e) => {
        $(".gnb-mo").removeClass("openmenu");
        $("body").removeClass("noscroll");
    });
});