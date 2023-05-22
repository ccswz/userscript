// ==UserScript==
// @name        MSA 创建KB报告
// @namespace   Violentmonkey Scripts
// @description MSA 创建KB报告
// @match       http://cmp.msa.gov.cn/simis-ccs/survey/ssd!ssdApply.do*
// @updateURL   https://git.ccswz.top:10000/pub/userscript/raw/master/MSA_CreateReport_KB.user.js
// @downloadURL https://git.ccswz.top:10000/pub/userscript/raw/master/MSA_CreateReport_KB.user.js
// @require      https://git.ccswz.top:10000/pub/userscript/raw/master/moment.min.js
// @require      https://git.ccswz.top:10000/pub/userscript/raw/master/uslib.js
// @version     20230519
// @grant none
// ==/UserScript==

(async function () {
    'use strict';

    // Insert your code here...
    const em = '<li><a id="us_bg_kb" style="color:yellow">创建KB报告</a></li>'
    $('#topmenu > ul').append(em)

    $('#us_bg_kb').click(create_kb_report)

    async function create_kb_report(){
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
        let surveyor=$('#reviewAssignUsers4Common').text().replace(/\(H\)/g, '').replace(/\(M\/E\)/g, '')

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
        const date_complete = moment(date).format('YYYY年MM月DD日')
        let data={ship_name,jobno_ccs,register_no,class_no,date_complete,surveyor}
        await create_doc({
            "ctx":data,
            "jobno": job_no,
            "name": "KB",
            "where": "csc"
        })
    }


})();