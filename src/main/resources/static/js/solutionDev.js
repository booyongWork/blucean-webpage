// 파일이름 : solutionDev.js
// 작 성 자 : 정부용
// 작 성 일 : 2024.01.03
// 설 명 : 더블루션 솔루션 js 적용

// 모든 html 요소 로드 이후 이벤트 메서드 실행
document.addEventListener("DOMContentLoaded", function() {
    const cardsData = [
        { image: '/img/Biz/1200x630wa.png' },
        { image: '/img/Biz/img_s1_05.png' },
        { image: '/img/Biz/1648896908044.jpg' },
        { image: '/img/Biz/1200x630wa.png' },
        { image: '/img/Biz/1200x630wa.png' },
    ];

    // cardsData html로 구성하는 부분
    cardsData.forEach(card => {
        // div 생성 후 class 기입
        const newCard = document.createElement('div');
        newCard.classList.add('card'); //클래스 적용 css
        newCard.style.borderRadius = '5%';

        // 카드 섹션은 카드 헤더로만 이뤄짐
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header', 'bg-transparent'); //클래스 적용 css
        cardHeader.style.display = 'flex';
        cardHeader.style.justifyContent = 'center';
        cardHeader.style.alignItems = 'center';
        cardHeader.style.height = '250px';

        // 이미지 틀에 이미지 추가
        const cardImageContainer = document.createElement('div');
        cardImageContainer.classList.add('pricing-columns-price'); //클래스 적용 css
        const cardImage = document.createElement('img'); // img 태그 생성
        cardImage.src = card.image; // 파일경로
        cardImageContainer.appendChild(cardImage);

        // 카드 헤더에 이미지 추가
        cardHeader.appendChild(cardImageContainer);

        // 카드에 헤더 추가
        newCard.appendChild(cardHeader);

        // HTML 자리에 새로운 카드 추가
        const cardContainer = document.getElementById('slider'); // 카드를 추가할 컨테이너
        cardContainer.appendChild(newCard);
    });

    //=====DOM END============================================================================================

    //슬릭 슬라이더 함수
    $('#slider').slick({
        slidesToShow: 4, // 한 번에 보여질 슬라이드의 수
        slidesToScroll: 1, // 한 번에 스크롤 될 슬라이드의 수
        autoplay: true, // 자동 재생 기능을 활성화
        autoplaySpeed: 2000, // 자동 재생 속도
        prevArrow: "<button type='button' class='slick-prev'>이전</button>",
        nextArrow: "<button type='button' class='slick-next'>다음</button>",
        responsive: [
            {
                breakpoint: 768, // 태블릿까지
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // 모바일까지
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        icon.textContent = '▼'; // 닫혔을 때 아이콘 변경
    } else {
        // 닫혀있는 아코디언 열기
        accordionBody.style.display = 'block';
        icon.textContent = '◀'; // 열렸을 때 아이콘 변경
    }

    // 스크립트로 반응형 구현
    // function adjustTextSize() {
    //     let title = document.querySelector('.prototype');
    //     let viewportWidth = window.innerWidth; // 현재 가로
    //     let viewportHeight = window.innerHeight; // 현재 세로
    //     let colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'cyan', 'brown', 'lime'];
    //     let index = 0;
    //
    //     각 모니터 해상도
    //     if (viewportWidth <= 800 && viewportHeight <= 600) {
    //         index = 1; // 800 x 600 해상도에 대한 색상 순서 설정
    //     } else if (viewportWidth <= 1024 && viewportHeight <= 768) {
    //         index = 2;
    //     } else if (viewportWidth <= 1152 && viewportHeight <= 864) {
    //         index = 3;
    //     } else if (viewportWidth <= 1280 && viewportHeight <= 720) {
    //         index = 4;
    //     } else if (viewportWidth <= 1280 && viewportHeight <= 960) {
    //         index = 5;
    //     } else if (viewportWidth <= 1280 && viewportHeight <= 1024) {
    //         index = 6;
    //     } else if (viewportWidth <= 1280 && viewportHeight <= 720) {
    //         index = 7;
    //     } else if (viewportWidth <= 1360 && viewportHeight <= 768) {
    //         index = 8;
    //     } else if (viewportWidth <= 1366 && viewportHeight <= 768) {
    //         index = 9;
    //     } else if (viewportWidth <= 1400 && viewportHeight <= 900) {
    //         index = 10;
    //     }else if (viewportWidth <= 1800 && viewportHeight <= 1000) {
    //         index = 11;
    //     } else if (viewportWidth <= 2000 && viewportHeight <= 1100) {
    //         index = 0;
    //     }
    //
    //     title.style.color = colors[index];
    // }
    //
    // // 페이지 로드 후 텍스트 크기 조정
    // window.onload = function() {
    //     adjustTextSize();
    //
    //     // 윈도우 크기가 변경될 때마다 텍스트 크기 재조정
    //     window.addEventListener('resize', adjustTextSize);
    // };

    // function adjustTextSizeMobile() {
    //     let title = document.querySelector('.prototype');
    //     let viewportWidth = window.innerWidth;
    //     let viewportHeight = window.innerHeight;
    //     let colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'cyan', 'brown', 'lime'];
    //     let index = 0;
    //
    //     // iPhone 기준
    //     if (viewportWidth <= 320 && viewportHeight <= 568) {
    //         index = 1; // iPhone SE 해상도에 대한 색상 순서 설정
    //     } else if (viewportWidth <= 375 && viewportHeight <= 667) {
    //         index = 2; // iPhone 6/7/8 해상도에 대한 색상 순서 설정
    //     } else if (viewportWidth <= 414 && viewportHeight <= 896) {
    //         index = 3; // iPhone 11 Pro Max 해상도에 대한 색상 순서 설정
    //     }
    //
    //     // Samsung Galaxy 기준
    //     else if (viewportWidth <= 360 && viewportHeight <= 640) {
    //         index = 4; // Galaxy S7
    //     } else if (viewportWidth <= 360 && viewportHeight <= 740) {
    //         index = 5; // Galaxy A20
    //     } else if (viewportWidth <= 360 && viewportHeight <= 760) {
    //         index = 6; // Galaxy J6
    //     }
    //
    //     // Google Pixel 기준
    //     else if (viewportWidth <= 411 && viewportHeight <= 731) {
    //         index = 7; // Pixel 2
    //     } else if (viewportWidth <= 411 && viewportHeight <= 823) {
    //         index = 8; // Pixel 2
    //     }
    //
    //
    //     title.style.color = colors[index];
    // }

    // // 페이지 로드 후 텍스트 크기 조정
    // window.onload = function() {
    //     adjustTextSizeMobile();
    //
    //     // 윈도우 크기가 변경될 때마다 텍스트 크기 재조정
    //     window.addEventListener('resize', adjustTextSizeMobile);
    // };
}