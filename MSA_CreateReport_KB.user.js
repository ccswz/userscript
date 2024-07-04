// ==UserScript==
// @name        MSA 创建KB报告
// @namespace   Violentmonkey Scripts
// @description MSA 创建KB报告
// @match       http://cmp.msa.gov.cn/simis-ccs/survey/ssd!ssdApply.do*
// @updateURL   https://raw.githubusercontent.com/ccswz/userscript/master/MSA_CreateReport_KB.user.js
// @downloadURL https://raw.githubusercontent.com/ccswz/userscript/master/MSA_CreateReport_KB.user.js
// @require      https://raw.githubusercontent.com/ccswz/userscript/master/moment.min.js
// @require      https://raw.githubusercontent.com/ccswz/userscript/master/uslib.js
// @version     20230821
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
    'use strict';

    // Insert your code here...
    const em = '<li><a id="us_bg_kb" style="color:yellow">创建KB报告</a></li>'
    $('#topmenu > ul').append(em)

    $('#us_bg_kb').click(create_kb_report)

    function create_kb_report(){
        //船舶参数
        //船名
        let ship_name = $('#theForm > div.panel.layout-panel.layout-panel-north > div > div.ui_panel_tit > h2 > u:nth-child(3)').text().trim();

        //工作控制号
        let job_no = $('#theForm > div.panel.layout-panel.layout-panel-north > div > div.ui_panel_tit > h2 > u:nth-child(1)').text().trim()
        //CCS控制号
        let jobno_ccs = $('#theForm > div.panel.layout-panel.layout-panel-north > div > div.ui_panel_tit > h2 > u:nth-child(2)').text().trim()
        let register_no = $('#theForm > div.panel.layout-panel.layout-panel-north > div > div.ui_panel_tit > h2 > u:nth-child(4)').text().trim()
        let class_no = $('#theForm > div.panel.layout-panel.layout-panel-north > div > div.ui_panel_tit > h2 > u:nth-child(5)').text().trim()

        //surveyor
        let surveyor=$('#reviewAssignUsers4Common').text().replace(/\(H\)/g, '').replace(/\(M\/E\)/g, '').replace(/\(H\/M\/E\)/g, '')

        //完成日期
        let date = $('#survey_process > div > div:nth-child(7) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim()
        if (date.length < 9) {
            date = $('#survey_process > div > div:nth-child(7) > div > table > tbody > tr:nth-child(1) > td:nth-child(4)').text().trim();
        }
        //在现场检验阶段，读取input数据
        if (date.length < 9) {
            date = $('#certSignDate').attr('value')
        }

        // moment.js add 3 month and sub 1 day with issue date
        const date_complete = moment(date).format('YYYY-MM-DD')
        const data={ship_name,jobno_ccs,register_no,class_no,date_complete,surveyor}
        const data_jsonstr=JSON.stringify(data)
        const url=`https://as.ccswz.top:10000/qmdoc-online?jobno=${job_no}&where=csc&ctx=${data_jsonstr}`
        window.open(url)
    }


})();