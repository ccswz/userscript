// ==UserScript==
// @name         MSA-检验完成通知
// @namespace    Violentmonkey Scripts
// @match        http://cmp.msa.gov.cn/simis-ccs/survey/ssd!ssdApply.do*
// @version      20220628
// @author       -
// @description  2022-05-23 22:34:10
// @require      https://git.ccswz.top:10000/pub/userscript/raw/master/moment.min.js
// @require      https://git.ccswz.top:10000/pub/userscript/raw/master/uslib.js
// @updateURL    https://git.ccswz.top:10000/pub/userscript/raw/master/MSA_job_notice.js
// @downloadURL  https://git.ccswz.top:10000/pub/userscript/raw/master/MSA_job_notice.js
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

(async function () {
    //code here
    //是否添加到微软日历
    const is_send_calendar=false
    //是否添加到微软待办
    const is_send_todo=false
    //是否发送邮件
    const is_send_mail=true

    unsafeWindow.logout = logout
    const em = '<li><a id="us_notice" style="color:yellow">检验完成通知</a></li>'
    $('#topmenu > ul').append(em)

    $('#us_notice').click(job_notice)

    // const em1 = '<button id="us_logout" type="button" class="btn btn-warm btn-sm" style="margin-right:15px;">退出</button>'
    // $('#prev_btn').before(em1)
    // $('#us_logout').click(logout)


    if (await is_login() === true) {
        console.log('已登录')
    } else {
        await login()
    }



    async function job_notice() {

        //船舶参数
        //船名
        let shipname = $('#theForm > div.panel.layout-panel.layout-panel-north > div > div.ui_panel_tit > h2 > u:nth-child(3)').text().trim();

        //工作控制号
        let job_no = $('#theForm > div.panel.layout-panel.layout-panel-north > div > div.ui_panel_tit > h2 > u:nth-child(1)').text().trim()
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
        const end_day3m = moment(date).add(3, 'months').add(-1, 'days').format('YYYY-MM-DD')
        // get 18 working day with issue date
        const end_workingday2d = await add_workingday(date, 2)
        // get 18 working day with issue date
        const end_workingday18d = await add_workingday(date, 18)
        // get 20 working day with issue date
        const end_workingday20d = await add_workingday(date, 20)

        function send_email() {
            const sub = shipname + '(' + job_no + ')已经于【' + date + '】检验完成，特告知'
            let body = shipname + ': ' + job_no + '<br>'
            body = body + '2个工作日: <b>' + end_workingday2d + '</b><br>'
            body = body + '18个工作日: <b>' + end_workingday18d + '</b><br>'
            body = body + '20个工作日: <b>' + end_workingday20d + '</b><br>'
            body = body + '以上日期电脑计算供参考 '
            let to = new Array(
                'ccswz@ccs.org.cn',
                'dingjie@ccs.org.cn',
                'linjin@ccs.org.cn',
                'caixin@ccs.org.cn',
                'jyhu@ccs.org.cn'
            );

            const mailstr = 'mailto:' + to.join('%2C%20') + '?subject=' + sub + '&body=' + body
            window.open(mailstr)


        }
        
       
        
        async function send_todo(){
            function gen_task_data(day, desc) {
                return {
                    "title": shipname + " " + desc,
                    "body": shipname + '\n 发证日期: ' + date + '\n工作控制号：' + job_no,
                    "reminderDateTime": day + "T09:00",
                    "dueDateTime": day + "T17:00"
                }
            }

            let res2wd_task = await add_todo(gen_task_data(end_workingday2d, '2工作日'))
            if (res2wd_task.id !== undefined) {
                jBox.tip('2工作日提醒成功(微软待办)')
            }
            
            
            let res18wd_task = await add_todo(gen_task_data(end_workingday18d, '18工作日'))
            if (res18wd_task.id !== undefined) {
                jBox.tip('18工作日提醒成功(微软待办)')
            }
            
            let res20wd_task = await add_todo(gen_task_data(end_workingday20d, '20工作日'))
            if (res20wd_task.id !== undefined) {
                jBox.tip('20工作日提醒成功(微软待办)')
            }
            let res3m_task = await add_todo(gen_task_data(end_day3m, '3个月归档'))
            if (res3m_task.id !== undefined) {
                jBox.tip('3个月归档提醒成功(微软待办)')
            }
        }

        async function send_calendar(){

            function gen_event_data(day, desc) {
                return {
                    "subject": shipname + " " + desc,
                    "start": day + "T09:00",
                    "end": day + "T17:00",
                    "body": shipname + '\n 发证日期: ' + date + '\n工作控制号：' + job_no,
                    "reminderbefore": 1440
                }
            }
    
    
    
            let res2wd_event = await add_event(gen_event_data(end_workingday2d, '2工作日'))
            if (res2wd_event.id !== undefined) {
                jBox.tip('2工作日提醒成功(微软日历)')
            }
    
            let res18wd_event = await add_event(gen_event_data(end_workingday18d, '18工作日'))
            if (res18wd_event.id !== undefined) {
                jBox.tip('18工作日提醒成功(微软日历)')
            }
    
            let res20wd_event = await add_event(gen_event_data(end_workingday20d, '20工作日'))
            if (res20wd_event.id !== undefined) {
                jBox.tip('20工作日提醒成功(微软日历)')
            }
    
            let res3m_event = await add_event(gen_event_data(end_day3m, '3个月归档'))
            if (res3m_event.id !== undefined) {
                jBox.tip('3个月归档提醒成功(微软日历)')
            }
        }

        if (is_send_mail) {
            send_email();
        }
        if (is_send_todo) {
            await send_todo();
        }
        if (is_send_calendar) {
            await send_calendar();
        }



    }

})();