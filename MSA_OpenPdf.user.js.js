// ==UserScript==
// @name         DSMIS/MSA 自动打开PDF
// @namespace    http://tampermonkey.net/
// @version      20241108
// @description  try to take over the world!
// @author       You
// @match        http://10.1.2.138:8001/simis-ccs/survey/workcert!workCertPdfShow.do?*
// @match        http://ccsmoudle.ccs.org.cn/simis-ccs/survey/workcert!workCertPdfShow.do?*
// @match        http://10.1.2.139:8080/dsmis/survey/workcert!workCertPdfShow.do?*
// @match        http://dsmis.ccs.org.cn/dsmis/survey/workcert!workCertPdfShow.do?*
// @match        http://cmp.msa.gov.cn/simis-ccs/survey/workcert!workCertPdfShow.do?*
// @updateURL       https://raw.githubusercontent.com/ccswz/userscript/master/MSA_OpenPdf.user.js.js
// @downloadURL     https://raw.githubusercontent.com/ccswz/userscript/master/MSA_OpenPdf.user.js.js
// @grant        GM_setClipboard
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    //console.log('test_start');
    // var jbno=$('#webform > table:nth-child(4) > tbody > tr > td:nth-child(1) > u:nth-child(2)').html();//工作控制号
    // get jobno from url LIKE(http://cmp.msa.gov.cn/simis-ccs/survey/workcert!workCertPdfShow.do?jobno=2024WZ000117&formId=8a808a014aec80cb014aec91be6c000c&versionId=8a808a014aec80cb014aec933cfa000e&r_=0.9300142129713862)
    var jobno=document.location.search.match(/jobno=(\w+)/)[1];//工作控制号
    var name=$('#webform > table:nth-child(4) > tbody > tr > td:nth-child(1) > u:nth-child(4)').text();//船名
    var form=$('#webform > table:nth-child(4) > tbody > tr > td:nth-child(2) > u').text();//FORM名称
    // if form is 检验信息内部版(DATAINFO-RISS) then rename to 检验信息(检验后)
    if (form=='检验信息内部版(DATAINFO-RISS)') form='检验信息(检验后)';

    GM_setClipboard (name+'_'+jobno+'_'+form);
    //    debugger;
    // setTimeout(dlfile,1000)
    dlfile();
    // window.close();


})();