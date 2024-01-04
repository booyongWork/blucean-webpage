// DOMContentLoaded 이벤트 발생 시 실행될 함수 등록
document.addEventListener("DOMContentLoaded", function() {
    const cardsData = [
        { image: '/img/Biz/1648896908044.jpg' },
        { image: '/img/Biz/1200x630wa.png' },
        { image: '/img/Biz/1648896908044.jpg' },
        // { image: '/img/Biz/1200x630wa.png' },
    ];

    // cardsData 배열 순회
    cardsData.forEach(card => {
        // 새로운 카드 엘리먼트 생성
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.style.borderRadius = '5%';

        // 카드 헤더 엘리먼트 생성
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header', 'bg-transparent');
        cardHeader.style.display = 'flex';
        cardHeader.style.justifyContent = 'center';
        cardHeader.style.alignItems = 'center';
        cardHeader.style.height = '250px';



        // 카드 이미지 추가
        const cardImageContainer = document.createElement('div');
        cardImageContainer.classList.add('pricing-columns-price');
        const cardImage = document.createElement('img');
        cardImage.src = card.image;
        cardImageContainer.appendChild(cardImage);

        // 카드 헤더에 이미지 추가
        cardHeader.appendChild(cardImageContainer);

        // 카드에 헤더 추가
        newCard.appendChild(cardHeader);

        // 실제 HTML에 새로운 카드 추가
        const cardContainer = document.getElementById('slider'); // 카드를 추가할 컨테이너
        cardContainer.appendChild(newCard);
    });

    // 모든 카드가 추가된 후에 visibility를 변경하여 화면에 표시
    const slider = document.getElementById('slider');
    slider.style.visibility = 'visible';

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

// 슬라이드가 완성된 후 보이도록 변경
    $('#slider').on('init', function() {
        $(this).css({ visibility: 'visible', opacity: 1 });
    });
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