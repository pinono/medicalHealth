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
const getDataBps = params  => {
    return axios.get(HOST + '/api/v1/bps',{params:params});
}
/*慢病管理*/
//慢病数据列表页
const getDataSick = params => {
  return axios.get(HOST + '/api/v1/paperListOfType/'+params)
}
//
const getPaperModel = params => {
  return axios.get(HOST + '/api/v1/paperModelList/'+params)
}
//慢病问卷数据结构
const getPaperStruct = params => {
  return axios.get(HOST + '/api/v1/paperStruct/'+params)
}
//慢病问卷具体详细记录
const getPaperList = params => {
  return axios.get(HOST + '/api/v1/paperList',{params:params})
}
//慢病保存问卷
const addDataPaper = params => {
  return axios.post(HOST + '/api/v1/InsertPaper/:paperId',{params:params})
}
//慢病修改编剧问卷
const updateDataPaper = params => {
  return axios.post(HOST + 'api/v1/updatePaper/:paperId/:recordId',{params:params})
}

/*
* 个人中心
* */
//获取亲属列表
const getRelativeList = params => {
  return axios.get(HOST + '/api/v1/relativeList',{params:params})
}
//新增亲属
const addRelative = params => {
  return axios.post(HOST + '/api/v1/insertRelative',params)
}
//编辑亲属
const updateRelative = params => {
  return axios.post(HOST + '/api/v1/updateRelatives',params)
}
//设备信息
const getDeviceInfo = params => {
  return axios.get(HOST + '/api/v1/deviceInfo',{params:params})
}
//常见问题
const getCommonProblem = params => {
  return axios.get(HOST + '/api/v1/commonProblem')
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
    getPaperModel,
    getPaperStruct,
    getPaperList,
    addDataPaper,
    updateDataPaper,
    getRelativeList,
    addRelative,
    updateRelative,
    getDeviceInfo,
    getDataBps,
    getCommonProblem,
}


