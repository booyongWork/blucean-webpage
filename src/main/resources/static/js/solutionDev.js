// 파일이름 : solutionDev.js
// 작 성 자 : 정부용
// 작 성 일 : 2024.01.03
// 설 명 : 더블루션 솔루션 js 적용

// 모든 html 요소 로드 이후 이벤트 메서드 실행
document.addEventListener("DOMContentLoaded", function() {
    const cardsData = [
        { image: '/img/Biz/img_s1_17.png' },
        { image: '/img/Biz/img_s1_17.png' },
        { image: '/img/Biz/img_s1_17.png' },
        { image: '/img/Biz/img_s1_17.png' },
        { image: '/img/Biz/img_s1_17.png' },
    ];

    // cardsData html로 구성하는 부분
    cardsData.forEach(card => {
        // div 생성 후 class 기입
        const newCard = document.createElement('div');
        newCard.classList.add('card'); //클래스 적용 css
        // newCard.style.borderRadius = '5%';
        newCard.style.height = '200px'; // 부모 요소에 높이 설정
        newCard.style.backgroundColor = '#F7F7FA';

        // 이미지 틀에 이미지 추가
        const cardImageContainer = document.createElement('div');
        cardImageContainer.style.width = '100%'; // 이미지 틀의 너비를 부모 요소와 동일하게 설정
        cardImageContainer.style.height = '100%'; // 이미지 틀의 높이를 부모 요소와 동일하게 설정
        cardImageContainer.style.display = 'flex';
        cardImageContainer.style.justifyContent = 'center';
        cardImageContainer.style.alignItems = 'center';

        const cardImage = document.createElement('img'); // img 태그 생성
        cardImage.src = card.image; // 파일경로
        cardImage.style.maxWidth = '100%'; // 이미지의 최대 너비를 부모 요소와 동일하게 설정
        cardImage.style.maxHeight = '100%';

        cardImageContainer.appendChild(cardImage);

        // 이미지 틀을 카드에 추가
        newCard.appendChild(cardImageContainer);

        // HTML 자리에 새로운 카드 추가
        const cardContainer = document.getElementById('slider'); // 카드를 추가할 컨테이너
        cardContainer.appendChild(newCard);
    });

    //=====DOM END============================================================================================

    //슬릭 슬라이더 함수
    $('#slider').slick({
        slidesToShow: 4, // 한 번에 보여질 슬라이드의 수
        slidesToScroll: 1, // 한 번에 스크롤 될 슬라이드의 수
        // autoplay: true, // 자동 재생 기능을 활성화
        // autoplaySpeed: 2000, // 자동 재생 속도
        prevArrow: "<button type='button' class='slick-prev'>이전</button>",
        nextArrow: "<button type='button' class='slick-next'>다음</button>",
        responsive: [
            {
                breakpoint: 768, // 태블릿까지
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480, // 모바일까지
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
});

// FAQ **아코디언 클릭**하는 버전
function toggleAccordion(clickedElement) { //전역변수 가져와서
    const accordionBody = clickedElement.nextElementSibling; // 주어진 요소의 다음 형제 요소 -> accordionBody
    const icon = clickedElement.querySelector('span'); // ▼ 변수에 할당
    const isClosing = accordionBody.style.display === 'block'; //클릭했을경우 보이게 변경

    // 클릭한 아코디언이 열려있는 경우 닫기
    if (isClosing) {
        accordionBody.style.display = 'none';
        icon.textContent = '◀'; // 닫혔을 때 아이콘 변경
    } else {
        // 닫혀있는 아코디언 열기
        accordionBody.style.display = 'block';
        icon.textContent = '▼'; // 열렸을 때 아이콘 변경
    }
}