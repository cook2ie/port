const spans = document.querySelectorAll(".footer .main-title span");

// 등장 애니메이션 (Timeline)
function showText() {
    gsap.timeline().to(spans, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05
    });
}

// 퇴장 애니메이션 (Timeline)
function hideText() {
    gsap.timeline().to(spans, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        stagger: 0.03
    });
}

// ScrollTrigger 연결
ScrollTrigger.create({
    trigger: ".footer",
    start: "top 10%", // 푸터가 화면에 들어오면 실행
    end: "top 20%", // 푸터가 화면에 들어오면 실행
    onEnter: showText, // 아래로 스크롤하면 등장
    onLeaveBack: hideText // 위로 스크롤하면 사라짐
    //   markers: true
});