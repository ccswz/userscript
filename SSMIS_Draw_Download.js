// ==UserScript==
// @name         SSMIS 图纸pdf下载
// @namespace Violentmonkey Scripts
// @match http://ssmis2018.ccs.org.cn/ssmis/pa/paSp/paShipDrawingsQuery*
// @match http://ssmis2018.ccs.org.cn/ssmis/pa/paPt/ptShipDrawingsQuery*
// @match http://cn.ssmis2018cloud.ccs.org.cn/ssmis/pa/paSp/paShipDrawingsQuery*
// @match http://cn.ssmis2018cloud.ccs.org.cn/ssmis/pa/paPt/ptShipDrawingsQuery*
// @updateURL    https://raw.githubusercontent.com/ccswz/userscript/master/SSMIS_Draw_Download.js
// @downloadURL  https://raw.githubusercontent.com/ccswz/userscript/master/SSMIS_Draw_Download.js
// @version      20230827
// @grant        GM_setClipboard
// @grant        unsafeWindow


// ==/UserScript==

(function () {
    //code here

    const em = '<button  onclick="return false" id="us_pdf"  class="btn btn-warning"   style="margin-left: 10px">显示PDF</button>'

    $('button[onclick="resetList()"]').after(em)

    $('#us_pdf').click(function (e) {
        // e.stopPropagation();
        // console.log('click')
        $('a[title="查看图纸"]').each(function () {
            const drawid = $(this).attr('onclick').match(/viewPdf\('(.*)'\)/)[1];
            console.log(drawid);
            const em = `<a class=" fa fa-file-pdf-o us" data-toggle="tooltip" title="查看PDF" id="${drawid}" style="margin-left:5px; cursor: pointer;color:darkred;" ></a>`
            $(this).after(em);
        })


        $('.us').click(function () {
            const drawid = $(this).attr('id');
            const email = viewPdf.toString().match(/SSMISCLIENT:\/\/PA2\/([\w]+@ccs\.org\.cn)/)[1];
            const data = {
                "funcid": "getdwglistForView",
                "user": email,
                "id": null,
                "dwgid": drawid,
                "patype": null,
                "notation": null,
                "censorid": null,
                "type": null,
                "step": null,
                "anType": null,
                "dwgs": [],
                "ecmcode": null,
                "ip": "cn.ssmis2018cloud.ccs.org.cn/ssmis",
                "version": null
            }
            const url = 'http://cn.ssmis2018cloud.ccs.org.cn/ssmis/client/commonRequest'
            $.post(url, 'requestContent=' + JSON.stringify(data), function (res) {
                const res_json = JSON.parse(res);
                const dwg = res_json['dwgs'][2];
                console.log(dwg);
                const dwgname = dwg['dwgname'];
                GM_setClipboard(dwgname+'.pdf');
                const dwgurl = dwg['url'];
                window.open(dwgurl);
            })
        })
    })

})();