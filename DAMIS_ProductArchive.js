// ==UserScript==
// @name damis 产品案卷归档
// @namespace Violentmonkey Scripts
// @match        http://damis.ccs.org.cn/damis/business/ywgl/danganshuju/DangAnKuServlet.do?method=addFile*
// @updateURL    https://raw.githubusercontent.com/ccswz/userscript/master/DAMIS_ProductArchive.js
// @downloadURL  https://raw.githubusercontent.com/ccswz/userscript/master/DAMIS_ProductArchive.js
// @require      https://raw.githubusercontent.com/ccswz/userscript/master/moment.min.js
// @version 20230209
// @grant unsafeWindow

// ==/UserScript==

(function () {
    //code here
    // 获取参数
    var params = new URLSearchParams(window.location.search);
    var physicsName = params.get("physicsName");
    // 设置责任者
    var zrz='申其兵';

// 根据参数来执行函数
    if (physicsName === "T_53D532CDF8E01") {
        func1();
    } else if (physicsName === "T_6223FDC875E68") {
        func2();
    } else {
        console.log("Invalid physicsName value");
    }

    function func1(){
        const em='<input type="button" class="button" id="us_tc1" value="填充" style="margin-right: 10px;" > ';
        $('input[value="确定"]').before(em)

        $('#us_tc1').click(function () {
            fillin();
        })
        function fillin() {
            $('select[name="BGQX"]').val('长期（30年）')
            $('select[name="WJXT"]').val('电子')

            $('input[name="ZRZ"]').val(zrz);

            var today = moment();
            $('input[name="BZRQ"]').val(today.format('YYYY-MM-DD'));

        }

    }

    function func2(){
        const em='<input type="button" class="button" id="us_tc" value="填充" style="margin-right: 10px;" > ';
        $('input[value="确定"]').before(em)

        $('#us_tc').click(function () {
            fillin();
        })
        function fillin() {
            $('select[name="BGQX"]').val('长期（30年）')
            $('select[name="MJ"]').val('内控B');
            // 设置责任者
            $('input[name="ZRZ"]').val(zrz);

            // var today = moment();
            // $('input[name="BZRQ"]').val(today.format('YYYY-MM-DD'));

        }

    }

})();