// ==UserScript==
// @name        New script - teacher.com.cn
// @namespace   Violentmonkey Scripts
// @match       http://pn202333004.stu.teacher.com.cn/course/intoSelectCourseVideo*
// @grant       none
// @version     1.0
// @author      -
// @description 2023/5/2 23:48:45
// ==/UserScript==

(function(){
    //code here

    //设置定时器，每隔1秒执行一次
    setInterval(function(){
        //判断player是否为undefined，如果为undefined则说明视频未加载完成，不执行后续代码
        if(typeof player == "undefined"){
            return;
        }
        //判断视频是否播放完毕，如果播放完毕则播放下一个视频
        if(player.getDuration() == player.getPosition()){
            //获取li标签,class为type_1 并且是不isStudy的元素
            var li = $("li.type_1:not(.isStudy)");
            //判断li是否存在，如果不存在则说明视频已经全部播放完毕，不执行后续代码
            if(li.length == 0){
                return;
            }
            //点击下一个视频
            li.eq(0).click();
        }
        //判断视频是否暂停，如果暂停则播放视频
        if(player.getVideoState() =='pause'){
            player.setVolume(0);
            player.play();
            // $("#replaybtn").eq(0).click();
        }



    },1000);





})();