// ==UserScript==
// @name         DSMIS 国内营运船舶登记
// @namespace Violentmonkey Scripts
// @match http://cmp.msa.gov.cn/simis-ccs/survey/ssd!ssdApply.do*
// @updateURL    https://raw.githubusercontent.com/ccswz/userscript/master/DSMIS_Ship_Reg.user.js
// @downloadURL  https://raw.githubusercontent.com/ccswz/userscript/master/DSMIS_Ship_Reg.user.js
// @version      20230809
// @require      https://raw.githubusercontent.com/ccswz/userscript/master/moment.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        unsafeWindow


// ==/UserScript==

(function () {
    //code here

    let url=new URL('http://st.ccswz.top:20005/dtable/forms/de8906a6-d45d-47b4-bba6-386bd86c5ad9/')


    //添加自定义文件按钮
    const em1 = '<input type="button" id="us_djb" class="ui_bton ui_bton_new" value="登记表" style="margin-left: 20px;">';
    // const em1 = '<button type="button" id="us_djb" class="btn btn-sm btn-warning " style="margin-right: 5px;">登记表</button>';
    $('input[value="申请书"]').after(em1)



    $('#us_djb').click(function (event) {
        //海事系统检验编号
        url.searchParams.set('prefill_海事系统检验编号',$('#theForm > div.bodyContent > div:nth-child(11) > table > tbody > tr > td:nth-child(6)').text().trim());
        //工作控制号
        url.searchParams.set('prefill_工作控制号',$('#theForm > div.bodyContent > div:nth-child(11) > table > tbody > tr > td:nth-child(8)').text().trim());
        //检验种类
        url.searchParams.set('prefill_检验种类',$('#survey_process > div > div.ui_panel_content > div > table > tbody > tr:nth-child(4) > td:nth-child(2)').text().trim());
        //船名
        url.searchParams.set('prefill_船名',$('#theForm > div.bodyContent > div:nth-child(13) > div > table > tbody > tr:nth-child(1) > td:nth-child(2)').text().trim());
        //总吨
        url.searchParams.set('prefill_总吨',$('#theForm > div.bodyContent > div:nth-child(13) > div > table > tbody > tr:nth-child(3) > td:nth-child(4)').text().trim());
        //船籍港
        url.searchParams.set('prefill_船籍港',$('#theForm > div.bodyContent > div:nth-child(13) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim());
        //船舶登记号
        url.searchParams.set('prefill_船舶登记号',$('#theForm > div.bodyContent > div:nth-child(11) > table > tbody > tr > td:nth-child(10)').text().trim());
        //船检登记号
        url.searchParams.set('prefill_船检登记号',$('#theForm > div.bodyContent > div:nth-child(11) > table > tbody > tr > td:nth-child(4)').text().trim());
        //船舶类型
        url.searchParams.set('prefill_船舶类型',$('#shiptypeName').val());
        //申请单位
        url.searchParams.set('prefill_申请单位',$('#survey_process > div > div.ui_panel_content > div > table > tbody > tr:nth-child(5) > td:nth-child(2)').text().trim());
        //申请日期
        url.searchParams.set('prefill_申请日期',$('#survey_process > div > div.ui_panel_content > div > table > tbody > tr:nth-child(1) > td:nth-child(2)').text().trim());


        window.open(url.href);
    });


})();