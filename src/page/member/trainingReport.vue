<template>
  <div class="trainReport">
    <section class="item">
        <div class="title">
          <p>总体训练报告</p>
          <p>上一次训练时间：2018.08.04 11:11:11</p>
        </div>
        <ul class="navCut">
          <li class="checkLi">近1个月</li>
          <li>近3个月</li>
          <li>近6个月</li>
          <li>近1年</li>
        </ul>
        <div class="myChart" id="myChart">

        </div>
      </section>
    <section class="item">
      <div class="title">
        <p>总体训练报告</p>
      </div>
      <ul class="navCut">
        <li class="checkLi">近1个月</li>
        <li>近3个月</li>
        <li>近6个月</li>
        <li>近1年</li>
      </ul>
      <div class="myChart" id="myChart1">

      </div>
    </section>
    <section class="item">
      <div class="title">
        <p>总体训练报告</p>
      </div>
      <ul class="navCut">
        <li class="checkLi">近1个月</li>
        <li>近3个月</li>
        <li>近6个月</li>
        <li>近1年</li>
      </ul>
      <div class="myChart" id="myChart2">

      </div>
    </section>
  </div>
</template>

<script>

  export default {

    data(){
      return {

      }
    },
    mounted(){
      this.detailsDataChartFn();
    },
    methods:{
      //详情条形图
      detailsDataChartFn(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        myChart.setOption({
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['训练报告'],
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
              data : ["2018-09-06", "2018-09-07", "2018-09-08", "2018-09-09", "2018-09-10", "2018-09-11", "2018-09-12","2018-09-06", "2018-09-07", "2018-09-08", "2018-09-09", "2018-09-10", "2018-09-11", "2018-09-12"]
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'训练报告',
              type:'line',
              itemStyle : {color:'#6b4ccf'},
              data: [2, 3, 441, 33, 43, 44, 0,422, 3, 441, 33, 43, 44, 0]
            }
          ]
        })

      },
    }

  }
</script>

<style lang="scss" scoped>

  .trainReport{
    width: 100%;
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
