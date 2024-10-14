// ==UserScript==
// @name SSMIS 产品数据模板生成2wps TEST
// @namespace Violentmonkey Scripts
// @match           http://ssmis2018.ccs.org.cn/ssmis/psQuery/productQuery*
// @match           http://cn.ssmis2018cloud.ccs.org.cn/ssmis/psQuery/productQuery*
// @updateURL       https://raw.githubusercontent.com/ccswz/userscript/master/SSMIS_ProductTemplateGener.user.js
// @downloadURL     https://raw.githubusercontent.com/ccswz/userscript/master/SSMIS_ProductTemplateGener.user.js
// @version         20240929
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
   

   
        await makeTplExcel();
  
    //生成模板
    async function makeTplExcel() {
        
        const postData ={
            "Context": {
                "argv": {
                    "params": {
                        "mfg": "浙江爱德船舶舾装设备有限公司",
                        "certNo": "WZ24PPS02942_21",
                        "name": "A-60 级风雨密防火门_Class A-60 weathertight fire door",
                        "productCn": "防火门",
                        "productEn": "Fire Door",
                        "type": "AD011-A60",
                        "property": [
                            {
                                "ID": "8a818596922d28de0192418c3ea5689f",
                                "PS_CERTIFICATE_ID": "8a818596922d28de0192418bd04365fc",
                                "PS_CERT_PRODUCT_ID": "8a818596922d28de0192418bd04665fe",
                                "PS_CERT_PRODUCT_MODEL_ID": "8a818596922d28de0192418c3ea4689e",
                                "PROPERTRYKEY": "25379",
                                "PROPERTRYCN": "产品名称",
                                "PROPERTRYEN": "Product Name",
                                "VALUECN": "A-60 级风雨密防火门|Class A-60 weathertight fire door",
                                "NOS": 1
                            },
                            {
                                "ID": "8a818596922d28de0192418c3ea668a0",
                                "PS_CERTIFICATE_ID": "8a818596922d28de0192418bd04365fc",
                                "PS_CERT_PRODUCT_ID": "8a818596922d28de0192418bd04665fe",
                                "PS_CERT_PRODUCT_MODEL_ID": "8a818596922d28de0192418c3ea4689e",
                                "PROPERTRYKEY": "27024",
                                "PROPERTRYCN": "型号",
                                "PROPERTRYEN": "Model",
                                "VALUECN": "AD011-A60",
                                "NOS": 2
                            },
                            {
                                "ID": "8a818596922d28de0192418c3ea768a1",
                                "PS_CERTIFICATE_ID": "8a818596922d28de0192418bd04365fc",
                                "PS_CERT_PRODUCT_ID": "8a818596922d28de0192418bd04665fe",
                                "PS_CERT_PRODUCT_MODEL_ID": "8a818596922d28de0192418c3ea4689e",
                                "PROPERTRYKEY": "971",
                                "PROPERTRYCN": "产品编号",
                                "PROPERTRYEN": "Serial No.",
                                "VALUECN": "2408372-2408375",
                                "NOS": 3
                            },
                            {
                                "ID": "8a818596922d28de0192418c3ea868a2",
                                "PS_CERTIFICATE_ID": "8a818596922d28de0192418bd04365fc",
                                "PS_CERT_PRODUCT_ID": "8a818596922d28de0192418bd04665fe",
                                "PS_CERT_PRODUCT_MODEL_ID": "8a818596922d28de0192418c3ea4689e",
                                "PROPERTRYKEY": "972",
                                "PROPERTRYCN": "数量",
                                "PROPERTRYEN": "Quantity",
                                "VALUECN": "4",
                                "UNIT": "PCS",
                                "NOS": 4
                            },
                            {
                                "ID": "8a818596922d28de0192418c3ea968a3",
                                "PS_CERTIFICATE_ID": "8a818596922d28de0192418bd04365fc",
                                "PS_CERT_PRODUCT_ID": "8a818596922d28de0192418bd04665fe",
                                "PS_CERT_PRODUCT_MODEL_ID": "8a818596922d28de0192418c3ea4689e",
                                "PROPERTRYKEY": "19064",
                                "PROPERTRYCN": "主要组成",
                                "PROPERTRYEN": "Principal Component of Material",
                                "VALUECN": "门页/Door leaf, 门框/Door frame, 门锁/Door lock, 铰链/Hinge, 防火密封条/Fire seal strip",
                                "NOS": 5
                            },
                            {
                                "ID": "8a818596922d28de0192418c3eaa68a4",
                                "PS_CERTIFICATE_ID": "8a818596922d28de0192418bd04365fc",
                                "PS_CERT_PRODUCT_ID": "8a818596922d28de0192418bd04665fe",
                                "PS_CERT_PRODUCT_MODEL_ID": "8a818596922d28de0192418c3ea4689e",
                                "PROPERTRYKEY": "942",
                                "PROPERTRYCN": " 隔热材料",
                                "PROPERTRYEN": "Insulation Material",
                                "VALUECN": "无机防火板/Inorganic fireproof board, 陶瓷棉板/ Ceramic fiber plate",
                                "NOS": 6
                            },
                            {
                                "ID": "8a818596922d28de0192418c3eab68a5",
                                "PS_CERTIFICATE_ID": "8a818596922d28de0192418bd04365fc",
                                "PS_CERT_PRODUCT_ID": "8a818596922d28de0192418bd04665fe",
                                "PS_CERT_PRODUCT_MODEL_ID": "8a818596922d28de0192418c3ea4689e",
                                "PROPERTRYKEY": "943",
                                "PROPERTRYCN": "耐火等级",
                                "PROPERTRYEN": "Fire Class",
                                "VALUECN": "A-60",
                                "NOS": 7
                            },
                            {
                                "ID": "8a818596922d28de0192418c3eae68a6",
                                "PS_CERTIFICATE_ID": "8a818596922d28de0192418bd04365fc",
                                "PS_CERT_PRODUCT_ID": "8a818596922d28de0192418bd04665fe",
                                "PS_CERT_PRODUCT_MODEL_ID": "8a818596922d28de0192418c3ea4689e",
                                "PROPERTRYKEY": "944",
                                "PROPERTRYCN": "门页材料",
                                "PROPERTRYEN": "Material of Door Leaf",
                                "VALUECN": "冷轧钢板/Cold-rolled steel sheet（Q235-A, 1.0mm）+无机防火板/Inorganic fireproof\nboard（YB, 5mm）+陶瓷棉板/Ceramic fiber board（TG,170kg/m 3 , 38mm）+无机防火板/Inorganic fireproof board\n（YB,5mm）+ 冷轧钢板/Cold-rolled steel sheet（Q235-A, 1.0mm）; 船用胶粘剂/Adhesive for marine（HY92）",
                                "NOS": 8
                            },
                            {
                                "ID": "8a818596922d28de0192418c3eaf68a7",
                                "PS_CERTIFICATE_ID": "8a818596922d28de0192418bd04365fc",
                                "PS_CERT_PRODUCT_ID": "8a818596922d28de0192418bd04665fe",
                                "PS_CERT_PRODUCT_MODEL_ID": "8a818596922d28de0192418c3ea4689e",
                                "PROPERTRYKEY": "945",
                                "PROPERTRYCN": "门页厚度",
                                "PROPERTRYEN": "Thickness of Door Leaf",
                                "VALUECN": "50",
                                "UNIT": "mm",
                                "NOS": 9
                            },
                            {
                                "ID": "8a818596922d28de0192418c3eb068a8",
                                "PS_CERTIFICATE_ID": "8a818596922d28de0192418bd04365fc",
                                "PS_CERT_PRODUCT_ID": "8a818596922d28de0192418bd04665fe",
                                "PS_CERT_PRODUCT_MODEL_ID": "8a818596922d28de0192418c3ea4689e",
                                "PROPERTRYKEY": "969",
                                "PROPERTRYCN": "通孔尺寸",
                                "PROPERTRYEN": "Clear Size",
                                "VALUECN": "2350×1806",
                                "UNIT": "mm",
                                "NOS": 10
                            },
                            {
                                "ID": "8a818596922d28de0192418c3eb168a9",
                                "PS_CERTIFICATE_ID": "8a818596922d28de0192418bd04365fc",
                                "PS_CERT_PRODUCT_ID": "8a818596922d28de0192418bd04665fe",
                                "PS_CERT_PRODUCT_MODEL_ID": "8a818596922d28de0192418c3ea4689e",
                                "PROPERTRYKEY": "974",
                                "PROPERTRYCN": "隔声等级",
                                "PROPERTRYEN": "Level of Sound Reduction",
                                "VALUECN": "R35",
                                "NOS": 11
                            },
                            {
                                "ID": "8a818596922d28de0192418c3eb268aa",
                                "PS_CERTIFICATE_ID": "8a818596922d28de0192418bd04365fc",
                                "PS_CERT_PRODUCT_ID": "8a818596922d28de0192418bd04665fe",
                                "PS_CERT_PRODUCT_MODEL_ID": "8a818596922d28de0192418c3ea4689e",
                                "PROPERTRYKEY": "973",
                                "PROPERTRYCN": "计权隔声指数（Rw）",
                                "PROPERTRYEN": "Weighted Sound Reduction Index（Rw）",
                                "VALUECN": "40",
                                "UNIT": "dB",
                                "NOS": 12
                            }
                        ],
                        "version": "20241011"
                    }
                }
            }
        }
        ;
        console.log(postData);

        // wps airscipt webhook 地址
        const urlWpsScript =
            "https://365.kdocs.cn/api/v3/ide/file/332179083423/script/V2-5uWP9kl5dEHWVNtGy8z0uN/sync_task";
        const token = "6vPn0D4BDJQUdg3Fb8g3x2";
        const headers = {
            accept: "application/json, text/javascript, */*; q=0.01",
            "accept-language":
                "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "Content-Type": "application/json",
            "AirScript-Token": token,
        };
        const body = JSON.stringify(postData);
        try {
            const res = await GM_fetch(urlWpsScript, {
                method: "POST",
                headers: headers,
                body: body,
            });
            const resJson = await res.json();
            console.log(resJson);
        } catch (e) {
            console.log(e);
        }
    }
})();
