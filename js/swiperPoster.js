// poster
const swiper = new Swiper(".swiperPoster", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    loop: true,
    loopAdditionalSlides: 2,
    centeredSlides: true,
    spaceBetween: 100, // 기본 간격
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev"
    },
    observer: true,
    observeParents: true,
    breakpoints: {
        1440: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 80
        },
        768: {
            slidesPerView: 1.8,
            spaceBetween: 40
        },
        480: {
            slidesPerView: 1.2,
            spaceBetween: 20
        }
    }
});
//poster end