<template>
  <div class="addNewFamilyPage">
    <div class="topNav">
      <div class="navImg">
        <img src="" alt="">
      </div>
      <div class="inputbox">
        <span>家属昵称</span>
        <input type="text" name="" placeholder="请输入家属昵称">
      </div>
      <div class="inputbox">
        <span>家属手机</span>
        <input type="text" name="" placeholder="请输入家属手机号">
      </div>
      <div class="shareBox">
        <p class="shareTitle">数据分享</p>
        <div class="shareContent">
          <span>数据分享</span>
          <img src="../../assets/images/common/manageB.png" alt="">
        </div>
      </div>
    </div>
    <div class="familyList">

    </div>
    <div class="footer">
      <span class="addBtn">确定添加</span>
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
  .addNewFamilyPage{
    width: 100%;
    height:100%;
    position: relative;
    .topNav{
      width: 100%;
      background: #fff;
      padding-top: 80px;
      .navImg{
        width: 162px;
        height: 162px;
        background: #ccc;
        border-radius: 4px;
        margin: auto;
        margin-bottom: 28px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .inputbox{
        width: 100%;
        height: 110px;
        line-height: 110px;
        display: flex;
        border-bottom: 1px solid  #F2F4F5;
        padding-bottom: 1px;
        span{
          text-align: center;
          font-size: 34px;
          color: #333333;
          margin: 0px 26px;
        }
        input{
          font-size: 34px;
          color: #333333;
          flex: 1;
        }
      }
      .shareBox{
        width: 100%;
        position: relative;
        .shareTitle{
          height: 92px;
          line-height: 92px;
          background: #F2F4F5;
          padding: 0 26px;
          font-size: 30px;
          color: #777777;
        }
      .shareContent{
        height: 98px;
        line-height: 98px;
        padding: 0 26px;
        font-size: 34px;
        color: #333333;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
          width: 102px;
          height: 62px;
        }
      }
      }
    }
    .footer{
      width: 100%;
      text-align: center;
      position: fixed;
      bottom: 0px;
      left: 0px;
      padding-bottom: 200px;
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


