// ==UserScript==
// @name         MSA 工作列表搜索
// @namespace    Violentmonkey Scripts
// @match        http://cmp.msa.gov.cn/simis-web/sys/defaultHome/retrieveMsaLeaderWorkList.action*
// @version      20221010
// @author       -
// @description  
// @updateURL    https://git.ccswz.top:10000/pub/userscript/raw/master/MSA_SearchShip.js
// @downloadURL  https://git.ccswz.top:10000/pub/userscript/raw/master/MSA_SearchShip.js
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    //code here
    
    $(document).keydown(function(event){ 
        var e = event || window.event; 
        var k = e.keyCode || e.which; 
        switch(k) { 
            case 13: 
            //回车,开始搜索
            $('.button_leftt').click()

            break; 
            case 191: 
            //  /,聚焦到搜索框
            $('#search_val').focus()
            return false
            } 
            
    })

})();