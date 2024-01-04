//애니메이션 효과 라이브러리
AOS.init({
    disable: 'mobile',
    duration: 600,
    once: true,
});

// DOMContentLoaded 이벤트 발생 시 실행될 함수 등록
document.addEventListener("DOMContentLoaded", function() {
    const cardsData = [
        { image: 'img/Biz/img_s1_05.png', title: 'KT 에어맵 플랫폼 운영1', date: '2023년~' },
        { image: '/img/Biz/img_s1_05.png', title: 'KT 에어맵 플랫폼 운영5', date: '2017~2021월' },
        { image: '/img/Biz/1648896908044.jpg', title: 'KT 에어맵 플랫폼 운영2', date: '2021~2022년' },
        { image: '/img/Biz/1200x630wa.png', title: 'KT 에어맵 플랫폼 운영4', date: '2018년~' },
        { image: '/img/Biz/img_s1_05.png', title: 'KT 에어맵 플랫폼 운영3', date: '2021년~' },
        { image: '/img/Biz/img_s1_05.png', title: 'KT 에어맵 플랫폼 운영5', date: '2019~2021년' },
        { image: '/img/Biz/img_s1_05.png', title: 'KT 에어맵 플랫폼 운영6', date: '2019~2021년' },
    ];

    // cardsData 배열 순회
    cardsData.forEach(card => {
        // 새로운 카드 엘리먼트 생성
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        // 카드 푸터 엘리먼트 생성
        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer');
        cardFooter.style.textAlign = 'center';

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

        // 카드 제목 추가 (h4 요소 생성)
        const cardTitle = document.createElement('h4');
        cardTitle.textContent = card.title;
        cardFooter.appendChild(cardTitle);

        // 카드 날짜 추가 (p 요소 생성)
        const cardDate = document.createElement('p');
        cardDate.textContent = card.date;
        cardFooter.appendChild(cardDate);

        // 카드 푸터를 새로운 카드에 추가
        newCard.appendChild(cardFooter);

        // 실제 HTML에 새로운 카드 추가
        const cardContainer = document.getElementById('slider'); // 카드를 추가할 컨테이너
        cardContainer.appendChild(newCard);
    });

    // 모든 카드가 추가된 후에 visibility를 변경하여 화면에 표시
    const slider = document.getElementById('slider');
    slider.style.visibility = 'visible';

    function countCards() {
        const cardContainer = document.getElementById('slider');
        const cards = cardContainer.getElementsByClassName('card');
        const cardCount = cards.length;

        return cardCount;
    }

    const numberOfCards = countCards();
    // console.log('총 카드 수 : ', numberOfCards);

    /*===카드 날짜(최신순 과거순) ============================================================================================================*/

    // 모든 카드 요소를 선택
    const cardsContainer = document.querySelector('.pricing-columns');
    const cards = Array.from(cardsContainer.querySelectorAll('.card'));

    // 각 카드 날짜 정보 추출 후 배열에 저장
    const cardDates = cards.map((card, index) => {
        const dateElement = card.querySelector('p');
        const dateInfo = dateElement.textContent.trim();
        // console.log(`카드 ${index + 1}의 날짜: ${dateInfo}`);
        return { dateInfo, card };
    });

    // 날짜 기준 내림차순 정렬
    cardDates.sort((a, b) => {
        const getYear = (dateString) => {
            const yearRegex = /\d{4}/; // 4자리 연도에 매칭되는 정규식
            let yearA, yearB;

            if (dateString.includes('~')) {
                // ~가 포함된 경우 연도를 찾아냄
                const matchA = dateString.match(yearRegex);
                yearA = matchA ? parseInt(matchA[0]) : 0;

                // 두 번째 연도를 찾아냄
                const parts = dateString.split('~');
                const matchB = parts[1].match(yearRegex);
                yearB = matchB ? parseInt(matchB[0]) : new Date().getFullYear(); // 현재 연도를 기본값으로 설정
            } else {
                // ~가 없는 경우 연도를 찾아냄
                const match = dateString.match(yearRegex);
                yearA = match ? parseInt(match[0]) : 0;
                yearB = yearA; // ~가 없는 경우 같은 연도를 설정
            }

            return { yearA, yearB };
        };

        const { yearA: yearAa, yearB: yearBa } = getYear(a.dateInfo);
        const { yearA: yearAb, yearB: yearBb } = getYear(b.dateInfo);

        const dateA = yearAa === yearBa ? yearAa : Math.max(yearAa, yearBa);
        const dateB = yearAb === yearBb ? yearAb : Math.max(yearAb, yearBb);

        // console.log(`dateA: ${dateA}, dateB: ${dateB}`); // 날짜를 콘솔에 출력

        return dateB - dateA; // 내림차순 정렬
    });

    // 날짜 기준 오름차순 정렬
    // cardDates.sort((a, b) => {
    //     // '년월' 형식의 문자열로부터 날짜를 추출하여 비교
    //     const dateA = new Date(a.dateInfo.replace('년', '-').replace('월', '-'));
    //     const dateB = new Date(b.dateInfo.replace('년', '-').replace('월', '-'));
    //
    //     return dateA - dateB; // 오름차순 정렬
    // });

    // console.log("정렬된 카드 배열" + cardDates);

    // 기존 카드를 제거하고, 정렬된 순서대로 새로운 순서로 추가합니다.
    cards.forEach(card => card.remove()); // 기존 카드 모두 제거
    // 정렬된 순서대로 DOM 요소를 다시 배치합니다.
    cardDates.forEach((item) => {
        cardsContainer.appendChild(item.card);
    });

    // 모든 카드가 추가된 후에 slick 슬라이더를 호출하여 적용
    let slidesToShowValue = 4; // 기본 값은 4로 설정

    if (numberOfCards % 4 === 0) {
        slidesToShowValue = 4;
    } else if (numberOfCards % 3 === 0) {
        slidesToShowValue = 3;
    }

    $('#slider').slick({
        slidesToShow: slidesToShowValue, // 한 번에 보여질 슬라이드의 수
        slidesToScroll: slidesToShowValue, // 한 번에 스크롤 될 슬라이드의 수
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

    // 슬라이드가 완성된 후 보이도록 변경
    $('#slider').on('init', function() {
        $(this).css({ visibility: 'visible', opacity: 1 });
    });
});