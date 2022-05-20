// userscript 常用函数库
// @grant GM_xmlhttpRequest
// @grant GM_openInTab
// @grant GM_setValue
// @grant GM_getValue

// 请求模板文件 doc 服务器地址
const HOST_DOC = "http://172.28.176.20:8000";

// MS GRAPH ,TO-DO 及日历服务器地址
const HOST_TODO = 'https://helper.t0t0.top:60816'


// MS GRAPH 是否已经登录
async function is_login() {
    login_time = GM_getValue('login_time', 0)
    now=new Date().getTime()
    if(now-login_time<=1000*60*60*24){
        return true
    }

    const url = HOST_TODO + "msgraph/is_login";
    const opt = {
        method: 'GET',
    }
    const res = await request(url, opt);
    console.log(res);
    if(res.msg==='LOGIN'){
        GM_setValue('login_time',now)
        return true
    }
    return false
}
// MS GRAPH 登录链接
async function get_auth_url() {
    const login= await is_login()
    if(login===true){
        return true
    }
    //获取登录连接
    const url = HOST_TODO + "msgraph/login";
    const opt = {
        method: 'GET',
    }
    const res = await request(url, opt);
    console.log(res);
    return res.auth_url
    
}

// MS GRAPH login
async function login() {
    const url=await get_auth_url()
    let tabControl = GM_openInTab(url);
    tabControl.onclose = function(){
        let has_login=await is_login()
        if(has_login===true){
            GM_setValue('login_time',new Date().getTime())
        }

    };
    
}


//添加日历事件
// {
//     "subject": "test0428",
//     "start": "2022-05-30T08:00",
//     "end": "2022-05-30T19:00",
//     "body": "this is test body",
//     "reminderbefore": 1440
// }
async function add_event(data) {
    const url = HOST_TODO + "msgraph/event";
    const opt = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        data: JSON.stringify(data)
    }
    const res = await request(url, opt);
    console.log(res);
    return res
}


//添加TODO事件
// {
//     "title": "title",
//     "body": "body test",
//     "reminderDateTime": "2022-3-14T12:01",
//     "dueDateTime": "2022-3-15T12:01"
// }
async function add_todo(data) {
    const url = HOST_TODO + "msgraph/event";
    const opt = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        data: JSON.stringify(data)
    }
    const res = await request(url, opt);
    console.log(res);
    return res
}




// 请求模板文件 doc
// {
//     "name": "用户签收单",
//     "ctx": {
//         'job_no': job_no,
//         "date": date_str,
//         "ship_name": ship_name,
//         "client": client,
//         "certs": certs
//     }
// }
async function create_doc(data) {
    const url = HOST_DOC + "/doc";
    const opt = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        data: JSON.stringify(data)
    }
    const res = await request(url, opt);
    console.log(res);
    window.open(res.response.url, '_blank');
}




// GM_xmlhttpRequest
function request(url, opt = {}) {
    Object.assign(opt, {
        url,
        timeout: 2000,
        responseType: 'json'
    })
    return new Promise((resolve, reject) => {
        opt.onerror = opt.ontimeout = reject
        opt.onload = resolve
        GM_xmlhttpRequest(opt)
    })
}