// 스크롤 멈추기 (모달 열기 전)
function freezeScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = "100%";
  document.body.dataset.scrollY = scrollY;
}

// 스크롤 다시 가능하게 (모달 닫을 때)
function unfreezeScroll() {
  const scrollY = document.body.dataset.scrollY;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  window.scrollTo(0, parseInt(scrollY || "0"));
}

// detail modal
$(".detail-page-work-1").click((e) => {
  e.preventDefault();
  $("#detail-modal-granola").addClass("active");
  freezeScroll();
});

$(".detail-page-work-2").click((e) => {
  e.preventDefault();
  $("#detail-modal-matin").addClass("active");
  freezeScroll();
});

// 각 모달별 닫기 버튼 이벤트
$(".granola-close").click((e) => {
  e.preventDefault();
  $("#detail-modal-granola").removeClass("active");
  unfreezeScroll();
});

$(".matin-close").click((e) => {
  e.preventDefault();
  $("#detail-modal-matin").removeClass("active");
  unfreezeScroll();
});

// 배경 클릭 시 모달 닫기 (선택사항)
$(document).on('click', function(e) {
  if ($(e.target).hasClass('detail-modal')) {
    $(e.target).removeClass('active');
    unfreezeScroll();
  }
});

// ESC 키로 모달 닫기 (선택사항)
$(document).keyup(function(e) {
  if (e.key === "Escape") {
    $('.detail-modal').removeClass('active');
    unfreezeScroll();
  }
});