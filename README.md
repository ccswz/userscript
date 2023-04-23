# userscript

#### 介绍
工作中用到的各个系统的userscript脚本仓库


#### 通用使用说明

1.  使用谷歌浏览器或者具有Chrome内核的浏览器（如QQ浏览器，微软的新版EDGE）或者Firefox；主要是可以安装插件
2.  安装暴力猴（violentmonkey）插件（tampermonkey 或许应该可以，测试都在暴力猴进行 ）
3.  点击页面中提供的对应脚本，进入页面后，点击RAW，一般就会提示你要安装脚本了，同意即可
4.  如果实在不行，tampermonkey新建一个空白脚本，然后复制代码即可

## HR系统

#### Hrmis

考试系统，你懂的

#### HrExam

OA页面一个考试系统的，基本没有在这里考试

## MSA
#### MSA_job_notice

海事系统营运检验中，在检验信息栏目，增加一个记事添加到微软待办（TODO）以及微软日历中

目前添加的时间是 `2工作日`，`18工作日`，`20工作日`，`3个月`
同时可以用客户端发送邮件提醒

**你得有微软账号**

#### MSA_ShowName
海事系统在点开页面工作时,显示船名及工作控制号.点击船名可以跳转到专有系统
#### MSA_SearchShip
海事系统工作列表中快速搜索船舶, `/` 聚焦到搜索框,输入部分船名,`回车`搜索

#### MSA_ShipParticularInput
修正海事系统内CCS专有系统`船舶参数`保存出错的bug
[点这里安装](https://git.ccswz.top:10000/pub/userscript/raw/master/MSA_ShipParticularInput.js)

#### MSA_ShipInstitutional
海事系统供方船舶监督,显示报告编号以确定年份
[点这里安装](https://git.ccswz.top:10000/pub/userscript/raw/master/MSA_ShipInstitutional.js)

## SSMIS
#### SSMIS_add_todo
SSMIS系统营运检验中，在检验信息栏目，增加一个记事添加到微软待办（TODO）以及微软日历中
目前添加的时间是 `72小时`，`18工作日`，`20工作日`，`3个月`

[点这里安装](https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_add_todo.js)
#### SSMIS_ProductData
SSMIS系统产品数据中，增加按钮，修改证书数据

自定义内容的ID为需要修改的内容ID
一行为一个证书修改,一行中的换行可以用`<br>`代替

[点这里安装](https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_ProductData.user.js)
#### SSMIS_ProductTemplateGener
SSMIS系统产品属性数据中，增加按钮，生成产品导入系统用的文件模板
结合[template-online](https://as.ccswz.top:10000/ppsdata/template-online)使用

[点这里安装](https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_ProductTemplateGener.user.js)
或者配合Quicker的动作使用 [点这里去复制动作](https://getquicker.net/Sharedaction?code=06dd8e9b-a2f3-4eba-a728-08dad3f6b04c)
注册用我的推荐码可以获得会员体验 `405276-1124`
#### SSMIS_ProductReportDetail
SSMISSSMIS 产品报告中产品明细的替换

一行为一个参数修改,一行中的换行可以用`<br>`代替
[点这里安装](https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_ProductReportDetail.user.js)

#### SSMIS_ChecklistChineseTip
SSMIS 营运检验显示checklist的中文提示
    
[点这里安装](https://git.ccswz.top:10000/pub/userscript/raw/master/SSMIS_ChecklistChineseTip.user.js)

