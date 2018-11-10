
import axios from 'axios'

axios.defaults.withCredentials = true;

// 训练信息
const getDataTrains = params  => {
    return axios.get(HOST + '/api/v1/trans',{params:params});
}
// 血压信息
const getDataBps = params  => {
    return axios.get(HOST + '/api/v1/bps',{params:params});
}
// 脑氧信息
const getDataRsco2s = params  => {
  return axios.get(HOST + '/api/v1/rsco2s',{params:params});
}
// 心率信息
const getDataHrs = params  => {
  return axios.get(HOST + '/api/v1/hrs',{params:params});
}
// 指氧信息
const getDataSpo2s = params  => {
    return axios.get(HOST + '/api/v1/spo2s',{params:params});
}


export{
    getDataTrains,
    getDataBps,
    getDataRsco2s,
    getDataHrs,
    getDataSpo2s,
}


