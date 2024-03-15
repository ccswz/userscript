// userscript 常用函数库
// version 0.0.1
// @grant GM_xmlhttpRequest
// @grant GM_openInTab
// @grant GM_setValue
// @grant GM_getValue

// 请求模板文件 doc 服务器地址
// const HOST_DOC = "http://172.28.176.20:8000";
const HOST_DOC = "https://api.ccswz.top:10000";

// MS GRAPH ,TO-DO 及日历服务器地址
//const HOST_TODO = 'https://helper.t0t0.top:60816'
const HOST_TODO = 'https://api.ccswz.top:10000'

// 计算日历日
async function add_day(start,how){
    const url=HOST_TODO+"/cal/day_end?start="+start+"&how="+how
    const res=await get(url)
    if (res.message==='ok') {
       return res.end 
    }
}
// 计算工作日
async function add_workingday(start,how){
    const url=HOST_TODO+"/cal/workingday_end?start="+start+"&how="+how
    const res=await get(url)
    if (res.message==='ok') {
       return res.end 
    }
}



// MS GRAPH 是否已经登录
async function is_login() {
    login_time = GM_getValue('login_time', 0)
    now=new Date().getTime()
    if(now-login_time<=1000*60*60*24){
        return true
    }
    const url = HOST_TODO + "/msgraph/is_login";
    const res = await get(url);
    console.log(res);
    if(res.msg==='login'){
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
    const url = HOST_TODO + "/msgraph/login";
    const res = await get(url);
    console.log(res);
    return res.auth_url
    
}
// MS GRAPH 注销链接
async function get_logout_url() {
        
    const url = HOST_TODO + "/msgraph/logout?json=1";
    const res = await get(url);
    return res.url
}
// MS GRAPH 注销
async function logout() {
    
    GM_setValue('login_time',0)
    //获取登录连接
    const url = await get_logout_url();
    let tabControl = GM_openInTab(url);
    tabControl.onclose =async function(){
        let has_login=await is_login()
        if(has_login===false){
            GM_setValue('login_time',0)
        }
    };
}

// MS GRAPH login
async function login() {
    const url=await get_auth_url()
    let tabControl = GM_openInTab(url);
    tabControl.onclose =async function(){
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
    if(await is_login()===false){
        await login()
    }
    const url = HOST_TODO + "/msgraph/event";
    const res = await post(url, data);
    // console.log(res);
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
    if(await is_login()===false){
        await login()
    }
    const url = HOST_TODO + "/msgraph/task";
    const res = await post(url, data);
    // console.log(res);
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
    // const url = HOST_DOC + "/qmdoc";
    const url = 'https://api.ccswz.top/api/qmdoc';;
    const res = await post(url, data);
    console.log(res);
    window.open(res.url, '_blank');
}

//   get the prameters from csc
async function get_csc_prameters(job_no) {
    const url = "https://api.ccswz.top/api/info/api-csc/jobno/"+job_no;
    const res = await request(url);
    console.log(res);
    return res.response.data[0];
  }

// get
async function get(url){
    const opt = {
        method: 'GET',
    }
    const res= await request(url, opt);
    return res.response
}

// post
async function post(url,data){
    const opt = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        data: JSON.stringify(data)
    }
    const res= await request(url, opt);
    return res.response
}



// GM_xmlhttpRequest
function request(url, opt = {}) {
    Object.assign(opt, {
        url,
        timeout: 10000,
        responseType: 'json'
    })
    return new Promise((resolve, reject) => {
        opt.onerror = opt.ontimeout = reject
        opt.onload = resolve
        GM_xmlhttpRequest(opt)
    }).catch( error => {
        console.log('error', error)
     });
}
