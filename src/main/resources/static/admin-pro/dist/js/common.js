//공통 js 파일
(function (W, D) {
    W.$ = W.$ || {};
    W.$common = W.$common || {};

    $common.paging = function (list, callbackFn) {
        const pagingTargetId = "paging";
        let pagingTargetEl = $("#" + pagingTargetId);

        if (!Array.isArray(list)) {
            console.error("[$common.paging] Parameter is not Array!!");
            return false;
        }

        if (!callbackFn) {
            console.error("[$common.paging] callbackFn is not Exsist!!");
            return false;
        }

        if ($(pagingTargetEl).length === 0) {
            console.error(`[$common.paging] ID '${pagingTargetId}' does not exist among the paging elements.`);
            return false;
        }

        let row = list[0] || [];
        let _pageTot = 1;        // 전체 페이지 개수
        let _sPageNum = 1;       // 현재 시작 페이지 번호
        let _ePageNum = 10;      // 현재 마지막 페이지 번호
        let _nowPageRange = 10;  // 현재 선택된 페이지의 ePageNum
        let _pageIndex = parseInt($(pagingTargetEl).data("pageIndex")) || 1;
        let _recordTotal = row.recordTotal ? row.recordTotal : 0;
        let _pageSize = row.pageSize ? row.pageSize : 10;

        // 전체 페이지 개수
        _pageTot = Math.ceil(_recordTotal / _pageSize);
        _nowPageRange = Math.ceil(_pageIndex / _pageSize) * _pageSize;
        _sPageNum = _nowPageRange - (_pageSize - 1);
        if (_nowPageRange > _pageTot) {
            _ePageNum = _pageTot;
        } else {
            _ePageNum = _nowPageRange;
        }
        let paging = $("<ul class='pagination justify-content-center'>");
        if (_pageTot > 10) {
            paging.append($("<li class='page-item'>").append($("<a>", {class: "page-link first", href: "javascript:void(0);", text: "<<"})));
            if (_sPageNum > _pageSize) {
                paging.find("a.page-link.first").attr("onclick", `$('#${pagingTargetId}').data('pageIndex', ${1}); ${callbackFn}();`);
                paging.find("aa.page-link.first").attr("style", "cursor:pointer;");
            }
        }
        paging.append($("<li class='page-item'>").append($("<a>", {class: "page-link perv", href: "javascript:void(0);", text: "<"})));
        if (_sPageNum > _pageSize) { //이전 버튼 시작페이지- 페이지 사이즈
            paging.find("a.page-link.perv").attr("onclick", `$('#${pagingTargetId}').data('pageIndex', ${_sPageNum - _pageSize}); ${callbackFn}();`);
            paging.find("a.page-link.perv").attr("style", "cursor:pointer;");
        }
        for (let i = _sPageNum; i < _ePageNum + 1; i++) {
            paging.append($("<li  class='page-item'>").append($("<a>", {class: "page-link", href: "javascript:void(0);"})));

            if (_pageIndex == i) {
                paging.find("li:last-child>a").attr("style", "background-color: #140097; color: white;");
            } else {
                paging.find("li:last-child>a").attr("style", "cursor:pointer;");
            }

            paging.find("li:last-child>a").attr("onclick", `$('#${pagingTargetId}').data('pageIndex', ${i}); ${callbackFn}();`);
            paging.find("li:last-child>a").text(i);
        }
        paging.append($("<li  class='page-item'>").append($("<a>", {class: "page-link next", href: "javascript:void(0);", text: ">"})));
        if (_ePageNum < _pageTot) { //다음 버튼 시작페이지 + 페이지 사이즈
            paging.find("a.page-link.next").attr("onclick", `$('#${pagingTargetId}').data('pageIndex', ${_sPageNum + _pageSize}); ${callbackFn}();`);
            paging.find("a.page-link.next").attr("style", "cursor:pointer;");
        }
        if (_pageTot > 10) {
            paging.append($("<li  class='page-item'>").append($("<a>", {class: "page-link last", href: "javascript:void(0);", text: ">>"})));
            if (_ePageNum < _pageTot) {
                paging.find("a.page-link.last").attr("onclick", `$('#${pagingTargetId}').data('pageIndex', ${_pageTot}); ${callbackFn}();`);
                paging.find("a.page-link.last").attr("style", "cursor:pointer;");
            }
        }
        $(pagingTargetEl).html(paging);
    }

    /**
     *
     * @param {string} formId
     * @returns {JSON}
     */
    $common.serializeObject = function (formId) { //Form Data Object로 직렬화
        let jqObj = $("#" + formId);
        let obj = null;
        try {
            if (jqObj[0].tagName && jqObj[0].tagName.toUpperCase() === "FORM") {
                let arr = jqObj.serializeArray();
                if (arr) {
                    obj = {};
                    $.each(arr, function () {
                        obj[this.name] = this.value;
                    });
                }
            }
        } catch (e) {
            console.error(e.message);
        }

        return obj;
    };

    /**
     * @param {string} str
     * @description <p>snakeCase를 camelCase로 변환하여 리턴.</p>
     * @description <p>EX) user_nm => userNm</p>
     * @returns {string}
     */
    $common.snakeToCamelCase = (str) =>
        str.toLowerCase().replace(/([-_][a-z])/g, group =>
            group.toUpperCase().replace("-", "").replace("_", "")
        );

    /**
     * @param {string} str
     * @description <p>camelCase를 snakeCase로 변환하여 리턴.</p>
     * @description <p>EX) userNm => user_nm</p>
     * @returns {*}
     */
    $common.camelToSnakeCase = (str) => str.replace(/([A-Z])/g, (c) => "_" + c.toLowerCase());

    /**
     * @param {number} size
     * @description <p>Btye 사이즈를 KB, MB, GB, TB로 변환하여 소수점 둘째 자리까지의 값을 리턴.</p>
     * @returns {string}
     */
    $common.getByteSize = function (size) {
        const byteUnits = ["KB", "MB", "GB", "TB"];

        for (let byteUnit in byteUnits) {
            let temp = size;
            size = Math.floor(size / 1024);

            if (size < 1024) {
                temp = (temp / 1024).toFixed(2);
                return temp + byteUnits[byteUnit];
            }
        }
    }

})(window, document);
var _f = [
        function (string) { //을/를 구분
            return _hasJong(string) ? '을' : '를';
        },
        function (string) { //은/는 구분
            return _hasJong(string) ? '은' : '는';
        },
        function (string) { //이/가 구분
            return _hasJong(string) ? '이' : '가';
        },
        function (string) { //와/과 구분
            return _hasJong(string) ? '과' : '와';
        }
    ],
    _formats = {
        '을/를': _f[0],
        '을': _f[0],
        '를': _f[0],
        '을를': _f[0],
        '은/는': _f[1],
        '은': _f[1],
        '는': _f[1],
        '은는': _f[1],
        '이/가': _f[2],
        '이': _f[2],
        '가': _f[2],
        '이가': _f[2],
        '와/과': _f[3],
        '와': _f[3],
        '과': _f[3],
        '와과': _f[3]
    };

function _hasJong(string) { //string의 마지막 글자가 받침을 가지는지 확인
    string = string.charCodeAt(string.length - 1);
    return (string - 0xac00) % 28 > 0;
}

var josa = {
    c: function (word, format) {
        if (typeof _formats[format] === 'undefined') throw 'Invalid format!';
        return _formats[format](word);
    },
    r: function (word, format) {
        return word + josa.c(word, format);
    }
};

if (typeof define == 'function' && define.amd) {
    define(function () {
        return josa;
    });
} else if (typeof module !== 'undefined') {
    module.exports = josa;
} else {
    window.Josa = josa;
}

let isEmpty = function (value) {
    if (value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
        return true;
    } else {
        return false;
    }
};


function foCheckValidation(pClsId) {
    var chkFlag = true;
    var $target = isEmpty(pClsId) ? $(".form-control") : $(pClsId).find(".form-control");

    $target.each(function () {
        if (isEmpty($(this).val()) && ($(this).is(":visible") || $(this).attr("type") == "hidden")) {
            alert(Josa.r($(this).siblings().text(), "은/는") + ' 필수 입력사항 입니다.');
            $(this).focus();
            chkFlag = false;
            return false;
        }
    })
    return chkFlag;
}

function reDateFormat(paramDate, string) {
    /*  날짜 포맷 함수
    *   paramDate 없을시 : 오늘날짜로 리턴
    *   string 없을시 : 'YYYYMMDD' 형식으로 리턴
    * */
    if (!paramDate) {
        paramDate = new Date();
    }
    const year = paramDate.getFullYear();
    const month = paramDate.getMonth() < 10 ? '0' + (paramDate.getMonth() + 1) : paramDate.getMonth() + 1;
    const date = paramDate.getDate() < 10 ? '0' + paramDate.getDate() : paramDate.getDate();

    return [year, month, date].join(string == undefined || string == '' ? '' : string);
}


function exportJsonFile(filename, contents) {
    /* json 파일저장
    *
    * */
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contents));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function formatDate(timestamp) {
    if(!timestamp) return "";
    let formattedDate = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(timestamp);

    return formattedDate;
}

function toDate(dateString) {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6) - 1;
    const day = dateString.substring(6, 8);
    const hour = dateString.substring(9, 11);
    const minute = dateString.substring(12, 14);

    return new Date(year, month, day, hour, minute);
}

