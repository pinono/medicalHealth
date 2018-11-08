<template>
  <div class="caseReportPage">
    <header-top :title="title"></header-top>
    <ul class="caseReportList">
      <li class="caseReportItem">
        <h2>基本信息</h2>
        <div class="contentInfo">
          <p>
            <span>性别：</span>
            <span>某某某</span>
          </p>
          <p>
            <span>姓名：</span>
            <span>男</span>
          </p>
          <p>
            <span>出生日期：</span>
            <span>1988.07.31</span>
          </p>
        </div>
      </li>
      <li class="caseReportItem">
        <h2>既往史</h2>
        <div class="contentInfo">
          <p>
            <span>既往史：</span>
            <span>高热</span>
          </p>
          <p>
            <span>家族史：</span>
            <span>有</span>
          </p>
          <p>
            <span>药物过敏：</span>
            <span>有</span>
          </p>
        </div>
      </li>
      <li class="caseReportItem">
        <h2>国家脑卒中筛查</h2>
        <div class="contentInfo">
          <p>
            <span>既往史：</span>
            <span>高热</span>
          </p>
          <p>
            <span>家族史：</span>
            <span>有</span>
          </p>
          <p>
            <span>药物过敏：</span>
            <span>有</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import HeaderTop from '@/components/common/header.vue'
  import {getBasicData,getHistoricalData,getStrokeData} from '@/api/data/index.js'
export default {
  components : {
    HeaderTop
  },
  data(){
    return {
      title: '病历报告'
    }
  },
  mounted(){
    this.getDateList();
  },
  methods:{
    getDateList(){
      getBasicData().then( res => {
        console.log('基本信息='+res)
      });
      getHistoricalData().then( res => {
        console.log('患病历史='+res)
      });
      getStrokeData().then( res => {
        console.log('脑卒中筛查='+res)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .caseReportPage{
    width: 100%;
    height: auto;
    padding-top: 80px;
    .caseReportList{
      border-top: 2px solid #eee;
      .caseReportItem{
        width: 100%;
        height: 258px;
        background: #fff;
        padding: 0px 20px;
        margin-bottom: 10px;
        h2{
          font-size: 34px;
          color: #000;
          padding: 20px 0px;
        }
        .contentInfo{
          color: #777777;
          line-height: 50px;
          p{
            font-size: 30px;
          }
        }
      }
    }
  }
</style>


