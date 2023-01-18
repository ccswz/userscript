// ==UserScript==
// @name damis 产品案卷归档,整理编目
// @namespace Violentmonkey Scripts
// @match        http://damis.ccs.org.cn/damis/business/ywgl/danganshuju/DangAnKuServlet.do?method=search*
// @updateURL    https://git.ccswz.top:10000/pub/userscript/raw/master/DAMIS_ProductArchiveList.js
// @downloadURL  https://git.ccswz.top:10000/pub/userscript/raw/master/DAMIS_ProductArchiveList.js
// @require      https://git.ccswz.top:10000/pub/userscript/raw/master/moment.min.js
// @version 20221201
// @grant unsafeWindow

// ==/UserScript==

(function () {
    //code here



    const em1 = '<a id="us_zlbm" class="" style="color: red">生成[整理编目]</a>';
    $('#other').after(em1)
    $('#us_zlbm').click(function () {

        fillin();
    })

    function fillin() {
        var usertableid = document.getElementsByName("usertableid")[0].value;
        var physicsName = document.getElementsByName("physicsName")[0].value;
        var gdOrdgd = document.getElementsByName("gdOrdgd")[0].value;
        mygrid.getAllRowIds().split(',').forEach(function (rowid) {
            let url = "./DangAnKuServlet.do?method=addFile&usertableid=" + usertableid + "&gdOrdgd=" + gdOrdgd + "&physicsName=" + physicsName + "&fileid=" + rowid + "&filemode=modify&showPosition=yes";
            post_data(url);
        });
    }



    function post_data(url) {

        $.get(url, function (page, status) {
            const html = $(page);
            const post_url = 'http://damis.ccs.org.cn/damis/business/ywgl/danganshuju/DangAnKuServlet.do?method=updateFile&pageNum=1&pageSize=30';
            let theForm = $(html.find('form[name="addFileForm"]')[0]);
            theForm.find('select[name="BGQX"]').val('长期（30年）');
            theForm.find('select[name="MJ"]').val('内控B');
            theForm.find('input[name="ZRZ"]').val("申其兵");
            // theForm.find('input[name="CWRQ"]').val(moment().format('YYYY-MM-DD'));
            console.log(theForm.serialize());

            $.post(post_url, theForm.serialize(), function (data, status) {
                console.log('------------------------------------');
                console.log(url);
            });
        });
    }

})();
