window.SETDOMAIN = 'cn';
window.HOST = 'http://60.205.180.79:8080/ripc-phone'
import axios from 'axios'

// 首页整体信息
const getDataHome = params  => {
    return axios.get(HOST + '/api/v1/data/8',params);
}
// 首页训练信息
const getDataTrain = params  => {
    return axios.get(HOST + '/api/v1/tran/8?date=2018-08-17',{params:params});
}
export{
    getDataHome,
    getDataTrain
}


