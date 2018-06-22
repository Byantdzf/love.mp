
/* ========================================================
                        小程序配置文件
======================================================== */
// 域名
 var host = 'https://love.ufutx.com/api'
// var host = 'http://love.hankin.com/api'
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
    //VIP
    vip: `${host}/vip`,
    //关注某人
    follow: `${host}/follow/users`,
    //好友信息
    users:`${host}/users`,
    //加好友问题
    questions:`${host}/friend/questions`,
    //添加好友
    addFriend:`${host}/friend/users`,
    //申请微信
    wechat:`${host}/show/wechat`,
    //微信好友
    wechat_user:`${host}/wechat/users`,
    //举报好友
    complaint:`${host}/complaint/users`,
    //礼物
    gifts: `${host}/gifts`,
    //我的关注
    followings:`${host}/followings`,
    //充值积分
    rechargescore:`${host}/recharge/score`,
    //我的粉丝
    followers:`${host}/followers`,
    //支付回调
    orderpay:`${host}/mark/order/pay`,
    //我的好友
    friends: `${host}/friends`,
    //送礼物
    sendgift: `${host}/send/users`,
    //单身
    courtship: `${host}/courtship`,
    //文章列表
    articles: `${host}/articles`,
    //文章信息
    article: `${host}/article`,
    //介绍人
    marriage  : `${host}/marriage`,
    //附近单身
    near_single  : `${host}/near/single`,
    //解密手机号
    infor: `${host}/wechat/mobile`,
    //创建party
    parties: `${host}/parties`,
    //vip等级列表
    ranks: `${host}/ranks`,
    //我的福分 兑换礼物列表
    goodses: `${host}/goodses`,
    //我的福分 记录
    scorehistory: `${host}/score/histories`,
    //兑换商品
    exchange: `${host}/exchange/goods`,
    //替人支付
    charge: `${host}/member/charge`,
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
