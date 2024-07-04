// ==UserScript==
// @name         MSA 供方船舶监督查询
// @namespace    Violentmonkey Scripts
// @match        http://cmp.msa.gov.cn/simis-smi/sys/opm/initShipInstitutional.action*
// @version      20230328
// @author       -
// @description  海事系统供方船舶监督,显示报告编号以确定年份
// @updateURL    https://raw.githubusercontent.com/ccswz/userscript/master/MSA_ShipInstitutional.js
// @downloadURL  https://raw.githubusercontent.com/ccswz/userscript/master/MSA_ShipInstitutional.js
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    //code here

    // 获取所有包含 "certInformation_cb" 的 <a> 标签
    $('a[onclick*="certInformation_cb"]').each(function() {
        // 获取 onclick 属性的值
        var onclickAttr = $(this).attr('onclick');
        // 使用正则表达式匹配 ID
        var match = onclickAttr.match(/certInformation_cb\('(\d+)'\)/);
        if (match) {
            // 获取 ID
            var id = match[1];
            // 获取链接文本
            var linkText = $(this).text();
            // 将 ID 添加到链接文本中
            $(this).text(linkText + ' [' + id+']');
        }
    });
    

})();