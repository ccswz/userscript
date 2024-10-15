// ==UserScript==
// @name SSMIS 产品数据模板生成2wps
// @namespace Violentmonkey Scripts
// @match           http://ssmis2018.ccs.org.cn/ssmis/psQuery/productQuery*
// @match           http://cn.ssmis2018cloud.ccs.org.cn/ssmis/psQuery/productQuery*
// @updateURL       https://raw.githubusercontent.com/ccswz/userscript/master/SSMIS_ProductTemplateGener2wps.js
// @downloadURL     https://raw.githubusercontent.com/ccswz/userscript/master/SSMIS_ProductTemplateGener2wps.js
// @version         20241014
// @require         https://raw.githubusercontent.com/ccswz/userscript/master/dayjs.min.js
// @require         https://raw.githubusercontent.com/ccswz/userscript/master/gm-fetch.js
// @grant           GM_xmlhttpRequest
// @grant           GM.xmlHttpRequest
// @grant           GM_openInTab
// @grant           GM_setValue
// @grant           GM_getValue
// @grant           GM_addStyle
// @grant           unsafeWindow

// ==/UserScript==

(async function () {
    //code here
    // const host= 'http://127.0.0.1:5000';
    // const host = 'https://as.ccswz.top:10000/';
    // const host = 'https://pps.ccswz.top';
    // get host and protocol
    const host = window.location.host;
    const protocol = window.location.protocol;

    //添加自定义文件按钮
    const em1 =
        '<button type="button" id="us_mbe" class="btn btn-sm btn-warning " style="margin-right: 5px;">生成模板(WPS)</button>';
    // const em2 = '<button type="button" id="us_mbo" class="btn btn-sm btn-warning " style="margin-right: 5px;">生成模板(在线)</button>';
    $("#isship").before(em1);
    // $('button[onclick="saveInfo()"]').before(em2)

    $("#us_mbe").click(async function (event) {
        await makeTplExcel();
    });
    // $('#us_mbo').click(async function (event) {
    //     await makeTplOnline();
    // });

    // get data
    async function getData() {
        // rowData :
        // {
        //     "WORK_ID": "0ab1d5a0a1ee4fc787ea2c49c8b3a996",
        //     "JOBTYPE": "PS",
        //     "WORKTYPE": "DP",
        //     "DIC_NAME_CN": "产品检验",
        //     "JOBNO": "WZ24PPS00662",
        //     "BRANCH": "CCS10137",
        //     "CE_MODEL": "P",
        //     "ORG_NAME": "温州办事处",
        //     "BELONG_SECOND_BRANCH": "CCS10128",
        //     "REGPERSON": "CCS02389",
        //     "APPLY_DATE": "2024-03-18",
        //     "REGDATE": "2024-03-18",
        //     "JOB_STEP": "402890f25d3b038f015d3bf5b61e0027",
        //     "STEP_NAME": "测量及归档",
        //     "CERTNO": "WZ24PPS00662_01",
        //     "PRODUCT_CLASS_KEY": "5600",
        //     "NAME_CN": "船体结构",
        //     "NAME_EN": "Hull Structure",
        //     "PRODUCTID": "2002175-2002178",
        //     "ISSUE": "2024-04-12",
        //     "APPROVAL_CERT": "无/Nil",
        //     "DRAWING_CERT": "ZG21PPP20515",
        //     "INTENDED_FOR": "国际航行海船/International sea-going ship",
        //     "CONFIRMDATE": "2024-04-12",
        //     "REMARKS": "1.未标注\"URS26\"的舱口盖不适用于URS26要求及本社规范规定范畴的所述位置。\r\nThe hatch covers not marked \"URS26\" aren't applicable to URS26 and the position described in its rule by the society.\r\n2..船上适用安装位置应符合船舶图纸的要求并经船舶现场验船师确认。\r\nThe applicable position of installation of the products onboard a ship are to be in compliance of the ship's approved designed plan and confirmed by the site surveyor.\r\n3.本社已审核了产品厂无石棉声明，但本社的审核不免除产品厂按照合同关系向订货方保证产品无石棉的责任。\r\nThe declaration of asbestos-free submitted by manufacturer has been reviewed by the Society. However, liability of the manufacturer to guarantee the products are asbestos-free to purchaser under contract will not be exempted.\r\n",
        //     "PRODUCT_KEY": "5599",
        //     "PRODUCT_CN": "舱口盖",
        //     "PRODUCT_EN": "Hatch Cover",
        //     "APPLY_CODE": "573728002",
        //     "PRODUCT_CODE": "573728002",
        //     "JOBSTATE": "WORKING",
        //     "CLIENT_CODE": "573728002",
        //     "MANUFACTURE_NAME_CN": "台州市靓舰船舶设备有限公司",
        //     "MANUFACTURE_NAME_EN": "Taizhou LiangJian Marine Equipment Co., Ltd",
        //     "FORM_KEY": "P01.@02",
        //     "RELEASE_DATE": "2024-04-12",
        //     "RELEASE_STAT": "Y",
        //     "FORM": "P01.",
        //     "CERTPDF": "WZ24PPS00662_01_8a8185968ecae670018ecbc6a9a52969",
        //     "ECERT": "Ecert_Sign_P_240412155901644_P024-11416798",
        //     "SURVEYS": "陈钧(组员)",
        //     "PRODID": "8a8185968ecae670018ecbc6a9a9296a",
        //     "CERTID": "8a8185968ecae670018ecbc6a9a12968",
        //     "INSPECTOBJECT": "P",
        //     "ISVALID": "YES",
        //     "MOD_TIME": "2024-04-12",
        //     "ID": 15464317,
        //     "RN": 1
        // }

        const rowData = $("#datagrid").datagrid("getSelected");
        if (!rowData) {
            alert("请选择一行数据");
            return;
        }
        const certNo = rowData.CERTNO;
        const workId = rowData.WORK_ID;
        const productCn = rowData.PRODUCT_CN;
        const productEn = rowData.PRODUCT_EN;

        let name = rowData.PRODUCT_CN;
        const mfg = rowData.MANUFACTURE_NAME_CN;

        const headers = {
            accept: "application/json, text/javascript, */*; q=0.01",
            "accept-language":
                "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-requested-with": "XMLHttpRequest",
        };
        // 第2步，获取产品属性
        const path1 = "/ssmis/ps/psApproval/getProductAttribute";
        const body1 =
            "draw=1&columns%5B0%5D%5Bdata%5D=PSCERTPRODUCTID&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=false&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=NOS&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=false&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=PRODUCTCN&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=false&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=asc&start=0&length=-1&search%5Bvalue%5D=&search%5Bregex%5D=false&certNo=" +
            certNo;
        const attrRaw1 = await GM_fetch(`${protocol}//${host}${path1}`, {
            method: "POST",
            headers: headers,
            body: body1,
        });
        const attr1 = await attrRaw1.json();
        const psCertificateId = attr1.data[0].PSCERTIFICATEID;
        const psCertProductId = attr1.data[0].PSCERTPRODUCTID;

        console.log(attr1);

        // 第2步， 产品模型
        const path2 = "/ssmis/ps/psApproval/getModel";
        const body2 =
            "draw=1&columns%5B0%5D%5Bdata%5D=PSCERTPRODUCTMODELID&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=false&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=MODELCODE&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=false&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=false&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=asc&start=0&length=-1&search%5Bvalue%5D=&search%5Bregex%5D=false&certNo=" +
            certNo +
            "&psCertProductId=" +
            psCertProductId +
            "&psCertificateId=" +
            psCertificateId;
        const attrRaw2 = await GM_fetch(`${protocol}//${host}${path2}`, {
            method: "POST",
            headers: headers,
            body: body2,
        });
        const attr2 = await attrRaw2.json();
        const psCertProductModelId = attr2.data[0].PSCERTPRODUCTMODELID;

        // 第3步， 属性列表
        const path3 = "/ssmis/ps/psApproval/getAttribute";
        const body3 =
            "draw=1&columns%5B0%5D%5Bdata%5D=PROPERTRYCN&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=false&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=NOS&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=false&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=VALUECN&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=false&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=VALUEEN&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=false&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=UNIT&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=false&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=asc&start=0&length=-1&search%5Bvalue%5D=&search%5Bregex%5D=false&workId=" +
            workId +
            "&psCertificateId=" +
            psCertificateId +
            "&psCertProductId=" +
            psCertProductId +
            "&psCertProductModelId=" +
            psCertProductModelId +
            "&psProductId=";
        const attrRaw3 = await GM_fetch(`${protocol}//${host}${path3}`, {
            method: "POST",
            headers: headers,
            body: body3,
        });
        const attr3 = await attrRaw3.json();
        const property = attr3.data;

        // filter if "PROPERTRYCN": "产品名称"
        const propertyName = property.filter(
            (item) => item.PROPERTRYCN == "产品名称"
        );
        // if propertyName is not null
        if (propertyName.length > 0) {
            name = propertyName[0].VALUECN;
        }
        // replace name  名字不能包含非法字符和特殊符号\V:*?<>|
        name = name
            .replace(/\//g, "_")
            .replace(/\\/g, "_")
            .replace(/\|/g, "_")
            .replace(/\:/g, "_")
            .replace(/\*/g, "_")
            .replace(/\?/g, "_")
            .replace(/\</g, "_")
            .replace(/\>/g, "_");

        // filter if "PROPERTRYCN": "型号" or "PROPERTRYCN": "规格"
        const propertyType = property.filter(
            (item) => item.PROPERTRYCN == "型号" || item.PROPERTRYCN == "规格"
        );
        // if propertyType is not null
        let type = "";
        if (propertyType.length > 0) {
            type = propertyType[0].VALUECN;
        }

        return {
            mfg: mfg,
            certNo: certNo,
            name: name,
            productCn: productCn,
            productEn: productEn,
            type: type,
            property: property,
        };
    }

    //生成模板
    async function makeTplExcel() {
        const data = await getData();
        if (!data) {
            return;
        }
        const version = dayjs().format("YYYYMMDD");
        Object.assign(data, { version: version });
        const postData = {
            Context: {
                argv: {
                    params: data,
                },
            },
        };
        console.log(postData);

        // wps airscipt webhook 地址
        const urlWpsScript =
            "https://365.kdocs.cn/api/v3/ide/file/332179083423/script/V2-5uWP9kl5dEHWVNtGy8z0uN/sync_task";
        const token = "6vPn0D4BDJQUdg3Fb8g3x2";
        const headers = {

            "Content-Type": "application/json",
            "AirScript-Token": token,
        };
        const body = JSON.stringify(postData);
        try {
            const res = await GM_fetch(urlWpsScript, {
                method: "POST",
                headers: headers,
                body: body,
                anonymous: true
            });
            const resJson = await res.json();
            console.log(resJson);
        } catch (e) {
            console.log(e);
        }
    }
})();
