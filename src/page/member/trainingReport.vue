<template>
  <div class="trainReport">
    <header-top :title="title"></header-top>
      <section class="item">
        <div class="title">
          <p>总体训练报告</p>
          <p>上一次训练时间：{{tranReportObj.lastTranTime}}</p>
        </div>
        <ul class="navCut">
          <li @click="checkNavFn(1,1)" :class="[ checkNav01==1 ? 'checkLi':'']">近1个月</li>
          <li @click="checkNavFn(3,1)" :class="[ checkNav01==3 ? 'checkLi':'']">近3个月</li>
          <li @click="checkNavFn(6,1)" :class="[ checkNav01==6 ? 'checkLi':'']">近6个月</li>
          <li @click="checkNavFn(12,1)" :class="[ checkNav01==12 ? 'checkLi':'']">近1年</li>
        </ul>
        <div class="myChart" id="myChart1">

        </div>
      </section>
      <section class="item" v-for="">
        <div class="title">
          <p>血压报告</p>
        </div>
        <ul class="navCut">
          <li @click="checkNavFn(1,2)" :class="[ checkNav02==1 ? 'checkLi':'']">近1个月</li>
          <li @click="checkNavFn(3,2)" :class="[ checkNav02==3 ? 'checkLi':'']">近3个月</li>
          <li @click="checkNavFn(6,2)" :class="[ checkNav02==6 ? 'checkLi':'']">近6个月</li>
          <li @click="checkNavFn(12,2)" :class="[ checkNav02==12 ? 'checkLi':'']">近1年</li>
        </ul>
        <div class="myChart" id="myChart2">

        </div>
      </section>
    <section class="item" v-for="">
      <div class="title">
        <p>脑氧报告</p>
      </div>
      <ul class="navCut">
        <li @click="checkNavFn(1,3)" :class="[ checkNav03==1 ? 'checkLi':'']">近1个月</li>
        <li @click="checkNavFn(3,3)" :class="[ checkNav03==3 ? 'checkLi':'']">近3个月</li>
        <li @click="checkNavFn(6,3)" :class="[ checkNav03==6 ? 'checkLi':'']">近6个月</li>
        <li @click="checkNavFn(12,3)" :class="[ checkNav03==12 ? 'checkLi':'']">近1年</li>
      </ul>
      <div class="myChart" id="myChart3">

      </div>
    </section>
    <section class="item" v-for="">
      <div class="title">
        <p>心率报告</p>
      </div>
      <ul class="navCut">
        <li @click="checkNavFn(1,4)" :class="[ checkNav04==1 ? 'checkLi':'']">近1个月</li>
        <li @click="checkNavFn(3,4)" :class="[ checkNav04==3 ? 'checkLi':'']">近3个月</li>
        <li @click="checkNavFn(6,4)" :class="[ checkNav04==6 ? 'checkLi':'']">近6个月</li>
        <li @click="checkNavFn(12,4)" :class="[ checkNav04==12 ? 'checkLi':'']">近1年</li>
      </ul>
      <div class="myChart" id="myChart4">

      </div>
    </section>
    <section class="item" v-for="">
      <div class="title">
        <p>指氧报告</p>
      </div>
      <ul class="navCut">
        <li @click="checkNavFn(1,5)" :class="[ checkNav05==1 ? 'checkLi':'']">近1个月</li>
        <li @click="checkNavFn(3,5)" :class="[ checkNav05==3 ? 'checkLi':'']">近3个月</li>
        <li @click="checkNavFn(6,5)" :class="[ checkNav05==6 ? 'checkLi':'']">近6个月</li>
        <li @click="checkNavFn(12,5)" :class="[ checkNav05==12 ? 'checkLi':'']">近1年</li>
      </ul>
      <div class="myChart" id="myChart5">

      </div>
    </section>

  </div>
</template>

<script>
  import HeaderTop from '@/components/common/header.vue'
  import {getTranReport,getBpReport,getRsco2Report,getHrReport,getspo2Report,} from '@/api/data/index.js'

  export default {
    components : {
      HeaderTop
    },
    data(){
      return {
        xAxisData : [], //图表时间轴
        seriesData : [],//图表数据
        checkNav01 : 1,//导航切换为1,3,6,12个月
        checkNav02 : 1,//导航切换为1,3,6,12个月
        checkNav03 : 1,//导航切换为1,3,6,12个月
        checkNav04 : 1,//导航切换为1,3,6,12个月
        checkNav05 : 1,//导航切换为1,3,6,12个月
        title: '训练报告',
        tranReportObj : {},//训练
        bpReportObj:{},//血压
        rsco2ReportObj:{},//脑氧
        HrReportObj:{},//心率
        spo2ReportObj:{},//指氧
        reportDataArry : [],
      }
    },
    mounted(){
      this.getReportData();


    },
    methods:{
      //导航切换
      checkNavFn(month,reportType){
          var obj = {};
          var codeType;
          if(month==1){
            obj.dayBegin='2018-08-01';
            obj.dayEnd='2018-08-30';
          }else if(month==3){
            obj.dayBegin='2018-05-01';
            obj.dayEnd='2018-08-30';
          }else if(month==6){
            obj.dayBegin='2018-02-01';
            obj.dayEnd='2018-08-30';
          }else if(month==12){
            obj.dayBegin='2017-08-01';
            obj.dayEnd='2018-08-30';
          }
          switch (reportType){
            case 1:
                this.checkNav01=month;
                getTranReport(obj).then(res=>{
                  //console.log('训练',res)
                  this.tranReportObj=res.data.result;
                  this.detailsDataChartFn()
                  console.log('训练',this.tranReportObj)
                })
              break;
            case 2:
                this.checkNav02=month;
                getBpReport(obj).then( res => {
                  //console.log("血压：",res)
                  this.bpReportObj=res.data.result;
                  this.detailsDataChartFn()
                  console.log('血压',this.bpReportObj)
                })
              break;
            case 3:
                this.checkNav03=month;
                getRsco2Report(obj).then( res => {
                  //console.log("脑氧：",res)
                  this.rsco2ReportObj=res.data.result;
                  this.detailsDataChartFn()
                  console.log('脑氧',this.rsco2ReportObj)
                })
              break;
            case 4:
                this.checkNav04=month;
                getHrReport(obj).then( res => {
                  //console.log("心率：",res)
                  this.HrReportObj=res.data.result;
                  this.detailsDataChartFn()
                  console.log('心率',this.HrReportObj)
                })
              break;
            case 5:
                this.checkNav05=month;
                getspo2Report(obj).then( res => {
                  //console.log("指氧：",res)
                  this.spo2ReportObj=res.data.result;
                  this.detailsDataChartFn()
                  console.log('指氧',this.spo2ReportObj)
                })
              break;
          }
        this.checkNav=month;

      },
      //详情条形图
      detailsDataChartFn(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'));
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'));
        let myChart4 = this.$echarts.init(document.getElementById('myChart4'));
        let myChart5 = this.$echarts.init(document.getElementById('myChart5'));
        var that = this;
        console.log(that.tranReportObj)
        myChart1.setOption({
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['训练'],
          },
          calculable : true,
          dataZoom : {
            show : true,
            realtime : true,
            start : 0,
            end : 100
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : that.tranReportObj.tranDate
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'训练',
              type:'line',
              itemStyle : {color:'#6b4ccf'},
              data: that.tranReportObj.tranValue
            }
          ]
        })
        myChart2.setOption({
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['高压','低压'],
          },
          calculable : true,
          dataZoom : {
            show : true,
            realtime : true,
            start : 0,
            end : 100
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : this.bpReportObj.bpDate
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'高压',
              type:'line',
              itemStyle : {color:'#6b4ccf'},
              data: this.bpReportObj.bpHighValue
            },
            {
              name:'低压',
              type:'line',
              itemStyle : {color:'#6b4ccf'},
              data: this.bpReportObj.bpLowValue
            },
          ]
        })
        myChart3.setOption({
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['脑氧'],
          },
          calculable : true,
          dataZoom : {
            show : true,
            realtime : true,
            start : 0,
            end : 100
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : this.rsco2ReportObj.rsco2Date
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'脑氧',
              type:'line',
              itemStyle : {color:'#6b4ccf'},
              data: this.rsco2ReportObj.rsco2Value
            }
          ]
        })
        myChart4.setOption({
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['心率'],
          },
          calculable : true,
          dataZoom : {
            show : true,
            realtime : true,
            start : 0,
            end : 100
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : this.HrReportObj.hrDate
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'心率',
              type:'line',
              itemStyle : {color:'#6b4ccf'},
              data: this.HrReportObj.hrValue
            }
          ]
        })
        myChart5.setOption({
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['指氧'],
          },
          calculable : true,
          dataZoom : {
            show : true,
            realtime : true,
            start : 0,
            end : 100
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : this.spo2ReportObj.spo2Date
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'指氧',
              type:'line',
              itemStyle : {color:'#6b4ccf'},
              data: this.spo2ReportObj.spo2Value
            }
          ]
        })

      },
      //总训练
      getReportData(){
          var that =this;
        let obj ={
          dayBegin:'2018-08-01',
          dayEnd:'2018-08-30'
        }
        console.log(obj)


        const promist1 = new Promise((resolve, reject) => {
          getTranReport(obj).then(res=>{
            //console.log('训练',res)
            this.tranReportObj=res.data.result;
            this.reportDataArry.push(res.data.result);
            console.log('训练',this.tranReportObj)
            resolve(res.data.result)
          })
        })
        const promist2 = new Promise((resolve, reject) => {
          getBpReport(obj).then( res => {
            //console.log("血压：",res)
            this.bpReportObj=res.data.result;
            this.reportDataArry.push(res.data.result);
            console.log('血压',this.bpReportObj)
            resolve(res.data.result)
          })
        })
        const promist3 = new Promise((resolve, reject) => {
          getRsco2Report(obj).then( res => {
            //console.log("脑氧：",res)
            this.rsco2ReportObj=res.data.result;
            this.reportDataArry.push(res.data.result);
            console.log('脑氧',this.rsco2ReportObj)
            resolve(res.data.result)
          })
        })
        const promist4 = new Promise((resolve, reject) => {
          getHrReport(obj).then( res => {
            //console.log("心率：",res)
            this.HrReportObj=res.data.result;
            this.reportDataArry.push(res.data.result);
            console.log('心率',this.HrReportObj)
            resolve(res.data.result)
          })
        })
        const promist5 = new Promise((resolve, reject) => {
          getspo2Report(obj).then( res => {
            //console.log("指氧：",res)
            this.spo2ReportObj=res.data.result;
            this.reportDataArry.push(res.data.result);
            console.log('指氧',this.spo2ReportObj)
            resolve(res.data.result)
          })
        })
        Promise.all([promist1, promist2, promist3, promist4, promist5]).then((resultList) => {
          console.log('results:', resultList)
          that.detailsDataChartFn();
        })

      },

      //血压

      //脑氧

      //心率

      //指氧

    }

  }
</script>

<style lang="scss" scoped>

  .trainReport{
    width: 100%;
    padding-top: 80px;
    .item{
      width: 100%;
      margin-bottom: 10px;
      background: #fff;
      display: flex;
      flex-direction: column;
      .title{
        height: 82px;
        line-height: 82px;
        display: flex;
        justify-content: space-between;
        padding: 0px 25px;
        border-top: 1px solid #F2F4F5;
        p:nth-child(1){
          font-size: 34px;
          color: #000;
          font-weight: bolder;
        }
        p:nth-child(2){
          font-size: 24px;
          color: #888;
        }
      }
      .navCut{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0px 25px;
        border-bottom: 1px solid #F2F4F5;
        li{
          width: 120px;
          line-height: 60px;
          font-size: 28px;
          color: #333333;
          text-align: center;
        }
        .checkLi{
          color: #2B8CFF;
          border-bottom: 2px solid #2B8CFF;
        }
      }
      .myChart{
        width: 100%;
        height: 445px;
        margin: 20px 0px;
      }
    }
  }

</style>
