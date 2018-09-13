<template>
  <div class="showProblem_page">
    <header-top :title="title"></header-top>
    <!--表单组件-->
    <div class="proList">
      <div class="listTitle" @click="titleChecked(1)">
        <span>1.中国脑卒中发病情况和治疗现状？</span>
        <img v-if="arrowsIcon != 1" src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        <img v-if="arrowsIcon==1" :class="arrowsIcon==1?'bottomImg':''" src="../../assets/images/center/arrowsBottom.png" alt="">
      </div>
      <div class="listContent" v-if="arrowsIcon==1">
        国脑卒中具有高发病率、高致残率、高死亡率和高复发率的特点。在我国，卒中正以每年8.7%的速度快速增长，每年新增卒中患者280万，总数超过750万人。
      </div>
      <div class="listTitle" @click="titleChecked(2)">
        <span>2.设备时间显示不对？</span>
        <img v-if="arrowsIcon != 2" src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        <img v-if="arrowsIcon==2" :class="arrowsIcon==2?'bottomImg':''" src="../../assets/images/center/arrowsBottom.png" alt="">
      </div>
      <div class="listContent" v-if="arrowsIcon==2">
        国脑卒中具有高发病率、高致残率、高死亡率和高复发率的特点。在我国，卒中正以每年8.7%的速度快速增长，每年
      </div>
      <div class="listTitle" @click="titleChecked(3)">
        <span>3.连接不上设备怎么办？</span>
        <img v-if="arrowsIcon != 3" src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        <img v-if="arrowsIcon==3" :class="arrowsIcon==3?'bottomImg':''" src="../../assets/images/center/arrowsBottom.png" alt="">
      </div>
      <div class="listContent" v-if="arrowsIcon==3">
        国脑卒中具有高发病率、高致残率、高死亡率和高复发率的特点。在我国，卒中正以每年8.7%的速度快速增长，每年
      </div>
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
      title: '常见问题'
    }
  },
  mounted(){

  },
  methods:{
    titleChecked(flag){
      this.arrowsIcon=flag;
    }
  },

}
</script>
<style lang="scss" scoped>
  .showProblem_page{
    width: 100%;
    height: 100%;
    background: #fff;
    padding-top: 80px;
    .proList{
      .listTitle{
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 110px;
      line-height: 108px;
      border-bottom: 1px solid #eee;
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
      div:nth-child(1){
        border-top: 1px solid #eee;
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
  }

</style>


