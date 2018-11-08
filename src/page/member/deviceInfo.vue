<template>
  <div class="deviceInfoPage">
    <header-top :title="title"></header-top>
    <div class="deviceHead">
      <img src="../../assets/images/center/deviceImg.png" alt="">
    </div>
    <div class="deviceContent">
      <ul>
        <li class="deviceItem">
          <span>设备型号</span>
          <span>{{device.deviceType}}</span>
        </li>
        <li class="deviceItem">
          <span>设备SN号</span>
          <span>{{device.deviceSN}}</span>
        </li>
        <li class="deviceItem">
          <span>固件版本</span>
          <span>{{device.softwareVersion}}</span>
        </li>
        <li class="deviceItem">
          <span>IMEI</span>
          <span>{{device.deviceIMEI}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '@/components/common/header.vue'
  import {getDeviceInfo} from '@/api/data/index.js' //接口
export default {
  components : {
    HeaderTop
  },
  data(){
    return {
      title: '设备信息',
      device:{},
    }
  },
  mounted(){
      this.getDeviceInfoFn();
  },
  methods:{
    getDeviceInfoFn(){
      getDeviceInfo().then( res => {
        console.log('设备信息=',res)
        this.device=res.data.result.device;
      })
    },
  }

}
</script>

<style lang="scss" scoped>
  .deviceInfoPage{
    width: 100%;
    height:100%;
    position: relative;
    padding-top: 80px;
    .deviceHead{
      width: 100%;
      height: 500px;
      background: #2B8CFF;
      align-items: center;
      display: flex;
      justify-content: center;
      img{
        width: 315px;
        height: 315px;
      }
    }
    .deviceContent{
      .deviceItem{
        width: 100%;
        height: 108px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 25px;
        font-size: 34px;
        color: #333333;
        border: 1px solid #eee;
      }
    }
  }
</style>


