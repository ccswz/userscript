// ==UserScript==
// @name SSMIS 产品数据录入
// @namespace Violentmonkey Scripts
// @match http://ssmis2018.ccs.org.cn/ssmis//ps/psApproval/psDocumentReviewList*
// @match http://cn.ssmis2018cloud.ccs.org.cn/ssmis//ps/psApproval/psDocumentReviewList*
// @updateURL    https://git.ccswz.top:10000/pub/userscript/raw/master/ProductData.user.js
// @downloadURL  https://git.ccswz.top:10000/pub/userscript/raw/master/ProductData.user.js
// @version 20221201
// @grant unsafeWindow


// ==/UserScript==

(function () {
    //code here
    let addStyle = function (css) {
        var head = top.document.getElementsByTagName('head')[0],
            style = top.document.createElement('style');
        if (!head) {
            return
        }
        style.type = 'text/css';
        try {
            style.innerHTML = css
        } catch (x) {
            style.innerText = css
        }
        head.appendChild(style);
    }
    addStyle('textarea.layui-layer-input { width: 450px !important;height: 100% !important;line-height: 20px;  } ');
    addStyle(' ol li{list-style: decimal; margin-left: 20px; } ');

    //给textarea添加事件 增加换行符
    top.document.addEventListener('keydown', function (e) {
        if (e.target.tagName === 'TEXTAREA') {

            if (e.keyCode === 13) {
                e.preventDefault();
                // console.log('haha');
                // console.log(e.target.value);
                //set target value
                e.target.value = e.target.value+'\n';
            }

        }
    }, true);


    // $('textarea.layui-layer-input').keydown(function(e){
    //     if(e.keyCode == 13){
    //         e.preventDefault();
    //         return true;
    //     }
    // });

    //添加自定义文件按钮
    const em1 = '<button type="button" id="us_gch" class="btn btn-sm btn-warning " style="margin-right: 5px;">变更工程号</button>';
    $('#setProBtn').before(em1)
    //添加自定义文件按钮
    const em2 = '<button type="button" id="us_yt" class="btn btn-sm btn-warning " style="margin-right: 5px;">变更用途</button>';
    $('#setProBtn').before(em2)
    //添加自定义文件按钮
    const em3 = '<button type="button" id="us_zdy" class="btn btn-sm btn-warning " style="margin-right: 5px;">变更<自定义></button>';
    $('#setProBtn').before(em3)


    $('#us_gch').click(function (event) {
        showInput('#txt_hullNo');
    });
    $('#us_yt').click(function (event) {
        showInput('#txt_intendedfor');
    });
    $('#us_zdy').click(function (event) {
        top.layer.prompt({
            formType: 0, //输入框类型，支持0（文本）默认1（密码）2（多行文本）
            title: '请输入自定义内容的ID',
            value: '', //初始时的值，默认空字符
            maxlength: 140, //可输入文本的最大长度，默认500
        }, function(value, index, elem){
            showInput('#'+value);
            // top.layer.closeAll();
        });

    });


    //显示输入框 sel: ccs selecter
    function showInput(sel ) {
        top.layer.prompt({
            formType: 2,
            value: '',
            maxlength: 1000000,
            title: '请输入值（1行1个）',
            area: ['500px', '400px'] //自定义文本域宽高
        }, function (value, index, elem) {
            let gchArr = value.split('\n');
            //strip blank in array
            gchArr = gchArr.map(function (item) {
                return item.trim().replaceAll("<br>","\n");
            });

            // console.log(gchArr);
            //join gch with '\n' and its index 
            let gchStr='<ol>';
            for (let i = 0; i < gchArr.length; i++) {
                let gch = gchArr[i];
                // let gchIndex = i + 1;
                let gchItem ='<li>'+ gch + '</li>' ;
                // console.log(gchItem);
                gchStr+=gchItem;
            }
            gchStr+='</ol>';
            top.layer.open({
                title: '确定添加？',
                content: gchStr,
                btn:['确定','取消'],
                yes:function(i,o){
                    addData({sel:sel,val_array:gchArr});
                    top.layer.closeAll();
                }
            });


            top.layer.close(index);
        });
    }



    function addData(...obj) {
        //obj应为{sel:选择器,val_array:[值]}
        const wordID = $('#formListTableFrame').contents().find('#workId').val();
        const reviewFlag = '1';
        $('#formListTableFrame').contents().find('a.fa-pencil').each(function (index, element) {
            // console.log(element);
            const argstr = $(element).attr('onclick').replace('edit(', '').replace(')', '');
            // get attachedFile,certPdf,id,flag,jobNo,certNo,version,formtype,formkey,formName,editStatus,approvalStatus,psCertificateId,formCode,utn,openKind,jspPath from argstr
            const argstrArr = argstr.split(',');
            const attachedFile = argstrArr[0].replace(/'/g, '');
            const certPdf = argstrArr[1].replace(/'/g, '');
            const id = argstrArr[2].replace(/'/g, '');
            const flag = argstrArr[3].replace(/'/g, '');
            const jobNo = argstrArr[4].replace(/'/g, '');
            const certNo = argstrArr[5].replace(/'/g, '');
            const version = argstrArr[6].replace(/'/g, '');
            const formtype = argstrArr[7].replace(/'/g, '');
            const formkey = argstrArr[8].replace(/'/g, '');
            const formName = argstrArr[9].replace(/'/g, '');
            const editStatus = argstrArr[10].replace(/'/g, '');
            const approvalStatus = argstrArr[11].replace(/'/g, '');
            const psCertificateId = argstrArr[12].replace(/'/g, '');
            const formCode = argstrArr[13].replace(/'/g, '');
            const utn = argstrArr[14].replace(/'/g, '');
            const openKind = argstrArr[15].replace(/'/g, '');
            const jspPath = argstrArr[16].replace(/'/g, '');

            const url = "/ssmis" + jspPath + "&workId=" + wordID + "&id=" + id + "&certPdf=" + certPdf + "&flag=" + flag + "&version=" + version + "&jobNo=" + jobNo + "&certNo=" + certNo + "&formtype=" + formtype + "&formkey=" + formkey + "&reviewFlag=" + reviewFlag + "&psCertificateId=" + psCertificateId + "&formName=" + formName + "&editStatus=" + editStatus + "&approvalStatus=" + approvalStatus + "&formCode=" + formCode + "&utn=" + utn + "&isRefresh=1" + "&attachedFile=" + attachedFile;
            let dataArr = new Array();
            for (let i = 0; i < obj.length; i++) {
                const {
                    sel,
                    val_array
                } = obj[i];
                dataArr.push({
                    'sel': sel,
                    'val': val_array[index]
                });
            }

            post_data(url, ...dataArr);
            // post_data(url, {
            //     sel: '#txt_hullNo',
            //     val: 'TEST-' + (index + 1)
            // });




        });



        // const url = '/ssmis/ps/psProductSurvey/psComProductForm?1=1&workId=4d0064e05d0e4d4595a1e93967b80946&id=8a818595800247fa018025b5d9ea1366&certPdf=WZ22PPS00356_01_8a818595800247fa018025b5d9ea1366&flag=5&version=02&jobNo=WZ22PPS00356&certNo=WZ22PPS00356_01&formtype=Cert&formkey=S01.@02&reviewFlag=1&psCertificateId=8a818595800247fa018025b5d9e81365&formName=&editStatus=E11&approvalStatus=F00&formCode=S01.&utn=P022-73167984&isRefresh=1&attachedFile=undefined';

        //提交数据
        //obj应为{sel:选择器,val:值}

        function post_data(url, ...obj) {

            $.get(url, function (page, status) {
                const html = $(page);
                const post_url = '/ssmis/ps/psProductSurvey/savePsComProductForm?submitType=0';
                let theForm = html.find('#theForm');
                for (let i = 0; i < obj.length; i++) {
                    let obj_i = obj[i];
                    theForm.find(obj_i.sel).val(obj_i.val);
                    // let input = theForm.find(obj_i.sel);
                    // input.val(obj_i.val);
                }
                // console.log(theForm);
                // console.log(theForm.serialize());
                $.post(post_url, theForm.serialize(), function (data, status) {
                    console.log('------------------------------------');
                    console.log(url);
                    console.log(data);
                });
            });
        };

    }



})();