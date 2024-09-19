// ==UserScript==
// @name         MSA Show Name(显示船名)
// @namespace    Violentmonkey Scripts
// @match        http://cmp.msa.gov.cn/simis-web//sys/oifi/retrieveFieldInspection.action*
// @match        http://cmp.msa.gov.cn/simis-web//sys/cert/retrieveOriginalPrint.action*
// @match        http://cmp.msa.gov.cn/simis-web//sys/archive/initArchiveMain.action*
// @version      20240919
// @author       -
// @description
// @updateURL    https://raw.githubusercontent.com/ccswz/userscript/master/MSA_ShowName.js
// @downloadURL  https://raw.githubusercontent.com/ccswz/userscript/master/MSA_ShowName.js
// @grant        unsafeWindow
// @grant        GM_setClipboard
// ==/UserScript==

(function () {
    //code here

    //添加自定义文件按钮
    const em = '<div style="margin-right: 100px;float: right;"><a id="us_shipname" ></a><a id="us_shipdetail" style="margin-left: 10px"><span class="green">详细</span></a></div>'
    $('.myhere').append(em)

    const url = new URL(decodeURI(document.URL))
    const workno = url.searchParams.get('workno')
    const surveyNo = url.searchParams.get('surveyNo')
    const stepId = url.searchParams.get('stepId')
    const stepName = url.searchParams.get('stepName')
    const applicantOrgId = url.searchParams.get('applicantOrgId')
    const shipInsRegNo = url.searchParams.get('shipInsRegNo')

    // const jobNo = workno.substring(2,6)+workno.substring(0,2)+workno.substring(6)
    //正本打印时
    let jobNo = $('#surveyNo').val()
    //现场检验时
    if(jobNo==undefined){
        jobNo=$('a[onclick="changeHelp(\'9999003\');"]').attr('data').match(/surveyNo=([^&]*)/)[1];
    }

    $('#us_shipname').click(function (){
        //get url from document
        //get workno from url
        let funcId = ''
        if(stepName=='申请受理'){
            funcId = 'CCS100'
        }else if(stepName=='申请评审'){
            funcId = 'CCS101'
        }else if(stepName=='工作安排'){
            funcId = 'CCS101'
        }else if(stepName=='现场检验'){
            funcId = 'CCS103'
        }else if(stepName=='文件审核'){
            funcId = 'CCS108'
        }else if(stepName=='文件签发'){
            funcId = 'CCS105'
        }else if(stepName=='正本打印'){
            funcId = 'CCS106'
        }else if(stepName=='文件发出'){
            funcId = 'CCS106'
        }else if(stepName=='文件归档'){
            funcId = 'CCS107'

        }

            openComplementFun('http://cmp.msa.gov.cn:80/simis-web/',workno,funcId,applicantOrgId,surveyNo,1,stepId)
        })

    $('#us_shipdetail').click(function (){
        let  url = "http://cmp.msa.gov.cn/simis-web/sys/workInfoTree/initWorkInfo.action";
        const params = "type=cb&funId=CX0707&no="+shipInsRegNo
        url = url + "?" + params + "&r_=" + Math.random();
        open(url, "_blank");
    })


        getShipNameByRegNo(shipInsRegNo)





    //根据船检登记号 regno ，获取船舶船名信息
    function getShipNameByRegNo(regno) {
        // console.log("getShipNameByRegNo");
        let url = 'http://cmp.msa.gov.cn/simis-web/sys/workInfoTree/searchInfo.action';
        $.post(url, {
                val: regno,
                type: "船舶"
            },
            function (data, status) {
                // console.log("Data: " + data + "\nStatus: " + status);
                let shipName='';
                if(status==="success"){
                    shipName=data.split("&")[0];
                }
                $('#us_shipname').html('<span class="green" >'+shipName+' ('+jobNo+')</span>');
            });
    }

    function openComplementFun(basePath,workno,funcId,orgId,surveyNo,hasAuthEdit,stepId){
		var funUrl = null;
		var url = basePath + "sys/common/getFuncUrl.action";
    	$.ajax( {
			type : "POST",
			url : url,
			data :{workno:workno,funcId:funcId,orgId:orgId,surveyNo:surveyNo,hasAuthEdit:hasAuthEdit,stepId:stepId},
			success : function(data) {
				funUrl = data;
			},
			async : false,
			error:function(){
			}
		});

    	if(funUrl == null || funUrl == ""){
    		commonTip("打开功能失败：功能地址不存在",1);
    		return;
    	}

    	if(funUrl.length < 6){
    		commonTip("打开功能失败：" + funUrl,1);
    		return;
    	}

    	if(funUrl.substr(0,6) == "error:"){
    		var msgcon = funUrl.substring(6,funUrl.length);
    		commonTip("打开功能失败：" + msgcon,1);
    		return;
    	}
    	open(funUrl);
	}

    // 复制 检验项目表 的标题
    $(".showdialog1").click(function () {
        // check if $(this).text() is "打印检验项目表",if so,copy the shipname and jobno to clipboard
        if ($(this).text() == "打印检验项目表") {
            // get shipname and jobno
            let shipname = $('#us_shipname').text();
            // replace the ( ) with _
            shipname = shipname.replace(/\(/g, "_").replace(/\)/g, "_");
             // copy to clipboard
             GM_setClipboard(shipname + "检验项目表.pdf" );
        }
        // open the url
        // open($(this).attr("href"), "_blank");
    });


})();