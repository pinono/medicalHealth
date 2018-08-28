import axios from 'axios'

const getDataList = params => {
    return axios('http://baidu.com',{params:params})
}

export{
    getDataList
}


