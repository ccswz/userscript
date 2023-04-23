// ==UserScript==
// @name SSMIS Checklist Chinese Tip
// @namespace Violentmonkey Scripts
// @match http://ssmis2018.ccs.org.cn/ssmis/eform/checklist/checklistForm
// @match http://cn.ssmis2018cloud.ccs.org.cn/ssmis/eform/checklist/checklistForm
// @updateURL    https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_ChecklistChineseTip.user.js
// @downloadURL  https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_ChecklistChineseTip.user.js
// @version 20230423
// @grant none


// ==/UserScript==
(function () {
    //code here


    //添加自定义文件按钮
    var em1 = '<a class="btn btn_blue" style="margin-left:15px;" id="us_showchinese">显示中文提示</a>';

    $("a[onclick='refreshChecklist();']").after(em1); // 按钮之后


    //显示中文提示
    $('#us_showchinese').click(showTips);

    //显示中文
    function showTips() {
        $("td[field='NAMEEN']").each(function () {
            tips = String($(this).find('span').attr('title'));
            if (tips == 'undefined') {
                return ""
            }

            tips = tips.replace('双击查看须知：', '');
            tips = tips.replace('双击检验动作查看须知：', '');

            $(this).find('span').html(function (i, origText) {
                return origText + "<span  style='color:blue'>  " + tips + "</span>";
            });
        });
    }


})();