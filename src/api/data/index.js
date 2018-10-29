window.SETDOMAIN = 'cn';
window.HOST = 'http://60.205.180.79:8002'
import axios from 'axios'

axios.defaults.withCredentials = true;

// 首页整体信息
const getDataHome = params  => {
    return axios.get(HOST + '/api/v1/data',params);
}
// 登录
const GoMemLoin = params  => {
    return axios.post(HOST + '/api/v1/login',params);
}
// 训练信息
const getDataTrain = params  => {
    return axios.get(HOST + '/api/v1/tran/8?date=2018-08-17',{params:params});
}

/*慢病管理*/
//慢病病例-数据列表
const getDataSick = params => {
  return axios.get(HOST + 'api/v1/paper-list/1',{params:params})
}

// 医患分享列表
const getShareList = params  => {
    return axios.get(HOST + '/api/v1/articals?currentPage=1&pageSize=2',{params:params});
}
// 医患分享详情
const getShareDetail = params  => {
    return axios.get(HOST + '/api/v1/articals/1',{params:params});
}
export{
    getDataHome,
    getDataTrain,
    getShareList,
    getShareDetail,
    GoMemLoin,
    getDataSick,
}


