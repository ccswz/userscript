// ==UserScript==
// @name         SSMIS_add_todo
// @namespace    Violentmonkey Scripts
// @match        http://cn.ssmis2018cloud.ccs.org.cn/ssmis//ss/ssSurveyBr/surveyBrInfo*
// @match        http://ssmis2018.ccs.org.cn/ssmis//ss/ssSurveyBr/surveyBrInfo*
// @version      20220607
// @author       -
// @description  2022-05-23 22:34:10
// @require      https://git.ccswz.top:10000/pub/moment.min.js
// @require      https://git.ccswz.top:10000/pub/userscript/raw/master/uslib.js
// @updateURL    https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_add_todo.js
// @downloadURL  https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_add_todo.js
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// ==/UserScript==

(async function () {
    //code here

    unsafeWindow.logout = logout

    const em = '<button id="us_todo" type="button" class="btn btn-primary btn-sm" style="margin-right:15px;">添加到个人备忘</button>'
    $('#prev_btn').before(em)
    $('#us_todo').click(ssmis_add_todo)

    // const em1 = '<button id="us_logout" type="button" class="btn btn-warm btn-sm" style="margin-right:15px;">退出</button>'
    // $('#prev_btn').before(em1)
    // $('#us_logout').click(logout)


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

        
        function gen_task_data(day,desc){
            return {
                "title": ship_name_cn +" "+ desc,
                "body": ship_name_en+'\n 发证日期: '+issue_date+'\n检验项目: '+survey_item,
                "reminderDateTime":day+  "T09:00",
                "dueDateTime": day+"T17:00"
            }
        }
        function gen_event_data(day,desc){
            return {
                "subject": ship_name_cn +" "+ desc,
                "start": day+"T09:00",
                "end": day+"T17:00",
                "body": ship_name_en+'\n 发证日期: '+issue_date+'\n检验项目: '+survey_item,
                "reminderbefore": 1440
            }
        }

        let res3d_task = await add_todo(gen_task_data(end_day3d,'72小时'))
        if (res3d_task.id !== undefined) {
            top.layer.msg('3天提醒成功(微软待办)')
        }

        
        let res18wd_task = await add_todo(gen_task_data(end_workingday18d,'18工作日'))
        if (res18wd_task.id !== undefined) {
            top.layer.msg('18工作日提醒成功(微软待办)')
        }

        let res20wd_task = await add_todo(gen_task_data(end_workingday20d,'20工作日'))
        if (res20wd_task.id !== undefined) {
            top.layer.msg('20工作日提醒成功(微软待办)')
        }
        
        let res3m_task = await add_todo(gen_task_data(end_day3m,'3个月归档'))
        if (res3m_task.id !== undefined) {
            top.layer.msg('3个月归档提醒成功(微软待办)')
        }

        let res3d_event = await add_event(gen_event_data(end_day3d,'72小时'))
        if (res3d_event.id !== undefined) {
            top.layer.msg('3天提醒成功(微软日历)')
        }

        let res18wd_event = await add_event(gen_event_data(end_workingday18d,'18工作日'))
        if (res18wd_event.id !== undefined) {
            top.layer.msg('18工作日提醒成功(微软日历)')
        }

        let res20wd_event = await add_event(gen_event_data(end_workingday20d,'20工作日'))
        if (res20wd_event.id !== undefined) {
            top.layer.msg('20工作日提醒成功(微软日历)')
        }

        let res3m_event = await add_event(gen_event_data(end_day3m,'3个月归档'))
        if (res3m_event.id !== undefined) {
            top.layer.msg('3个月归档提醒成功(微软日历)')
        }

        
    }

})();