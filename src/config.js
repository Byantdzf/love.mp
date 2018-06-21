
/* ========================================================
                        小程序配置文件
======================================================== */
// 域名
//  var host = 'https://love.ufutx.com/api'
var host = 'http://love.hankin.com/api'
export const service = {
    // 登录接口
    login: `${host}/login/wechat`,
    // 微信注册接口
    register: `${host}/wechat/register`,
    // 注册发短信接口
    send_register: `${host}/sms/register`,
    // 行业
    industry: `${host}/industry/json`,
    //薪资
    salaries: `${host}/salaries`,
    //用户
    user: `${host}/user`,
    //VIP信息
    profile: `${host}/profile`,
    //好友信息
    users:`${host}/users`,
    //单身
    courtship: `${host}/courtship`,
    //文章列表
    articles: `${host}/articles`,
    //介绍人
    marriage  : `${host}/marriage`,
    //附近单身
    near_single  : `${host}/near/single`,
    //解密手机号
    infor: `${host}/wechat/mobile`,
    //创建party
    parties: `${host}/parties`,
    // 模板
    templates: `${host}/templates`,
    // 重发接口
    reset: `${host}/reset/parties`,
    // 图书上传
    image_upload: `${host}/uploads`,
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
