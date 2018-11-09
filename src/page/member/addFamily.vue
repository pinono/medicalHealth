<template>
  <div class="addNewFamilyPage">
    <header-top :title="title"></header-top>
    <div class="topNav">
      <div class="navImg" @click="openImgPop">
        <img :src='navImgSrc' alt="">
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
      <span class="addBtn" @click="insertRelative">确定{{saveBtnText}}</span>
    </div>
    <!--切换角色头像-->
    <div class="popBg" v-show="isPopBg"  @click="ChoosePicture()">
    </div>
    <ul class="popList" :style="{bottom:popBottom+'px'}">
      <li @click="ChoosePicture('0')">
        <img src="../../assets/images/center/man.png" alt="">
        <p>默认一</p>
      </li>
      <li @click="ChoosePicture('1')">
        <img src="../../assets/images/center/woman.png" alt="">
        <p>默认二</p>
      </li>
      <li @click="ChoosePicture('2')">
        <img src="../../assets/images/center/oldMan.png" alt="">
        <p>默认三</p>
      </li>
      <li @click="ChoosePicture('3')">
        <img src="../../assets/images/center/oldWoman.png" alt="">
        <p>默认四</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import HeaderTop from '@/components/common/header.vue'
  import {addRelative,updateRelative} from '@/api/data/index.js'
  import { Toast } from 'mint-ui';
export default {
  components : {
    HeaderTop
  },
   data(){
       return{
         title: '新增家属',
         switchVal : true,
         iconTypeId:0,//头像代号0男人,1女人,2爷爷,3奶奶
         name:'',//昵称
         phone:'',//手机号
         popBottom : -150,
         isPopBg : false,
         navImgSrc : require('../../assets/images/center/man.png'),
         saveBtnText:'添加',
       }
   },
  mounted(){
    if(this.$route.query.relativeId != undefined){//编辑
      this.switchVal = this.$route.query.isShare==1? true:false;
      this.name = this.$route.query.name;
      this.phone = this.$route.query.phone;
      this.ChoosePicture(this.$route.query.iconTypeId);
      this.saveBtnText='编辑';
      this.title='编辑家属'
    }
  },
  methods:{
      //选择头像
    openImgPop(){
      this.isPopBg=true;
      this.popBottom=0;
    },
    ChoosePicture(imgFlag){
      if(imgFlag!=undefined){
        this.iconTypeId=imgFlag;
      }
      this.isPopBg=false;
      this.popBottom=-150;
      switch (imgFlag){
        case '0' : this.navImgSrc = require('../../assets/images/center/man.png');
          break;
        case '1' : this.navImgSrc = require('../../assets/images/center/woman.png');
          break;
        case '2' : this.navImgSrc = require('../../assets/images/center/oldMan.png');
          break;
        case '3' : this.navImgSrc = require('../../assets/images/center/oldWoman.png');
          break;
      }
    },
      //新增亲属
    insertRelative(){
      //固话
      var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
      //手机
      var isMob = /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
      if(this.name==''){
        Toast({
          message: '请输入家属昵称',
          duration: 2000
        });
      }else if(!isMob.test(this.phone)){
        Toast({
          message: '手机号格式不正确',
          duration: 2000
        });
      }else {
          console.log(this.switchVal)
        let obj ={
          iconTypeId:parseInt(this.iconTypeId),
          isShare:this.switchVal ? 1:0,
          name:this.name,
          phone:this.phone
        }
        console.log(obj)
        if(this.$route.query.relativeId != undefined){
          obj.relativeId=parseInt(this.$route.query.relativeId);
          updateRelative(obj).then( res => {//新增亲属
            console.log("添加亲属："+res)
          })
        }else{
          addRelative(obj).then( res => {//新增亲属
            console.log("添加亲属："+res)
          })
        }
        
      }
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
    }
    .popList{
      height: 300px;
      width: 750px;
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      position: fixed;
      flex-wrap: nowrap;
      background: #fff;
      bottom: 0px;
      transition: all 2s;
      -webkit-transition: all 500ms; /*兼容webkit内核*/
      li{
        margin: 30px;
        text-align: center;
        img{
          width: 200px;
        }
      }
    }
  }
</style>


