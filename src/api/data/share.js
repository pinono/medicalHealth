import axios from 'axios'

axios.defaults.withCredentials = true;



// 医患分享列表
const getShareList = params  => {
    return axios.get(HOST + '/api/v1/articals',{params:params});
}

// 医患分享详情
const getShareDetail = params  => {
    return axios.get(HOST + '/api/v1/articals/1',{params:params});
}


export {
    getShareList,
    getShareDetail,
}