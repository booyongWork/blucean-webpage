let grid6;
const gridLoad6 = () => {
    $("#grid6").html("");

    // 그리드 생성
    const Grid6 = tui.Grid;
    /**
     * 그리드 테마 적용하기 (clean, stripe, default)
     *
     * @reference https://nhn.github.io/tui.grid/latest/tutorial-example07-themes
     * @reference https://seokbong.tistory.com/14
     */
    Grid6.applyTheme('striped', {
        cell: {
            normal: {
                showVerticalBorder: false,
                showHorizontalBorder: true
            },
        },
    });
    Grid6.setLanguage('ko');

    // Toast UI Grid4 구성하기
    grid6 = new Grid6({
        // ================================== 공통 옵션 적용 ==============================
        el: $("#grid6")[0],    // [필수] Container element
        draggable: true,        // row 이동
        scrollX: true,
        scrollY: true,
        bodyHeight: 300,
        rowHeight: 40,
        // ================================== 컬럼 옵션 적용 ==============================
        columns: [
            {
                header: 'Key',            // [필수] 컬럼 이름
                name: 'key',                 // [필수] 컬럼 매핑 이름 값
                resizable: true,                // [선택] 컬럼의 리사이즈 여부 옵션
                editor: 'text',                 // [선택] 수정 옵션
                align: 'center',               // [선택] 텍스트 정렬 옵션
                width: 250,  // 최소 너비
                ////^[a-z|A-Z]*$/
                // [선택] 유효성 검증 옵션
                validation: {
                    required: true,
                    dataType: 'string'
                },
            },
            {
                header: 'Value',            // [필수] 컬럼 이름
                name: 'value',                 // [필수] 컬럼 매핑 이름 값
                resizable: true,                // [선택] 컬럼의 리사이즈 여부 옵션
                editor: 'text',                 // [선택] 수정 옵션
                align: 'center',               // [선택] 텍스트 정렬 옵션
                width: 250,  // 최소 너비
                ////^[a-z|A-Z]*$/
                // [선택] 유효성 검증 옵션
                validation: {
                    required: true,
                    dataType: 'string'
                },
            },
            {
                header: 'Description',            // [필수] 컬럼 이름
                name: 'description',                 // [필수] 컬럼 매핑 이름 값
                resizable: true,                // [선택] 컬럼의 리사이즈 여부 옵션
                editor: 'text',                 // [선택] 수정 옵션
                align: 'center',               // [선택] 텍스트 정렬 옵션
               // width: 100,  // 최소 너비
                ////^[a-z|A-Z]*$/
                // [선택] 유효성 검증 옵션
                validation: {
                    required: true,
                    dataType: 'string'
                },
            },
            // {
            //     header: 'RULES',            // [필수] 컬럼 이름
            //     name: 'rule',             // [필수] 컬럼 매핑 이름 값
            //     align: 'center',               // [선택] 텍스트 정렬 옵션
            //     editor: 'text',                 // [선택] 수정 옵션
            //     validation: {
            //         required: true,             // [선택] 필수 여부 체크 옵션
            //     },
            //     // [Option] select 옵션
            //     editor: {
            //         type: 'select',
            //         options: {
            //             listItems: [
            //                 {text: "SUM", value: "SUM"},
            //                 {text: "MINUS", value: "MINUS"},
            //                 {text: "X", value: "X"},
            //                 {text: "DIV", value: "DIV"},
            //             ]
            //         }
            //     },
            // },
        ],
        rowHeaders: ['rowNum', 'checkbox'],
    });
    grid6.appendRow({});


    /*
        직전 focus 위치 저장
        ( focus out시 마지막 cell에서 포커스가 나가지않으면 값이 null로 나오기때문에 마지막 포커스 위치의 값을 가져와서 저장한다 )
    * */
    var previousFocusElement;
    $("#grid6").on('focusin', function(e) {
        previousFocusElement = $(document.activeElement);
    });

    // 탭 버튼 클릭 이벤트 핸들러
    $("#headers-pill").on("click", function () {
        grid6.refreshLayout();
    });


    // Add Row 버튼 클릭 이벤트 핸들러
    $("#rowAppend6").on("click", function () {
        grid6.appendRow({});
    });

};




