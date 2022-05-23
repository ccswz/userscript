// ==UserScript==
// @name         SSMIS_add_todo
// @namespace    Violentmonkey Scripts
// @match        http://cn.ssmis2018cloud.ccs.org.cn/ssmis//ss/ssSurveyBr/surveyBrInfo*
// @version      20220523
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

    let data = {
        "title": "title",
        "body": "body test",
        "reminderDateTime": "2022-06-14T12:01",
        "dueDateTime": "2022-06-15T12:01"
    }

    const em = '<button id="us_todo" type="button" class="btn btn-primary btn-sm" style="margin-right:15px;">添加到个人备忘</button>'
    $('#prev_btn').before(em)
    $('#us_todo').click(add_todo(data))

    if (await is_login() === true) {
        console.log('已登录')
    } else {
        await login()
    }



})();