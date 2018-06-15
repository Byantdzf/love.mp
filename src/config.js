
/* ========================================================
                        小程序配置文件
======================================================== */
// 域名
 var host = 'https://party.ufutx.com/api'
// var host = 'http://party.hankin.com/api'
export const service = {
    // 登录接口
    login: `${host}/login/wechat`,
    // 微信注册接口
    register: `${host}/wechat/register`,
    // 注册发短信接口
    send_register: `${host}/sms/register`,
    //用户
    user: `${host}/user`,
    //解密
    infor: `${host}/wechat/infor`,
    //创建party
    parties: `${host}/parties`,
    // 模板
    templates: `${host}/templates`,
    // 重发接口
    reset: `${host}/reset/parties`,
    // 假装有收藏接口 POST
    collect: `${host}/bookmall/list`,
    //skip
    skip: `${host}/skip/user`,
    //register_infor
    register_infor: `${host}/register/infor`,
    //动态登录
    account: `${host}/account/uid`,
    // 主域
}

export default {
    service
}
