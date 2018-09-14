<template>
  <div class="showProblem_page">
    <header-top :title="title"></header-top>
    <div class="proTapbar">
      <p @click="checkedTapFn(1)" :class="[tapStatus==1? 'checkedTap':'']">医护随访</p>
      <p @click="checkedTapFn(2)" :class="[tapStatus==2? 'checkedTap':'']">设备问题</p>
    </div>
    <!--表单组件-->
    <div class="proList">
      <div class="proItem">
        <div class="listTitle" @click="titleChecked(1)">
          <span>2018年08月15日 11:30:06</span>
          <img v-if="arrowsIcon != 1" src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          <img v-if="arrowsIcon==1" :class="arrowsIcon==1?'bottomImg':''" src="../../assets/images/center/arrowsBottom.png" alt="">
        </div>
        <div class="listNav">客服</div>
        <div class="listContent" v-if="arrowsIcon==1">
          国脑卒中具有高发病率、高致残率、高死亡率和高复发率的特点。在我国，卒中正以每年8.7%的速度快速增长，每年新增卒中患者280万，总数超过750万人。
        </div>
      </div>
      <div class="proItem">
        <div class="listTitle" @click="titleChecked(2)">
          <span>2018年08月15日 11:30:06</span>
          <img v-if="arrowsIcon != 2" src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          <img v-if="arrowsIcon==2" :class="arrowsIcon==2?'bottomImg':''" src="../../assets/images/center/arrowsBottom.png" alt="">
        </div>
        <div class="listNav">本人</div>
        <div class="listContent" v-if="arrowsIcon==2">
          国脑卒中具有高发病率、高致残率、高死亡率和高复发率的特点。在我国，卒中正以每年8.7%的速度快速增长，每年
        </div>
      </div>
      <div class="proItem">
        <div class="listTitle" @click="titleChecked(3)">
          <span>2018年08月15日 11:30:06</span>
          <img v-if="arrowsIcon != 3" src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          <img v-if="arrowsIcon==3" :class="arrowsIcon==3?'bottomImg':''" src="../../assets/images/center/arrowsBottom.png" alt="">
        </div>
        <div class="listNav">亲属</div>
        <div class="listContent" v-if="arrowsIcon==3">
          国脑卒中具有高发病率、高致残率、高死亡率和高复发率的特点。在我国，卒中正以每年8.7%的速度快速增长，每年
        </div>
      </div>
    </div>
    <!--添加事件-->
    <div class="addItemBtn" @click="addManItemFn">
      <img src="../../assets/images/manage/addmanageItem.png" alt="">
    </div>
  </div>
</template>
<script>
  import HeaderTop from '@/components/common/header.vue'
export default {
  components : {
    HeaderTop
  },
  data(){
    return {
      arrowsIcon : 0,
      tapStatus : 1,
      title: '随访信息'
    }
  },
  mounted(){

  },
  methods:{
    //tap切换
    checkedTapFn(tapFlag){
        this.tapStatus=tapFlag;
    },
    titleChecked(flag){
      this.arrowsIcon=flag;
    },
    //添加管理事件
    addManItemFn(){
      this.$router.push({path: 'addFollowUp'})
    },
  },

}
</script>
<style lang="scss" scoped>
  .showProblem_page{
    width: 100%;
    height: 100%;
    background: #fff;
    padding-top: 80px;
    .proTapbar{
      height: 88px;
      line-height: 88px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      p{
        width: 186px;
        text-align: center;
        font-size: 32px;
        color: #333;
      }
      .checkedTap{
        font-size: 32px;
        color: #2B8CFF;
        border-bottom: 4px solid #2B8CFF;
      }
    }
    .proList{
      .listTitle{
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 110px;
      line-height: 108px;
      padding: 0 25px;
      padding-bottom: 1px;
      font-family: PingFangSC-Regular;
      font-size: 34px;
      span{
        color: #333333;
        text-align: left;
        margin-right: 30px;
        flex: 1;
      }
      img{
        width: 14px;
        height: 25px;
        vertical-align: middle;
        margin-top: 44px;
        margin-left: 50px;
      }
        .bottomImg{
          width: 25px;
          height: 14px;
        }
    }
      .listNav{
        height: 60px;
        line-height: 60px;
        font-size: 34px;
        color: #888;
        padding: 0 25px;
        border-bottom: 1px solid #eee;
      }
      .listContent{
        width: 100%;
        padding: 20px 45px;
        font-size: 30px;
        color: #888;
        line-height: 50px;
        background: #F2F4F5;
      }
  }
    .addItemBtn{
      width: 120px;
      height: 120px;
      text-align: center;
      background: rgba(43,140,255,0.1);
      border-radius: 60px;
      position: fixed;
      bottom: 168px;
      right: 34px;
      z-index: 5;
      img{
        width: 100px;
        height: 100px;
        margin-top: 10px;
      }
    }
  }

</style>


