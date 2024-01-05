// 파일이름 : main.js
// 작 성 자 : 윤정문
// 작 성 일 : 2024.01.03
// 설 명 : 더블루션 메인 js 적용

// 카카오 문의 새창 실행 시 크기와 가운데 정렬
function openChat() {
    // 새 창 열기
    let width = 450;
    let height = 590;

    let left = (screen.width - width) / 2 + window.screenX;
    let top = (screen.height - height) / 2 + window.screenY;

    window.open('http://pf.kakao.com/_GuAGG/chat', '_blank', 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top).focus();
}
