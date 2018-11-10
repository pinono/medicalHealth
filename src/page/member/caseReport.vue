<template>
  <div class="caseReportPage">
    <header-top :title="title"></header-top>
    <ul class="caseReportList">
      <li class="caseReportItem">
        <h2>基本信息</h2>
        <div class="contentInfo">
          <p v-for="item in baseInfo">
            <span>{{item.fieldName}}：</span>
            <span>{{item.value}}</span>
          </p>
        </div>
      </li>
      <li class="caseReportItem">
        <h2>既往史</h2>
        <div class="contentInfo">
          <p v-for="item in historyInfo">
            <span>{{item.fieldName}}：</span>
            <span>{{item.value}}</span>
          </p>
        </div>
      </li>
      <li class="caseReportItem">
        <h2>国家脑卒中筛查</h2>
        <div class="contentInfo">
          <p v-for="item in BrainInfo">
            <span>{{item.fieldName}}：</span>
            <span>{{item.value}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import HeaderTop from '@/components/common/header.vue'
  import {getCaseReport} from '@/api/data/index.js'
export default {
  components : {
    HeaderTop
  },
  data(){
    return {
      title: '病历报告',
      baseInfo :[],
      historyInfo :[],
      BrainInfo :[],
    }
  },
  mounted(){
    this.getDateList();
  },
  methods:{
    getDateList(){
      getCaseReport().then( res => {
        this.baseInfo=res.data.result.jbxx;
        this.historyInfo=res.data.result.lsbl;
        this.BrainInfo=res.data.result.nzzsc;
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
        height: auto;
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


