// ==UserScript==
// @name MSA-DSMIS Trello Add Card
// @namespace Violentmonkey Scripts
// @version 202400815
// @match http://cmp.msa.gov.cn/simis-ccs/survey/ssd!ssdApply.do*
// @updateURL https://raw.githubusercontent.com/ccswz/userscript/master/MSA_TrelloAddCard.js
// @downloadURL https://raw.githubusercontent.com/ccswz/userscript/master/MSA_TrelloAddCard.js


// ==/UserScript==

(async function () {
    //code here
    //添加文件信息
    let btn_arr = [
        { name: "Trello卡片",  id: "us_wsm" },
       
    ];
    //添加自定义文件按钮
    for (let i = 0; i < btn_arr.length; i++) {
        var em1 =
            '<li> <a id="' +
            btn_arr[i].id +
            '" style="color:yellow">' +
            btn_arr[i].name +
            "</a></li>";
        $("#topmenu > ul > li:nth-child(9)").after(em1);
        $("#" + btn_arr[i].id).click(function (event) {
            event.preventDefault();
            btn_click(btn_arr[i]);
        });
    }

    async function btn_click(e) {
        const url = window.location.href; // Get the current URL
        const params = new URLSearchParams(url); // Create a URLSearchParams object
        const job_no = params.get('jobno'); // Get the value of the jobno parameter
        
        const url2 = "https://hook.us1.make.com/6ggnrro7l4g9aozkr62ibrhj2p4zh8cj?jobno=" + job_no;
        
        window.open(url2, "_blank");
    }


})();
