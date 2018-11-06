<template>
  <div class="addNewFamilyPage">
    <header-top :title="title"></header-top>
    <div class="topNav">
      <div class="navImg">
        <img src="" alt="">
      </div>
      <div class="inputbox">
        <span>家属昵称</span>
        <input type="text" name="" v-model="name" placeholder="请输入家属昵称">
      </div>
      <div class="inputbox">
        <span>家属手机</span>
        <input type="number" name="" v-model="phone" placeholder="请输入家属手机号">
      </div>
      <div class="shareBox">
        <p class="shareTitle">数据分享</p>
        <div class="shareContent">
          <span>数据分享</span>
          <mt-switch class="switch" v-model="switchVal"></mt-switch>
        </div>
      </div>
    </div>
    <div class="familyList">

    </div>
    <div class="footer">
      <span class="addBtn" @click="insertRelative">确定添加</span>
    </div>
    <!--切换角色头像-->
    <div class="popBg">
      <ul class="popList">
        <li>
          <img src="../../assets/images/center/man.png" alt="">
          <p>默认一</p>
        </li>
        <li>
          <img src="../../assets/images/center/woman.png" alt="">
          <p>默认二</p>
        </li>
        <li>
          <img src="../../assets/images/center/oldMan.png" alt="">
          <p>默认三</p>
        </li>
        <li>
          <img src="../../assets/images/center/oldWoman.png" alt="">
          <p>默认四</p>
        </li>
      </ul>
      <div class="closePop">关闭</div>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '@/components/common/header.vue'
  import {addRelative} from '@/api/data/index.js'
  import { Toast } from 'mint-ui';
export default {
  components : {
    HeaderTop
  },
   data(){
       return{
         switchVal : true,
         title: '新增家属',
         iconTypeId:0,//头像代号0,1,2,3
         name:'',//昵称
         phone:'',//手机号
         isShare:1,//0不分享,1分享
       }
   },
  mounted(){

  },
  methods:{
    insertRelative(){

      let obj ={
        iconTypeId:this.iconTypeId,
        isShare:this.isShare,
        name:this.name,
        phone:this.phone
      }
      Toast({
        message: '提示',
        duration: 5000
      });
      /*addRelative(obj).then( res => {
          console.log("........"+res)
      })*/
    },
  }
}
</script>
<style lang="scss">
  .mint-switch-core {
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }
  .mint-switch-core::before {
    width: 96%;
    height: 96%;
    background-color: #d9d9d9;
    border-radius: 100px;
    margin: 2px;
  }
  .mint-switch-core::after {
    width: 58px;
    height: 58px;
    background-color: #fff;
    -webkit-box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, .4);
    box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, .4);
    border-radius: 100%;
  }
  .mint-switch-input:checked + .mint-switch-core::after {
    -webkit-transform: translateX(0.57rem);
    transform: translateX(0.57rem);
  }
  .mint-switch-input:checked + .mint-switch-core {
    border-color: #09BB07;
    background-color: #09BB07;

  }
  .addNewFamilyPage{
    width: 100%;
    height:1334px;
    position: relative;
    padding-top: 80px;
    .topNav{
      width: 100%;
      background: #fff;
      padding-top: 80px;
      border-top: 1px solid  #F2F4F5;
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
        padding-bottom: 2px;
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
        .switch {
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
    .popBg{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      background: rgba(0,0,0,0.2);
      .popList{
        height: 300px;
        width: 750px;
        overflow-x: auto;
        display: flex;
        position: absolute;
        bottom: 0px;
        flex-wrap: nowrap;
        background: #fff;
        li{
          margin: 30px;
          text-align: center;
          img{
            width: 200px;
          }
        }
      }
      .closePop{
        height: 80px;

      }
    }
  }
</style>


