// DOMContentLoaded 이벤트 발생 시 실행될 함수 등록
document.addEventListener("DOMContentLoaded", function() {
    //로고 show hide
    const logoDefault = document.getElementById('logoDefault');
    const logoChange = document.getElementById('logoChange');

    let showLogoDefault = true;

    setInterval(function () { // 타이머 함수
        if (showLogoDefault) {
            logoDefault.style.opacity = '1'; // 페이드인되도록 투명도를 1로 변경
            logoChange.style.opacity = '0'; // 다른 이미지는 투명도를 0으로 설정하여 숨김
        } else {
            logoDefault.style.opacity = '0';
            logoChange.style.opacity = '1';
        }
        showLogoDefault = !showLogoDefault; // 이미지를 무조건 반대값 입력
    }, 2000); // 3초마다 이미지 전환
});

// FAQ **아코디언 클릭**하는 버전
function toggleAccordion(clickedElement) {
    const accordionBody = clickedElement.nextElementSibling;
    const icon = clickedElement.querySelector('span');
    const isClosing = accordionBody.style.display === 'block';

    // 클릭한 아코디언이 열려있는 경우 닫기
    if (isClosing) {
        accordionBody.style.display = 'none';
        icon.textContent = '▼'; // 닫혔을 때 아이콘 변경
    } else {
        // 클릭한 아코디언만 열기
        accordionBody.style.display = 'block';
        icon.textContent = '◀'; // 열렸을 때 아이콘 변경
    }
}