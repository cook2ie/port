function freezeScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.dataset.scrollY = scrollY; // 저장

    // 스와이퍼가 존재할 때만 멈춤
    // if (typeof swiperPoster !== "undefined" && swiperPoster.autoplay) {
    // swiperPoster.autoplay.stop();
    // }
}

// 스크롤 다시 가능하게 (모달 닫을 때)
function unfreezeScroll() {
    const scrollY = document.body.dataset.scrollY;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0")); // 원래 위치로

    // 스와이퍼가 존재할 때만 재생
    // if (typeof swiperPoster !== "undefined" && swiperPoster.autoplay) {
    // swiperPoster.autoplay.start();
    // }
}

// poster drink
$(".poster-drink-slide").click((e) => {
    e.preventDefault();
    $("#modal-poster-drink").addClass("active");
    freezeScroll();
});

$(".modal-close").click((e) => {
    e.preventDefault();
    $("#modal-poster-drink").removeClass("active");
    unfreezeScroll();
});
// poster drink end

// poster faschion
$(".poster-fashion-slide").click((e) => {
    e.preventDefault();
    $("#modal-poster-fashion").addClass("active");
    freezeScroll();
});

$(".modal-close").click((e) => {
    e.preventDefault();
    $("#modal-poster-fashion").removeClass("active");
    unfreezeScroll();
});
// poster fashion end

// poster torri
$(".poster-torri-slide").click((e) => {
    e.preventDefault();
    $("#modal-poster-torri").addClass("active");
    freezeScroll();
});

$(".modal-close").click((e) => {
    e.preventDefault();
    $("#modal-poster-torri").removeClass("active");
    unfreezeScroll();
});
// poster torri end

// detail modal
$(".detail-page-work-1").click((e) => {
    e.preventDefault();
    $("#detail-modal-granola").addClass("active");
    freezeScroll();
});
$(".modal-close").click((e) => {
    e.preventDefault();
    $("#detail-modal-granola").removeClass("active");
    unfreezeScroll();
});

$(".detail-page-work-2").click((e) => {
    e.preventDefault();
    $("#detail-modal-matin").addClass("active");
    freezeScroll();
});
$(".modal-close").click((e) => {
    e.preventDefault();
    $("#detail-modal-matin").removeClass("active");
    unfreezeScroll();
});
// detail modal end