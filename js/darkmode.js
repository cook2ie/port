// 라이트|다크 모드
const btn = document.querySelector('.mode')

btn.addEventListener('click', function () {
    document.body.classList.toggle('bright')
    btn.classList.toggle('light')
})