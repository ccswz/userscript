// ==UserScript==
// @name SSMIS 产品报告中产品明细的替换
// @namespace Violentmonkey Scripts
// @match http://ssmis2018.ccs.org.cn/ssmis//ps/psCommon/psProductCheckReport*
// @match http://cn.ssmis2018cloud.ccs.org.cn/ssmis/ps/psCommon/psProductCheckReport*
// @updateURL    https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_ProductReportDetail.user.js
// @downloadURL  https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_ProductReportDetail.user.js
// @version 20230118
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
                e.target.value = e.target.value + '\n';
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
    const em_cpmc = '<buttoon type="button" id="us_cpmc" class="btn btn-sm btn-warning " style="margin-right: 5px;"><i class="fa fa-pencil"></i></buttoon>';
    const em_xhgg = '<buttoon type="button" id="us_xhgg" class="btn btn-sm btn-warning " style="margin-right: 5px;"><i class="fa fa-pencil"></i></buttoon>';
    const em_rkzs = '<buttoon type="button" id="us_rkzs" class="btn btn-sm btn-warning " style="margin-right: 5px;"><i class="fa fa-pencil"></i></buttoon>';
    const em_tzh = '<buttoon type="button" id="us_tzh" class="btn btn-sm btn-warning " style="margin-right: 5px;"><i class="fa fa-pencil"></i></buttoon>';
    const em_cpbh = '<buttoon type="button" id="us_cpbh" class="btn btn-sm btn-warning " style="margin-right: 5px;"><i class="fa fa-pencil"></i></buttoon>';
    const em_cpsl = '<buttoon type="button" id="us_cpsl" class="btn btn-sm btn-warning " style="margin-right: 5px;"><i class="fa fa-pencil"></i></buttoon>';

    $('#product_table > thead > tr > th:nth-child(1)').append(em_cpmc);
    $('#product_table > thead > tr > th:nth-child(2)').append(em_xhgg);
    $('#product_table > thead > tr > th:nth-child(3)').append(em_rkzs);
    $('#product_table > thead > tr > th:nth-child(4)').append(em_tzh);
    $('#product_table > thead > tr > th:nth-child(5)').append(em_cpbh);
    $('#product_table > thead > tr > th:nth-child(6)').append(em_cpsl);


    $('#us_cpmc').click(function (event) {
        showInput('prodcn');
    });
    $('#us_xhgg').click(function (event) {
        showInput('models');
    });
    $('#us_rkzs').click(function (event) {
        showInput('approvalCert');
    });
    $('#us_tzh').click(function (event) {
        showInput('drawingCert');
    });
    $('#us_cpbh').click(function (event) {
        showInput('productid');
    });
    $('#us_cpsl').click(function (event) {
        showInput('quantity');
    });


    //显示输入框 sel: ccs selecter
    function showInput(sel) {
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
                return item.trim().replaceAll("<br>", "\n");
            });

            // console.log(gchArr);
            //join gch with '\n' and its index 
            let gchStr = '<ol>';
            for (let i = 0; i < gchArr.length; i++) {
                let gch = gchArr[i];
                // let gchIndex = i + 1;
                let gchItem = '<li>' + gch + '</li>';
                // console.log(gchItem);
                gchStr += gchItem;
            }
            gchStr += '</ol>';
            top.layer.open({
                title: '确定添加？',
                content: gchStr,
                btn: ['确定', '取消'],
                yes: function (i, o) {
                    addData({sel: sel, val_array: gchArr});
                    // top.layer.closeAll();
                    top.layer.close(i); //如果设定了yes回调，需进行手工关闭
                }
            });


            // top.layer.close(index);
        });
    }


    function addData(obj) {
        //obj应为{sel:选择器,val_array:[值]}
        // 指定的数组

        let sel = obj.sel;
        let val_array = obj.val_array;
        $('input[name="' + sel + '"]').each(function (index,item) {
            $(this).val(val_array[index]);
        })

    }


})();