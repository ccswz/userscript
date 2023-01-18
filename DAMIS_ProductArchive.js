// ==UserScript==
// @name damis 产品案卷归档
// @namespace Violentmonkey Scripts
// @match        http://damis.ccs.org.cn/damis/business/ywgl/danganshuju/DangAnKuServlet.do*
// @updateURL    https://git.ccswz.top:10000/pub/userscript/raw/master/DAMIS_ProductArchive.js
// @downloadURL  https://git.ccswz.top:10000/pub/userscript/raw/master/DAMIS_ProductArchive.js
// @require      https://git.ccswz.top:10000/pub/userscript/raw/master/moment.min.js
// @version 20221201
// @grant unsafeWindow

// ==/UserScript==

(function () {
    //code here

    $('input[value="<<<"]').click(function () {
        fillin();
    })
    function fillin() {
        $('select[name="BGQX"]').val('长期（30年）')
        $('select[name="WJXT"]').val('电子')
        // 设置责任者
        $('input[name="ZRZ"]').val("申其兵")

        var today = moment();
        $('input[name="BZRQ"]').val(today.format('YYYY-MM-DD'));

    }

})();