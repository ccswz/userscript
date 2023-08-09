// ==UserScript==
// @name         SSMIS 产品检验登记
// @namespace Violentmonkey Scripts
// @match http://ssmis2018.ccs.org.cn/ssmis//ps/psProductSurvey/psRegisterApproveFrom*
// @match http://ssmis2018.ccs.org.cn/ssmis/ps/psProductSurvey/psRegisterApproveFrom*
// @match http://cn.ssmis2018cloud.ccs.org.cn/ssmis//ps/psProductSurvey/psRegisterApproveFrom*// @match http://ssmis2018.ccs.org.cn/ssmis//ps/psProductSurvey/psRegisterApproveFrom*
// @match http://cn.ssmis2018cloud.ccs.org.cn/ssmis/ps/psProductSurvey/psRegisterApproveFrom*
// @updateURL    https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_Product_Reg.user.js
// @downloadURL  https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_Product_Reg.user.js
// @version      20230809
// @require      https://git.ccswz.top:10000/pub/userscript/raw/master/moment.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        unsafeWindow


// ==/UserScript==

(function () {
    //code here

    let url=new URL('http://st.ccswz.top:20005/dtable/forms/74a32d92-5761-47ad-b3f3-ecb893b26a9e/')


    //添加自定义文件按钮
    const em1 = '<button type="button" id="us_djb" class="btn btn-sm btn-warning " style="margin-right: 5px;">登记表</button>';
    $('#saveBtn').after(em1)



    $('#us_djb').click(function (event) {
        //工作控制号
        url.searchParams.set('prefill_工作控制号',$('#jobNo').val());
        //产品厂
        url.searchParams.set('prefill_产品厂',$('#nameCn').val());
        //综合管理员
        url.searchParams.set('prefill_综合管理员',$('input[name=regpersonName]').val());
        //申请日期
        url.searchParams.set('prefill_申请日期',$('#applyDate').val());
        //评审日期
        url.searchParams.set('prefill_评审日期',$('#psJob\\.regDate').val());
        window.open(url.href);
    });


})();