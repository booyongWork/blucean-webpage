(function (W, D) {
    W.$ = W.$ || {};
    W.$rule = W.$rule || {};

    $rule.convert = function (rule, data) {
        if(!rule) {alert('오류가 발생했습니다.');console.log('rule_is_a_required_element'); return false;}
        if(!data) {alert('오류가 발생했습니다.');console.log('data_is_a_required_element'); return false;}

        // console.log("rule ==>"+rule);
        // console.log("data ==>"+data);

        let chgData = "";
        if ("SET" === rule || "COPY" === rule) chgData = data;
        else if ("UNSET" === rule) chgData = "";
        else if ("DATETIME" === rule) {if (data.length >= 14) chgData = data.substring(0, 8);}
        else if ("TIME" === rule) {if (data.length >= 14) chgData = data.substring(8, 14);}

        let result = {};
        result.input = data;
        result.output = chgData;

        return result;
    }

    $rule.multiConvert = function (grid) {
        if(!grid) {alert("오류가 발생했습니다. 관리자에게 확인바랍니다."); return false;}

        grid.getData().forEach(item => {
            if (item["setupRule"] && item["inputValue"]) {
                grid.setValue(item["rowKey"], "setupValue", $rule.convert(item["setupRule"], item["inputValue"])["output"]);
            }
        })

        return true;

    }


})(window, document);
