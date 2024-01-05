function openChat() {
    // 새 창 열기
    let width = 450;
    let height = 590;

    let left = (screen.width - width) / 2 + window.screenX;
    let top = (screen.height - height) / 2 + window.screenY;

    window.open('http://pf.kakao.com/_GuAGG/chat', '_blank', 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top).focus();
}
