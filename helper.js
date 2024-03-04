// ==UserScript==
// @name        New script msa.gov.cn
// @namespace   Violentmonkey Scripts
// @match       http://cmp.msa.gov.cn/simis-ccs/survey/ssd!ssdApply.do*
// @grant       none
// @version     1.0
// @author      -
// @description 2023/12/29 10:49:34
// ==/UserScript==
(function () {
    //code here
    // 定义div元素
    const div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.position = 'fixed';
    div.style.top = '0';
    div.style.right = '0';

    // 添加div元素到页面
    document.body.appendChild(div);

    // 创建按钮
    const button = document.createElement('button');
    button.textContent = '显示菜单';
    let show=false;

    // 添加按钮到div元素
    div.appendChild(button);

    // 创建菜单
    const menu = document.createElement('ul');
    menu.style.position = 'absolute';
    menu.style.top = '10px';
    menu.style.right = '70px';
    menu.style.backgroundColor = '#000000';

    // 添加菜单项
    menu.innerHTML = `
      <li><a href="#">菜单项1</a></li>
      <li><a href="#">菜单项2</a></li>
    `;

    // 添加菜单到div元素
    div.appendChild(menu);

    // 绑定事件
    button.addEventListener('click', () => {
        // 显示菜单
        // if show is true,display =none

        if(show) {
            menu.style.display = 'none';
        }
        else {
            menu.style.display = 'block';
        }
        show=!show
    });



})();