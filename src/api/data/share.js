import axios from 'axios'

axios.defaults.withCredentials = true;



// 医患分享列表
const getShareList = params  => {
    return axios.get(HOST + '/api/v1/articals',{params:params});
}

// 医患分享详情
const getShareDetail = params  => {
    return axios.get(HOST + '/api/v1/articals/'+ params);
}

// 医患分享视频列表
const getVideoList = params  => {
    return axios.get(HOST + '/api/v1/videos');
}
export {
    getShareList,
    getShareDetail,
    getVideoList,
}