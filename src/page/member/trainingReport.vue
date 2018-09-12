<template>
  <div class="trainReport">

  </div>
</template>

<script>

  export default {
    components : {

    },
    data(){
      return {
        profileData : {},           //数据概况
        dataCountArray : [],          //M站数据
        mobileCountArray : [],        //模板数据
        timeArray : [],               //时间轴
        detailsNavFlag : 'scan',    //浏览量scan/访问量uv/分享量的切换值share
        detaTimenav : 7 ,          //7天和30天的切换状态  0没有状态
        helpbox1 : 'none',          //帮助文档显示和隐藏
        helpbox2 : 'none',
        templateType : this.$route.query.templateType,
      }
    },
    mounted(){
      this.detailsDataChartFn();
    },
    methods:{
      //详情导航栏按钮
      dataDetailsNavFn(dataType){
        this.detailsNavFlag=dataType;
      },
      //时间筛选按钮
      timeTabFn(days){
        this.detaTimenav = days;
      },
      //详情条形图
      detailsDataChartFn(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('detailsDataChart'));
        myChart.setOption({
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['M站','爆款']
          },
          /*toolbox: {
           show : true,
           feature : {
           mark : {show: true},
           dataZoom : {show: true},
           dataView : {show: true},
           magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
           restore : {show: true},
           saveAsImage : {show: true}
           }
           },*/
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
              data : ["2018-09-06", "2018-09-07", "2018-09-08", "2018-09-09", "2018-09-10", "2018-09-11", "2018-09-12"]
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'M站',
              type:'line',
              itemStyle : {color:'#FF6600'},
              data: [0, 55, 34, 2, 333, 4, 55]
            },
            {
              name:'爆款',
              type:'line',
              itemStyle : {color:'#6b4ccf'},
              data: [2, 3, 441, 33, 43, 44, 0]
            }
          ]
        })

      },
    },

  }
</script>

<style lang="scss" scoped>

  .dataSurvey_title{
    height: 118px;
    line-height: 118px;
    display: flex;
    padding: 0px 25px;
    .dst_left{
      font-family: PingFangSC-Medium;
      font-size: 34px;
      color: #333;
      margin-right: 10px;
      font-weight: bolder;
    }
    .dst_right{
      font-family: PingFangSC-Regular;
      font-size: 24px;
      color: #666;
      text-align: right;
      position: absolute;
      right: 25px;
    }
  }








  .data_details{
    width: 100%;
    position: relative;
    background: #fff;
    padding-top: 24px;
    padding-bottom: 20px;
  }
  .data_details .dataDetails_nav{
    display: flex;
    flex-direction: row;
    height: 70px;
    line-height: 70px;
    margin-bottom: 40px;
  }
  .data_details .dataDetails_nav>p{
    font-size: 34px;
    color: #333;
    font-weight: bolder;
  }
  .data_details .dataDetails_nav ul{
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 25px;
  }
  .data_details .dataDetails_nav ul li{
    width: 150px;
    text-align: center;
    height: 100%;
    font-size: 30px;
    color: #333;
  }
  .data_details .dataDetails_nav .dataD_checkedNav{
    border-bottom: 1px solid #1573D3;
    color: #1573D3;
  }
  .data_details .dataDetails_timenav .time_checkedNav{
    border: 1px solid #4A90E2;
    color: #1573D3!important;
  }
  .data_details .dataDetails_timenav{
    display: flex;
    flex-direction: row;
    height: 44px;
    line-height: 44px;
    margin-bottom: 40px;
  }
  .data_details .dataDetails_timenav>p{
    font-size: 24px;
    color: #666;
    margin-right: 30px;
  }
  .data_details .dataDetails_timenav>span{
    width: 100px;
    height: 44px;
    line-height: 44px;
    background: #FFF;
    border: 1px solid #666;
  }
  .data_details .dataDetails_timenav>span:nth-of-type(1){
    font-size: 24px;
    color: #666;
    text-align: center;
    margin-right: 30px;
  }
  .data_details .detailsDataChart{
    width: 700px;
    height: 360px;
  }
  /*checked*/
  .data_details .dataDetails_nav .dataD_checkedNav{
    border-bottom: 1px solid #1573D3;
    color: #1573D3;
  }
  .data_details .dataDetails_timenav .time_checkedNav{
    border: 1px solid #4A90E2;
    color: #1573D3!important;
  }
</style>
