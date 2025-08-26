gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// intro================================================================
// title================
// 셔플 함수
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// 텍스트 등장 애니메이션 (속도 빠르게 + show 클래스 조작 유지)
function aniMainTitleIn() {
  const spans = document.querySelectorAll(".main-title span");
  const randomOrder = shuffle([...spans.keys()]);

  randomOrder.forEach((index, i) => {
    setTimeout(() => {
      spans[index].classList.add("show");
      spans[index].classList.remove("hide");
    }, i * 30);
  });
}

// 텍스트 퇴장 애니메이션 (속도 빠르게)
function aniMainTitleOut() {
  const spans = document.querySelectorAll(".main-title span");
  const randomOrder = shuffle([...spans.keys()]);

  randomOrder.forEach((index, i) => {
    setTimeout(() => {
      spans[index].classList.remove("show");
      spans[index].classList.add("hide");
    }, i * 20);
  });
}

// 초기 등장 실행
aniMainTitleIn();

// ScrollTrigger로 사라지게 연결 및 다시 맨 위로 돌아가면 등장 재실행
ScrollTrigger.create({
  trigger: ".visual",
  start: "+=2%",
  onEnter: () => aniMainTitleOut(),
  onLeaveBack: () => aniMainTitleIn() // 뒤로 스크롤시 등장 재실행
});

// title end ================
// bg=======================
gsap.to(".bg", {
  backgroundPosition: "100% 100%",
  rotation: 15,
  duration: 8,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

// bg end=======================

// about me =================
// gsap.set(".visual .bg-wrap", {
//   width: "100vw",
//   height: "",
//   borderRadius: "100"
// });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".visual",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
    pinSpacing: true,
    // markers: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const aboutMe = document.querySelector(".about-me");
      if (progress >= 0.5) {
        aboutMe.classList.add("on");
      } else {
        aboutMe.classList.remove("on");
      }
    }
  }
});

tl.to(".visual .bg-wrap", {
  clipPath: "inset(0% 0%)",
  duration: 2,
  width: "100vw",
  height: "100vh",
  borderRadius: "0px",
  ease: "power2.inOut"
});

tl.to({}, { duration: 2 });
// about me end======================
// scroll indi=======================
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    // start: "top =+120%",
    // end: "bottom top ",
    // end: "+=500px",

    start: "top 300px",
    end: "+=500px",
    scrub: true
  }
});

tl2.to(".scroll-indicator", {
  opacity: 0
});
// scroll indi end===================
// line-deco 보여주기
gsap.set(".line-deco", { autoAlpha: 1 });

gsap.to(".line-deco", {
  autoAlpha: 1,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#intro",
    start: "top 300px",
    end: "+=600px",
    toggleActions: "play none none reverse",
    // markers: true,
    onLeave: () => {
      gsap.to(".line-deco", { autoAlpha: 0, duration: 0.3 });
    },
    onEnterBack: () => {
      gsap.to(".line-deco", { autoAlpha: 1, duration: 0.3 });
    }
  }
});

// deci line end=====================
// intro end================================================================

//

// header====================================================
const point = document.querySelector(".point");
const menuLinks = document.querySelectorAll(".gnb .gnb-inner");

// 초기 위치 (Intro 메뉴)
const initTarget = menuLinks[0];
movePoint(initTarget);

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetID = link.getAttribute("href");
    const targetSection = document.querySelector(targetID);

    // 스크롤 이동
    gsap.to(window, {
      scrollTo: targetID,
      duration: 1,
      ease: "power2.out"
    });

    // 포인트 이동 및 너비 조정
    movePoint(link);
  });
});

function movePoint(target) {
  const gnbRect = document.querySelector(".gnb").getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  const leftValue = targetRect.left - gnbRect.left;
  const widthValue = targetRect.width;

  gsap.to(point, {
    left: leftValue,
    width: widthValue,
    duration: 0.5,
    ease: "power2.out"
  });
}

menuLinks.forEach((link) => {
  const targetID = link.getAttribute("href");
  const targetSection = document.querySelector(targetID);

  ScrollTrigger.create({
    trigger: targetSection,
    start: "top center", // 섹션이 화면 중앙에 오면
    end: "bottom center", // 섹션 끝날 때까지 유지
    onEnter: () => movePoint(link),
    onEnterBack: () => movePoint(link)
    // markers: true, // 디버깅용
  });
});
// header end==================================================

//

// web==========================================================
// card.addEventListener("touchstart", () => {
//   eyeIcon.style.display = "inline-block";
// });

gsap.set(".web-content-item", {
  y: 70,
  opacity: 0,
  scale: 0.95
});

gsap.to(".web-content-item", {
  y: 0,
  opacity: 1,
  delay: 0.65,
  scale: 1,
  duration: 0.4,
  stagger: 0.12,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#web",
    start: "top 60%", // #web이 뷰포트 80% 지점에 닿으면 실행
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
    // markers: true
    // scrub: false
  }
});
// web end=========================================================

//detail===========================================================
// .detail-page-work-2 요소 클릭 시 기본 동작(예: 링크 이동)을 막습니다
const work2 = document.querySelector(".detail-page-work-2");
const detailInner = document.querySelector(".detail-page-inner");

work2.addEventListener("click", function (e) {
  e.preventDefault();
  detailInner.classList.add("active");
  window.scrollTo({
    top: detailInner.offsetTop - 60,
    behavior: "smooth"
  });
});
//detail end===========================================================

// detail =============================================================
gsap.set(".detail-page-work", {
  opacity: 0,
  y: 50
});

gsap.to(".detail-page-work", {
  opacity: 1,
  y: 0,
  duration: 0.2,
  stagger: 0.15,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#detail",
    start: "top 60%", // #web이 뷰포트 80% 지점에 닿으면 실행
    end: "bottom 20%",
    toggleActions: "play reverse play reverse"
    // markers: true
    // scrub: false
  }
});
// detail end=============================================================

//text 팝업=============================================================
// 애니메이션 실행 함수
function animateSection(selector) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: selector,
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play reverse play reverse"
    }
  });

  // 순서대로 등장
  tl.to(`${selector} .page-left-txt p`, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power2.out"
  })
    .to(
      `${selector} .page-left-txt span`,
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .to(
      `${selector} .link-list`,
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .to(
      `${selector} .tool-list`,
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );
}

// 실행 대상 섹션 (초기 class도 붙여줌)
["#app", "#branding"].forEach((selector) => {
  document.querySelector(selector)?.classList.add("section-animate");
  animateSection(selector);
});

function openModalAndAnimate() {
  document.querySelector(".modal-section1")?.classList.add("section-animate");
  document.querySelector(".modal-section2")?.classList.add("section-animate");

  animateSection(".modal-section1");
  animateSection(".modal-section2");
}

//text 팝업 end=======================================