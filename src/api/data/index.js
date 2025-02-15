
import axios from 'axios'

axios.defaults.withCredentials = true;

// 首页整体信息
const getDataHome = params  => {
    return axios.get(HOST + '/api/v1/data',params);
}

// 训练信息
const getDataTrain = params  => {
    return axios.get(HOST + '/api/v1/tran',{params:params});
}
// 血压信息
const getDataBp = params  => {
    return axios.get(HOST + '/api/v1/bp',{params:params});
}
// 脑氧信息
const getDataRsco2 = params  => {
  return axios.get(HOST + '/api/v1/rsco2',{params:params});
}
// 心率信息
const getDataHr = params  => {
  return axios.get(HOST + '/api/v1/hr',{params:params});
}
// 指氧信息
const getDataSpo2 = params  => {
  return axios.get(HOST + '/api/v1/spo2',{params:params});
}
/*
*慢病管理
*/
//慢病数据列表页
const getDataSick = params => {
  return axios.get(HOST + '/api/v1/paperListOfType/'+params)
}
//得到paperId
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
const addDataPaper = (paperId,params) => {
  return axios.post(HOST + '/api/v1/insertPaper/'+paperId,params)
}
//慢病修改编剧问卷
const updateDataPaper = (paperId,recordId,params) => {
  return axios.post(HOST + '/api/v1/updatePaper/'+paperId+'/'+recordId,params)
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
  return axios.post(HOST + '/api/v1/updateRelative',params)
}
//设备信息
const getDeviceInfo = params => {
  return axios.get(HOST + '/api/v1/deviceInfo',{params:params})
}
//常见问题
const getCommonProblem = params => {
  return axios.get(HOST + '/api/v1/commonProblem')
}
//获得基本信息-表结构
const getBasicStruct = params => {
  return axios.get(HOST + '/api/v1/paperStruct/1')
}
//获得基本信息-数据
const getBasicData = params => {
  return axios.get(HOST + '/api/v1/paperList/1')
}
//编辑基本信息
const updateBasicInfo = params => {
  return axios.post(HOST + '/api/v1/updatePaper/1/0',params)
}
//历史病例-表结构
const getHistoricalStruct = params => {
  return axios.get(HOST + '/api/v1/paperStruct/2')
}
//历史病例-数据
const getHistoricalData = params => {
  return axios.get(HOST + '/api/v1/paperList',{params:params})
}
//编辑历史病例
const updateHistorical = params => {
  return axios.post(HOST + '/api/v1/updatePaper/2/0',params)
}
//脑卒中筛查-表结构
const getStrokeStruct = params => {
  return axios.get(HOST + '/api/v1/paperStruct/3')
}
//脑卒中筛查-数据
const getStrokeData = params => {
  return axios.get(HOST + '/api/v1/paperList',{params:params})
}
//编辑脑卒中筛查
const updateStroke = params => {
  return axios.post(HOST + '/api/v1/updatePaper/3/0',params)
}
//病理报告
const getCaseReport = params => {
  return axios.get(HOST + '/api/v1/blReport',{params:params})
}

//训练报告-训练
const getTranReport = params => {
  return axios.get(HOST + '/api/v1/tranReport',{params:params})
}
//训练报告-血压
const getBpReport = params => {
  return axios.get(HOST + '/api/v1/bpReport',{params:params})
}
//训练报告-脑氧
const getRsco2Report = params => {
  return axios.get(HOST + '/api/v1/rsco2Report',{params:params})
}
//训练报告-心率
const getHrReport = params => {
  return axios.get(HOST + '/api/v1/hrReport',{params:params})
}
//训练报告-指氧
const getspo2Report = params => {
  return axios.get(HOST + '/api/v1/spo2Report',{params:params})
}


export{
    getDataHome,
    getDataTrain,
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
    getDataBp,
    getCommonProblem,
    getBasicStruct,
    getBasicData,
    updateBasicInfo,
    getHistoricalStruct,
    getHistoricalData,
    updateHistorical,
    getStrokeStruct,
    getStrokeData,
    updateStroke,
    getDataRsco2,
    getDataHr,
    getDataSpo2,
    getTranReport,
    getBpReport,
    getRsco2Report,
    getHrReport,
    getspo2Report,
    getCaseReport,
}


