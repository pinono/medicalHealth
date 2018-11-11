import axios from 'axios'

axios.defaults.withCredentials = true;



// 登录
const GoMemLogin = params  => {
    return axios.post(HOST + '/api/v1/login',params);
}

// 检查是否预留手机号
const GocheckPhone = params  => {
    return axios.get(HOST + '/api/v1/checkPhone',{params,params});
}
// 注册
const GoRegister = params  => {
    return axios.post(HOST + '/api/v1/register',params);
}
// 更新密码
const GoChangePwd = params  => {
    return axios.post(HOST + '/api/v1/changePwd',params);
}
export {
    GoMemLogin,
    GocheckPhone,
    GoRegister,
    GoChangePwd
}