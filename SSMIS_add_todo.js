// ==UserScript==
// @name         SSMIS_add_todo
// @namespace    Violentmonkey Scripts
// @match        http://cn.ssmis2018cloud.ccs.org.cn/ssmis//ss/ssSurveyBr/surveyBrInfo*
// @version      20220524
// @author       -
// @description  2022-05-23 22:34:10
// @require      https://cdn.bootcdn.net/ajax/libs/moment.js/2.18.1/moment.min.js
// @require      http://git.t0t0.top:60887/chenjun/userscript/raw/master/uslib.js
// @updateURL    http://git.t0t0.top:60887/chenjun/userscript/raw/master/SSMIS_add_todo.js
// @downloadURL  http://git.t0t0.top:60887/chenjun/userscript/raw/master/SSMIS_add_todo.js
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(async function () {
    //code here

    

    const em = '<button id="us_todo" type="button" class="btn btn-primary btn-sm" style="margin-right:15px;">添加到个人备忘</button>'
    $('#prev_btn').before(em)

    $('#us_todo').click(ssmis_add_todo)

    if (await is_login() === true) {
        console.log('已登录')
    } else {
        await login()
    }

    async function ssmis_add_todo() {

        // ship name chinses
        const ship_name_cn = $('#cspname').val()
        // ship name english
        const ship_name_en = $('#spname').val()

        if (ship_name_cn === '' ) {
            ship_name_cn=ship_name_en
        }
            
        

        // survey item
        const survey_item = $($('textarea')[0]).text()
        // issue date
        const issue_date = $('#issuedDate').val()
        if (issue_date === '' & issue_date === undefined) {
            top.layer.msg('未获取到发证日期')
            return
        }
            
        // moment.js add 3 days with issue date
        const end_day3d = moment(issue_date).add(3, 'days').format('YYYY-MM-DD')
        // moment.js add 3 month and sub 1 day with issue date
        const end_day3m = moment(issue_date).add(3, 'months').add(-1,'days').format('YYYY-MM-DD')
        // get 18 working day with issue date
        const end_workingday18d = await add_workingday(issue_date, 18)
        // get 20 working day with issue date
        const end_workingday20d = await add_workingday(issue_date, 20)

        

        let data3d = {
            "title": ship_name_cn +' 72小时' ,
            "body": ship_name_en+'\n 发证日期: '+issue_date+'\n检验项目: '+survey_item,
            "reminderDateTime":end_day3d+  "T09:00",
            "dueDateTime": end_day3d+"T17:00"
        }
        let data3m = {
            "title": ship_name_cn +' 3个月归档' ,
            "body": ship_name_en+'\n 发证日期: '+issue_date+'\n检验项目: '+survey_item,
            "reminderDateTime":end_day3m+  "T09:00",
            "dueDateTime": end_day3m+"T17:00"
        }
        let data18wd = {
            "title": ship_name_cn +' 18工作日' ,
            "body": ship_name_en+'\n 发证日期: '+issue_date+'\n检验项目: '+survey_item,
            "reminderDateTime":end_workingday18d+  "T09:00",
            "dueDateTime": end_workingday18d+"T17:00"
        }
        let data20wd = {
            "title": ship_name_cn +' 20工作日' ,
            "body": ship_name_en+'\n 发证日期: '+issue_date+'\n检验项目:'+survey_item,
            "reminderDateTime":end_workingday20d+  "T09:00",
            "dueDateTime": end_workingday20d+"T17:00"
        }
        let res3d = await add_todo(data3d)
        if (res3d.id !== undefined) {
            top.layer.msg('3天提醒成功')
        }

        let res3m = await add_todo(data3m)
        if (res3m.id !== undefined) {
            top.layer.msg('3个月提醒成功')
        }

        let res18wd = await add_todo(data18wd)
        if (res18wd.id !== undefined) {
            top.layer.msg('18工作日提醒成功')
        }

        let res20wd = await add_todo(data20wd)
        if (res20wd.id !== undefined) {
            top.layer.msg('20工作日提醒成功')
        }
            
        
    }

})();