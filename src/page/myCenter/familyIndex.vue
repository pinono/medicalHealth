<template>
  <div class="addFamilyPage">
    <div class="topNav">
      <img src="" alt="">
      <p>与家人试试分享病情</p>
    </div>
    <div class="familyList">
      <ul>
        <li>
          <img class="listImg" src="../../assets/images/common/manageB.png" alt="">
          <div class="listInfo">
            <p>某某某</p>
            <p>13718345029</p>
          </div>
          <img class="listIcon" src="../../assets/images/manage/addmanageItem.png" alt="">
        </li>
        <li>
          <img class="listImg" src="../../assets/images/common/manageB.png" alt="">
          <div class="listInfo">
            <p>某某某</p>
            <p>13718345029</p>
          </div>
          <img class="listIcon" src="../../assets/images/manage/addmanageItem.png" alt="">
        </li>
        <li>
          <img class="listImg" src="../../assets/images/common/manageB.png" alt="">
          <div class="listInfo">
            <p>某某某</p>
            <p>13718345029</p>
          </div>
          <img class="listIcon" src="../../assets/images/manage/addmanageItem.png" alt="">
        </li>
        <li>
          <img class="listImg" src="../../assets/images/common/manageB.png" alt="">
          <div class="listInfo">
            <p>某某某</p>
            <p>13718345029</p>
          </div>
          <img class="listIcon" src="../../assets/images/manage/addmanageItem.png" alt="">
        </li>
        <li>
          <img class="listImg" src="../../assets/images/common/manageB.png" alt="">
          <div class="listInfo">
            <p>某某某</p>
            <p>13718345029</p>
          </div>
          <img class="listIcon" src="../../assets/images/manage/addmanageItem.png" alt="">
        </li>
        <li>
          <img class="listImg" src="../../assets/images/common/manageB.png" alt="">
          <div class="listInfo">
            <p>某某某</p>
            <p>13718345029</p>
          </div>
          <img class="listIcon" src="../../assets/images/manage/addmanageItem.png" alt="">
        </li>
        <li>
          <img class="listImg" src="../../assets/images/common/manageB.png" alt="">
          <div class="listInfo">
            <p>某某某</p>
            <p>13718345029</p>
          </div>
          <img class="listIcon" src="../../assets/images/manage/addmanageItem.png" alt="">
        </li>
        <li>
          <img class="listImg" src="../../assets/images/common/manageB.png" alt="">
          <div class="listInfo">
            <p>某某某</p>
            <p>13718345029</p>
          </div>
          <img class="listIcon" src="../../assets/images/manage/addmanageItem.png" alt="">
        </li>
        <li>
          <img class="listImg" src="../../assets/images/common/manageB.png" alt="">
          <div class="listInfo">
            <p>某某某</p>
            <p>13718345029</p>
          </div>
          <img class="listIcon" src="../../assets/images/manage/addmanageItem.png" alt="">
        </li>

      </ul>
    </div>
    <div class="footer">
      <span class="addBtn">新增家属</span>
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
  .addFamilyPage{
    width: 100%;
    height:auto;
    position: relative;
    .topNav{
      width: 100%;
      height: 400px;
      background: #F2F4F5;
      position: fixed;
      img{
        width: 100%;
        height: 100%;
      }
      p{
        width: 100%;
        position: absolute;
        top: 300px;
        margin: auto;
        text-align: center;
        font-size: 30px;
        color: #777777;
      }
    }
    .familyList{
      width: 100%;
      padding-top: 480px;
      padding-bottom: 220px;
      background: #fff;
      li{
        width: 100%;
        height: 162px;
        padding: 0px 25px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .listImg{
          width: 162px;
          height: 162px;
          margin-right: 20px;
        }
        .listInfo{
          flex: 1;
          line-height: 50px;
          align-items: center;
          p{
            font-size: 34px;
            color: #333333;
          }
        }
        .listIcon{
          width: 60px;
          height: 60px;
          vertical-align: middle;
        }
      }
    }
    .footer{
      width: 100%;
      background: #fff;
      height: 220px;
      line-height: 230px;
      text-align: center;
      position: fixed;
      bottom: 0px;
      left: 0px;
      span{
        display: inline-block;
        width: 700px;
        height: 88px;
        line-height: 88px;
        background: #2B8CFF;
        border-radius: 4px;
        text-align: center;
        font-size: 34px;
        color: #FFFFFF;
      }
    }
  }
</style>


