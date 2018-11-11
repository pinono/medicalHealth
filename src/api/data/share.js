import axios from 'axios'

axios.defaults.withCredentials = true;



// 医患分享-列表
const getShareList = params  => {
    return axios.get(HOST + '/api/v1/articalList',{params:params});
}

// 医患分享-详情
const getShareDetail = params  => {
    return axios.get(HOST + '/api/v1/getArtical?articalId='+ params);
}

// 医患分享-视频列表
const getVideoList = params  => {
    return axios.get(HOST + '/api/v1/videoList');
}
// 医患分享-视频详情
const getVideoDetail = params  => {
    return axios.get(HOST + '/api/v1/getVideo?videoId='+ params);
}
export {
    getShareList,
    getShareDetail,
    getVideoList,
    getVideoDetail
}