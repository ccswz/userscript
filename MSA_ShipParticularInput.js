// ==UserScript==
// @name        MSA-DSMIS 保存船舶参数
// @namespace   Violentmonkey Scripts
// @match       http://cmp.msa.gov.cn/simis-ccs/datainfo/datainfo!shipParticularInput.do
// @grant       none
// @version     20230328
// @author      -
// @description  海事系统供方船舶监督,显示报告编号以确定年份
// @updateURL    https://git.ccswz.top:10000/pub/userscript/raw/master/MSA_ShipParticularInput.js
// @downloadURL  https://git.ccswz.top:10000/pub/userscript/raw/master/MSA_ShipParticularInput.js

// ==/UserScript==
(function () {
    'use strict';

    // Your code here...
    addJS_Node(saveShipParticular)
    function addJS_Node (text, s_URL, funcToRun, runOnLoad) {
        var D                                   = document;
        var scriptNode                          = D.createElement ('script');
        if (runOnLoad) {
            scriptNode.addEventListener ("load", runOnLoad, false);
        }
        scriptNode.type                         = "text/javascript";
        if (text)       scriptNode.textContent  = text;
        if (s_URL)      scriptNode.src          = s_URL;
        if (funcToRun)  scriptNode.textContent  = '(' + funcToRun.toString() + ')()';

        var targ = D.getElementsByTagName ('head')[0] ;//|| D.body || D.documentElement;
        targ.appendChild (scriptNode);
    }
    function saveShipParticular() {
        if(checkInlandShip()==false){
            alert("请填写内河运输船舶标准船型指标!");
            return false;
        }
        var shipFscShip = $("#shipFscShip").val();
        var shipDamageShip = $("#shipDamageShip").val();
        var shipFollowShip = $("#shipFollowShip").val();
        var passengerShip = $("#passengerShip").val();
        var dangerousGoodsShip = $("#dangerousGoodsShip").val();
        var sandShip = $("#sandShip").val();
        var easilyFluidizedSolidShip = $("#easilyFluidizedSolidShip").val();
        var shipHk = $("#shipHk").val();
        var shipGreenShip = $("#shipGreenShip").val();
        var shipinPortEngin = $("#shipinPortEngin").val();
        var belongToCd = $("#belongToCd").val();
        var hndfShip = $("#hndfShip").val();
        var inlandShip = $("#inlandShip").val();
        var lngShip = $("#lngShip").val();
        var lngFuelShip = $("#lngFuelShip").val();
        var shipGroupCharge = $("#shipGroupCharge").val();
        var shipDualFuelShip = $("#shipDualFuelShip").val();
        var otherTypeShip = $("#otherTypeShip").val();
        var msg = "";
        /*if(shipFscShip == null || shipFscShip == ""){
            msg += "FSC滞留船舶、";
        }*/

        if(passengerShip == null || passengerShip == ""){
            msg += "客船、";
        }
        if(dangerousGoodsShip == null || dangerousGoodsShip == ""){
            msg += "危险品船、";
        }
        if(sandShip == null || sandShip == ""){
            msg += "砂石船、";
        }
        if(easilyFluidizedSolidShip == null || easilyFluidizedSolidShip == ""){
            msg += "易流态化固体散装货物运输船舶、";
        }
        if(shipHk == null || shipHk == ""){
            msg += "航行港澳、";
        }
        /*if(shipGreenShip == null || shipGreenShip == ""){
            msg += "绿色船舶、";
        }*/
        if(shipinPortEngin == null || shipinPortEngin == ""){
            msg += "港内/工程 作业、";
        }
        if(hndfShip == null || hndfShip == ""){
            msg += "海南乡镇船舶、";
        }
        if(inlandShip == null || inlandShip == ""){
            msg += "内河标准船型、";
        }
        if(lngShip == null || lngShip == ""){
            msg += "LNG动力船、";
        }
        if(lngFuelShip == null || lngFuelShip == ""){
            msg += "LNG运输船、";
        }
        if(shipDualFuelShip == null || shipDualFuelShip == ""){
            msg += "双燃料动力船、";
        }
        if(shipDamageShip == null || shipDamageShip == ""){
            msg += "公务船、";
        }
        /*if(otherTypeShip == null || otherTypeShip == ""){
            msg += "其他类型船舶、";
        }*/
        if(shipGroupCharge == null || shipGroupCharge == ""){
            msg += "成组收费、";
        }
        if(belongToCd == null || belongToCd == ""){
            msg += "营运入级业务处管理船舶、";
        }
        if(shipFollowShip == null || shipFollowShip == ""){
            msg += "特殊船舶业务处管理船舶、";
        }

        if(msg != null && msg != ""){
            msg = msg.substring(0,msg.length - 1);
            alert("请到【船舶标签】下确认是否" + msg);
            return;
        }

        if(passengerShip == 'x' || dangerousGoodsShip == 'x' || sandShip == 'x' || easilyFluidizedSolidShip == 'x'){
            $("#shipCustomDangerous").val("x");
        }else {
            $("#shipCustomDangerous").val("-");
        }

        $("#scrollTopValue").val(1400);
        refreshShipForm();
    }
})();