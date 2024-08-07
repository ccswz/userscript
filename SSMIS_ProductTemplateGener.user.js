// ==UserScript==
// @name SSMIS 产品数据模板生成
// @namespace Violentmonkey Scripts
// @match http://ssmis2018.ccs.org.cn/ssmis/ps/psApproval/psProductAttribute*
// @match http://cn.ssmis2018cloud.ccs.org.cn/ssmis/ps/psApproval/psProductAttribute*
// @updateURL    https://raw.githubusercontent.com/ccswz/userscript/master/SSMIS_ProductTemplateGener.user.js
// @downloadURL  https://raw.githubusercontent.com/ccswz/userscript/master/SSMIS_ProductTemplateGener.user.js
// @version      20231205
// @require      https://raw.githubusercontent.com/ccswz/userscript/master/moment.min.js
// @require      https://raw.githubusercontent.com/ccswz/userscript/master/uslib.js
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        unsafeWindow


// ==/UserScript==

(async function () {
    //code here
    // const host= 'http://127.0.0.1:5000';
    // const host = 'https://as.ccswz.top:10000/';
    const host = 'https://pps.ccswz.top';


    //添加自定义文件按钮
    const em1 = '<button type="button" id="us_mbe" class="btn btn-sm btn-warning " style="margin-right: 5px;">生成模板(Excel)</button>';
    // const em2 = '<button type="button" id="us_mbo" class="btn btn-sm btn-warning " style="margin-right: 5px;">生成模板(在线)</button>';
    $('button[onclick="saveInfo()"]').before(em1)
    // $('button[onclick="saveInfo()"]').before(em2)


    $('#us_mbe').click(async function (event) {
        await makeTplExcel();
    });
    // $('#us_mbo').click(async function (event) {
    //     await makeTplOnline();
    // });


    // get data
    function getData() {
        const certNo = $('#certNo').val();
        let cn = new Array();
        let products = new Array();
        var i = 0;
        //属性数据
        $("#tableAttribute tbody tr").each(function () {
            var sData = $("#tableAttribute").dataTable().fnGetData(this);
            var pData = {};
            if (sData) {
                ++i;
                pData.id = sData.ID;
                pData.propertryKey = sData.PROPERTRYKEY;
                pData.propertryCn = sData.PROPERTRYCN;
                pData.propertryEn = sData.PROPERTRYEN;
                pData.nos = $('#nos' + i).val();
                pData.valueCn = $('#valueCn' + i).val();
                pData.valueEn = $('#valueEn' + i).val();
                pData.propertryUnit = $('#unit' + i).val();
                cn.push(pData);
            }
        });
        //产品数据
        $("#products tbody tr").each(function () {
            var sData = $("#products").dataTable().fnGetData(this);
            console.log(sData)
            var pData = {};
            if (sData) {
                pData.id = sData.PSCERTPRODUCTID;
                pData.nos = $('#productNos' + sData.RN).val();
                pData.PRODUCTCN = sData.PRODUCTCN;
                pData.PRODUCTEN = sData.PRODUCTEN;
                products.push(pData);
            }
        });

        const nameCn = products[0].PRODUCTCN;
        const nameEn = products[0].PRODUCTEN;
        const data = {
            certNo: certNo,
            nameCn: nameCn,
            nameEn: nameEn,
            property: cn
        }
        console.log(data)
        return data
    }

    //生成模板
    async function makeTplExcel() {

        const data = getData();

        // const url = host + '/ppsdata/template-online-1file';
        const url = host + '/api-tplfile';
        const res_json = await post(url, data);
        if (res_json.status_code == 200) {
            GM_openInTab(host + res_json.data.url);
        }
    }
    // async function makeTplOnline() {
    //
    //         const data = getData();
    //
    //         const url = host + '/ppsdata/template-mongo';
    //         const res_json = await post(url, data);
    //         if (res_json.status_code == 200) {
    //             GM_openInTab(host + res_json.data.url);
    //         }
    //         else {
    //             alert(res_json.message)
    //         }
    // }


})();