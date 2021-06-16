// ==UserScript==
// @name CCS在线答题
// @namespace Violentmonkey Scripts
// @version      20210616
// @match http://apptest.ccs.org.cn/ccsic/exam/examQuestion*
// @updateURL    https://gitee.com/last2003/userscript/raw/master/HrExam.user.js
// @downloadURL  https://gitee.com/last2003/userscript/raw/master/HrExam.user.js
// @grant none
// ==/UserScript==

(function (){
//code here
    
    $('div.panel-body')[0].append($($('#showModelDiv').css({'width':'100%'}))[0])

})();