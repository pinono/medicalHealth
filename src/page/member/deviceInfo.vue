<template>
  <div class="deviceInfoPage">
    <div class="deviceHead">
      <img src="../../assets/images/center/bingliTapIcon.png" alt="">
    </div>
    <div class="deviceContent">
      <ul>
        <li class="deviceItem">
          <span>设备型号</span>
          <span>IPC-906</span>
        </li>
        <li class="deviceItem">
          <span>设备SN号</span>
          <span>123456789</span>
        </li>
        <li class="deviceItem">
          <span>固件版本</span>
          <span>11.0</span>
        </li>
        <li class="deviceItem">
          <span>IMEI</span>
          <span>1234567890</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
   data(){
       return{}
   },
}
</script>

<style lang="scss" scoped>
  .deviceInfoPage{
    width: 100%;
    height:100%;
    position: relative;
    .deviceHead{
      width: 100%;
      height: 500px;
      background: #2B8CFF;
      align-items: center;
      display: flex;
      justify-content: center;
      img{
        width: 221px;
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


