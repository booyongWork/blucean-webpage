let globalGrid1 = null;
const gridLoadReq = (data, selector, columns) => {
    // 그리드 생성
    const Grid = tui.Grid;
    /**
     * 그리드 테마 적용하기 (clean, stripe, default)
     *
     * @reference https://nhn.github.io/tui.grid/latest/tutorial-example07-themes
     * @reference https://seokbong.tistory.com/14
     */
    Grid.applyTheme('striped', {
        cell: {
            normal: {
                showVerticalBorder: false,
                showHorizontalBorder: true
            },
        },
    });
    Grid.setLanguage('ko');

    // Toast UI Grid 구성하기
    const grid = new Grid({
        el: $('#' + selector)[0],    // [필수] Container element
        data: data,              // [선택] 그리드 데이터 조회
        scrollX: true,
        scrollY: true,
        bodyHeight: 300,
        rowHeight: 40,
        columns: columns,
        rowHeaders: ['rowNum', 'checkbox'],
    });

    globalGrid1 = grid;



    // Add Row 버튼 클릭 이벤트 핸들러
    $("#rowAppend").on("click", function () {
        grid.appendRow({});
    });

    $("#rowDelete").on("click", function () {
        grid.removeCheckedRows(true);
    });

};

let globalGrid2 = null;
const gridLoadRes = (data, selector, columns) => {
    $('#' + selector).html("");
    // 그리드 생성
    const Grid2 = tui.Grid;
    /**
     * 그리드 테마 적용하기 (clean, stripe, default)
     *
     * @reference https://nhn.github.io/tui.grid/latest/tutorial-example07-themes
     * @reference https://seokbong.tistory.com/14
     */
    Grid2.applyTheme('striped', {
        cell: {
            normal: {
                showVerticalBorder: false,
                showHorizontalBorder: true
            },
        },
    });
    Grid2.setLanguage('ko');

    // Toast UI Grid2 구성하기
    const grid2 = new Grid2({
        // ================================== 공통 옵션 적용 ==============================
        el: $('#' + selector)[0],    // [필수] Container element
        data: data,              // [선택] 그리드 데이터 조회
        scrollX: true,
        scrollY: true,
        bodyHeight: 300,
        rowHeight: 40,
        // ================================== 컬럼 옵션 적용 ==============================
        columns: columns,
        rowHeaders: ['rowNum', 'checkbox'],
    });

    globalGrid2 = grid2;

    // Add Row 버튼 클릭 이벤트 핸들러
    $("#rowAppend2").on("click", function () {
        grid2.appendRow({});
    });

    $("#rowDelete2").on("click", function () {
        grid2.removeCheckedRows(true);
    });

}


let globalGrid3 = null;
const gridSimReq = (d, selector, columns) => {
    if (!d) d = [{}];
    // 그리드 생성
    const Grid = tui.Grid;
    /**
     * 그리드 테마 적용하기 (clean, stripe, default)
     *
     * @reference https://nhn.github.io/tui.grid/latest/tutorial-example07-themes
     * @reference https://seokbong.tistory.com/14
     */
    Grid.applyTheme('striped', {
        cell: {
            normal: {
                showVerticalBorder: false,
                showHorizontalBorder: true
            },
        },
    });
    Grid.setLanguage('ko');

    // Toast UI Grid 구성하기
    const grid3 = new Grid({
        el: $('#' + selector)[0],    // [필수] Container element
        draggable: true,        // row 이동
        scrollX: true,
        scrollY: true,
        data: d,              // [선택] 그리드 데이터 조회
        bodyHeight: 300,
        rowHeight: 40,
        columns: columns,
        rowHeaders: ['rowNum', 'checkbox']
    });

    globalGrid3 = grid3;

    // Add Row 버튼 클릭 이벤트 핸들러
    $("#rowAppend3").on("click", function () {
        grid3.appendRow({});
    });

    $("#rowDelete3").on("click", function () {
        grid3.removeCheckedRows(true);
e    });

};

let globalGrid4 = null;
const gridSimRes = (d, selector, columns) => {
    if (!d) d = [{}];
    // 그리드 생성
    const Grid = tui.Grid;
    /**
     * 그리드 테마 적용하기 (clean, stripe, default)
     *
     * @reference https://nhn.github.io/tui.grid/latest/tutorial-example07-themes
     * @reference https://seokbong.tistory.com/14
     */
    Grid.applyTheme('striped', {
        cell: {
            normal: {
                showVerticalBorder: false,
                showHorizontalBorder: true
            },
        },
    });
    Grid.setLanguage('ko');

    // Toast UI Grid 구성하기
    const grid4 = new Grid({
        el: $('#' + selector)[0],    // [필수] Container element
        draggable: true,        // row 이동
        scrollX: true,
        scrollY: true,
        data: d,              // [선택] 그리드 데이터 조회
        bodyHeight: 300,
        rowHeight: 40,
        columns: columns,
        rowHeaders: ['rowNum', 'checkbox'],
    });

    globalGrid4 = grid4;

    // Add Row 버튼 클릭 이벤트 핸들러
    $("#rowAppend4").on("click", function () {
        grid4.appendRow({});
    });

    $("#rowDelete4").on("click", function () {
        grid4.removeCheckedRows(true);
    });

};


// 작성중인 컬럼 finish 처리
function finishingEdit(grid) {
    if (Array.isArray(grid)) {
        grid.forEach(list => list.forEach(item => grid.finishEditing(item["rowKey"], item['inputValue'])));
    } else {
        grid.getData().forEach(item => grid.finishEditing(item["rowKey"], item['inputValue']));
    }
}

// row 클릭시 checked 처리
function checkRows(grid, ev) {
    const {rowKey} = ev;
    if (grid.getRow(rowKey) != null) {
        const checked = !grid.getRow(rowKey)._attributes.checked;
        // 행의 checkbox 상태 변경
        if (checked) grid.check(rowKey);
        else grid.uncheck(rowKey);
    }
}


function changeDataColumn(data, gb, fldGb) {

    const headerChgOrg = ['comId', 'comDc', 'comType', 'comSize', 'id', 'rowKey'];
    const headerChgObj = ['fldEngNm', 'fldKorNm', 'fldType', 'fldSize', 'intfId', 'fldOrder'];

    data.forEach(function (e) {
        for (const index in headerChgOrg) {
            if ('rowKey' === headerChgOrg[index]) e[headerChgObj[index]] = e[headerChgOrg[index]] + 1;
            else if ('id' === headerChgOrg[index]) e[headerChgObj[index]] = $("#intfId").val();
            else if (e[headerChgObj[index]]) continue;
            else e[headerChgObj[index]] = e[headerChgOrg[index]];
            delete e[headerChgOrg[index]];
        }
        e.ver = $("#version").val();
        e.ioGb = gb;
        e.fldGb = fldGb;  // 헤더부
    })
    return data;
}

function copyRows() {
    finishingEdit(globalGrid3);
    globalGrid3.getCheckedRows().forEach(row => {
        globalGrid4.appendRow(row);
    });

}
