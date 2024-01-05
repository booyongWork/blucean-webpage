// 파일이름 : solutionDev.js
// 작 성 자 : 정부용
// 작 성 일 : 2024.01.03
// 설 명 : 더블루션 솔루션 js 적용

// 모든 html 요소 로드 이후 이벤트 메서드 실행

    document.addEventListener("DOMContentLoaded", function () {
    cardLayout();
    // addHoverEffect();
})
    function cardLayout() {
    let nContainer = document.getElementById("nContainer");
    let cardContainer = document.getElementById("cardGroup");
    let cards = cardContainer.getElementsByClassName("card");


    if (cards.length <= 12) {   // 조건 12개 보다 같거나 작을 때
    if (cards.length === 1) {
    cards[0].style.width = "400px";
} else if (cards.length === 2) {
    cards[0].style.width = "450px";
} else if (cards.length === 3) {
    cards[0].style.width = "300px";
}
}
    // if (cards.length === 1) {
    //     // 카드 1개일 때
    //     cards[0].style.width = "400px";
    // } else if (cards.length % 2 === 0) {
    //     // 2의 배수일 때
    //     for (let i = 0; i < cards.length; i++) {
    //         cards[i].style.width = "450px";
    //     }
    // } else if (cards.length % 3 === 0 || cards.length % 5 === 0) {
    //     // 3, 5의 배수일 때
    //     for (let i = 0; i < cards.length; i++) {
    //         cards[i].style.width = "300px";
    //     }
    // }
    // } else if (cards.length > 12) {
    //     // nContainer.style.overflow = "hidden";
    //     cardContainer.style.display = "flex";
    //     cardContainer.style.flexWrap = "nowrap";
    //     cardContainer.style.animation = "scroll-left 10s linear infinite";
    //     for (let i = 0; i < cards.length; i ++) {
    //
    //         cards[i].style.width = "250px";
    //         cards[i].style.flex  = "0 0 auto";
    //
    //
    //     }
    // }
}

    function sortList(order) {
    let cardGroup = document.getElementById("cardGroup");
    let cards = Array.from(cardGroup.getElementsByClassName("card"));

    cards.sort(function(a, b) {
    let periodA = extractPeriod(a.querySelector(".period").textContent);
    let periodB = extractPeriod(b.querySelector(".period").textContent);

    if (order === 'latest') {
    return periodB - periodA;
} else if (order === 'oldest') {
    return periodA - periodB;
}
});

    cardGroup.innerHTML = ''; // 정렬 전 카드그룹 비우기

    cards.forEach(card => cardGroup.appendChild(card)); // 정렬된 카드 카드그룹에 다시 추가
}

    function extractPeriod(text) {

    let matches = text.match(/\d+/g); // 배열에 담아서
    if (matches) {
    let lastFourNum = matches[matches.length - 1].slice(-4); // 뒤에서 4자리만 선택

    return parseInt(lastFourNum) || 0;
}

    return 0
}
