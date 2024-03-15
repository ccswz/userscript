// ==UserScript==
// @name MSA-DSMIS Qmdoc
// @namespace Violentmonkey Scripts
// @version 20240315
// @match http://cmp.msa.gov.cn/simis-ccs/survey/ssd!ssdApply.do*
// @updateURL https://raw.githubusercontent.com/ccswz/userscript/master/MSA_Qmdoc.js
// @downloadURL https://raw.githubusercontent.com/ccswz/userscript/master/MSA_Qmdoc.js
// @grant GM.xmlHttpRequest
// @grant GM.setValue
// @grant GM.getValue

// ==/UserScript==

(async function () {
    //code here
    //添加文件信息
    let doc_arr = [
        { tplname: "国内船无石棉声明(v20231228)", topdf: false, id: "us_wsm" },
        { tplname: "特别说明报告(v20231228)", topdf: false, id: "us_kb" },
        { tplname: "用户签收单 (v20231228)", topdf: false, id: "us_qsd" },
    ];
    //添加自定义文件按钮
    for (let i = 0; i < doc_arr.length; i++) {
        var em1 =
            '<li> <a id="' +
            doc_arr[i].id +
            '" style="color:yellow">' +
            doc_arr[i].tplname.slice(0,-11) +
            "</a></li>";
        $("#topmenu > ul > li:nth-child(9)").after(em1);
        $("#" + doc_arr[i].id).click(function (event) {
            event.preventDefault();
            get_doc(doc_arr[i]);
        });
    }

    async function get_doc(doc) {
        const host = "https://api.ccswz.top/api/qmdoc";
        const url = "/api-qmdoc";
        const data = JSON.stringify({
            tplname: doc.tplname,
            topdf: doc.topdf,
            ctx: await GM.getValue(job_no),
        });
        const res = await gm_fetch(host + url, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            data,
        });
        const jdata = await res.json();
        console.log(jdata);
        window.open(host + jdata.data.url, "_blank");
    }

    //工作控制号
    const job_no = $(
        "#theForm > div.panel.layout-panel.layout-panel-north > div > div.ui_panel_tit > h2 > u:nth-child(1)"
    )
        .text()
        .trim();

    await init(job_no);

    //   init ,get the prameters
    async function init(job_no) {
        const url = "https://info.t0t0.top/csc/" + job_no;
        const res = await gm_fetch(url);
        const jdata_arr = await res.json();
        let jdata = jdata_arr[0];
        // console.log(jdata);
        // use GM.setValue set the value

        //发证日
        let date_complete = $(
            "#survey_process > div > div:nth-child(7) > div > table > tbody > tr:nth-child(1) > td:nth-child(4)"
        )
            .text()
            .trim();
        if (date_complete.length == 0) {
            date_complete = $(
                "#survey_process > div > div:nth-child(8) > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > input"
            ).attr("value");
        }

        //地点
        let place = $(
            "#survey_process > div > div:nth-child(7) > div > table > tbody > tr:nth-child(2) > td:nth-child(4)"
        )
            .text()
            .trim();
        if (place.length == 0) {
            place = $("#certSignAddr").attr("value");
        }
        //证书
        var certs = new Array();

        //正本打印阶段
        $("#iframe")
            .contents()
            .find("#treeCert")
            .find("li.level1")
            .each(function () {
                console.log($(this).text().trim());
                certs.push($(this).text().trim());
            });
        $("#iframe")
            .contents()
            .find("#treeZB")
            .find("li.level1")
            .each(function () {
                console.log($(this).text().trim());
                certs.push($(this).text().trim());
            });
        //现场检验阶段
        $("#iframe1")
            .contents()
            .find("#treeCert")
            .find("li.level1")
            .each(function () {
                console.log($(this).text().trim());
                certs.push($(this).text().trim());
            });
        $("#iframe1")
            .contents()
            .find("#treeZB")
            .find("li.level1")
            .each(function () {
                // console.log($(this).text().trim());
                certs.push($(this).text().trim());
            });
        jdata["date_complete"] = date_complete;
        jdata["place"] = place;
        jdata["certs"] = certs;
        await GM.setValue(job_no, jdata);
        console.log(await GM.getValue(job_no));
    }

    /**
 * The simplified `fetch` — wrapper for `GM_xmlhttpRequest`.
 * Supports only `headers` and `method` of fetch init object.
 * @example
   // @grant       GM.xmlHttpRequest

   const response = await GM_fetch(url);
   const {status, statusText} = response;
   const lastModified = response.headers.get("last-modified");
   const blob = await response.blob();
 */
    async function gm_fetch(url, { method = "get", headers, data } = {}) {
        return new Promise((resolve, _reject) => {
            const blobPromise = new Promise((resolve, reject) => {
                GM.xmlHttpRequest({
                    url,
                    method,
                    headers,
                    data,
                    responseType: "blob",
                    onload: (response) => resolve(response.response),
                    onerror: reject,
                    onreadystatechange: onHeadersReceived,
                });
            });
            blobPromise.catch(_reject);
            function onHeadersReceived(response) {
                const { readyState, responseHeaders, status, statusText } =
                    response;
                if (readyState === 2) {
                    // HEADERS_RECEIVED
                    const headers = parseHeaders(responseHeaders);
                    resolve({
                        headers,
                        status,
                        statusText,
                        ok: status.toString().startsWith("2"),
                        arrayBuffer: () =>
                            blobPromise.then((blob) => blob.arrayBuffer()),
                        blob: () => blobPromise,
                        json: () =>
                            blobPromise
                                .then((blob) => blob.text())
                                .then((text) => JSON.parse(text)),
                        text: () => blobPromise.then((blob) => blob.text()),
                    });
                }
            }
        });
    }
    function parseHeaders(headersString) {
        class Headers {
            get(key) {
                return this[key.toLowerCase()];
            }
        }
        const headers = new Headers();
        for (const line of headersString.trim().split("\n")) {
            const [key, ...valueParts] = line.split(":"); // last-modified: Fri, 21 May 2021 14:46:56 GMT
            headers[key.trim().toLowerCase()] = valueParts.join(":").trim();
        }
        return headers;
    }
})();
