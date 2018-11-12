<template>
    <div>
        <header-top :title="title"></header-top>
        <div class="swiper" :class="bgColor">
            <section :class="'date-wrap ' + curDate ">
                <swiper :options="lineSwiperOpt()" ref="mySwiperA">
                    <!-- slides -->
                    <swiper-slide v-if="curDate == 'day'" v-for="(item,i) in dateDayBuf1" :key="i">{{item}}</swiper-slide>

                    <swiper-slide v-if="curDate == 'week'" v-for="(item,i) in dateWeekBuf1" :key="i+'week'">{{item}}</swiper-slide>
                    <swiper-slide v-if="curDate == 'month'" v-for="(item,i) in dateMonthBuf1" :key="i+'month'">{{item}}</swiper-slide>

                </swiper>
            </section>
            <section v-show="curDate !== 'day'">
                <div id="myChart" :style="{width: '300px', height: '220px',margin:'0 auto'}"></div>
            </section>
            <section class="detail-wrap" v-show="curDate == 'day'" >
                <div v-if="resultData">   
                    <div v-if="resultData.param && !resultData.bp" class="zanwrap">
                        <span :class="'zanNo zanNo' + resultData.param.effect"></span>
                        <p class="tip" v-if="resultData.param.effect == 0">没有训练哦~</p>
                        <p class="tip" v-if="resultData.param.effect == 1">训练效果很棒!</p>
                        <p class="tip" v-if="resultData.param.effect == 2">训练效果非常棒!</p>
                        <p class="tip" v-if="resultData.param.effect == 3">训练效果特别棒!</p>
                    </div>
                </div>
                <div v-if="resultData.bp" class="zanwrap">
                    <table class="table">
                        <tr>
                            <td>左臂</td>
                            <td>右臂</td>
                        </tr>
                        <tr>
                            <td>{{resultData.bp.bpHighLeftFirst}}</td>
                            <td>{{resultData.bp.bpHighRightFirst}}</td>
                        </tr>
                        <tr>        
                            <td>{{resultData.bp.bpLowLeftFirst}}</td>
                            <td>{{resultData.bp.bpLowRightFirst}}</td>
                        </tr>
                    </table>
                </div>
            </section>
        </div>
        <!-- <date-line :dateType='curDate' :newDate="newDate" :zanNum="zanNum" :sltDate="selectDate"></date-line> -->
        <div class="cycle-data" :class="bgColor">
            <ul class="dateBar">
                <li @click="tabCut('day')" :class="curDate == 'day' ? 'act': ''">日</li>
                <li @click="tabCut('week')" :class="curDate == 'week' ? 'act': ''">周</li>
                <li @click="tabCut('month')" :class="curDate == 'month' ? 'act': ''">月</li>
            </ul>
            <!-- 训练 -->
            <ul class="trainData" v-if="resultData.tran || resultData.trans" >
                <li>
                   <p class="times">{{resultData.param.tranTotal}}</p> 
                   <p class="name">训练次数</p>
                </li>
                <li>
                   <p class="times">{{resultData.param.tranEffect}}</p> 
                   <p class="name">有效次数</p>
                </li>
                <li>
                   <p class="result train">
                       <span class="zan"></span>
                       <span class="num">+{{resultData.param.effect}}</span>
                    </p>
                   <p class="name">训练效果</p>
                </li>
            </ul>
            <!-- 脑氧 -->
            <ul class="trainData" v-if="resultData.rsco2 || resultData.rsco2s">
                <li>
                   <p class="times">{{resultData.param.rsco2Total}}</p> 
                   <p class="name">测量次数</p>
                </li>
                <li>
                   <p class="times">{{resultData.param.rsco2Normal}}</p> 
                   <p class="name">正常次数</p>
                </li>
                <li>
                   <p class="result">
                       <!-- <span class="zan"></span> -->
                       <span class="num">{{resultData.param.rsco2NoNormal}}</span>
                    </p> 
                   <p class="name">不正常次数</p>
                </li>
            </ul>
            <!-- 血压 -->
            <ul class="trainData" v-if="resultData.bp || resultData.bps">
                <li>
                   <p class="times">{{resultData.param.bpTotal}}</p> 
                   <p class="name">测量次数</p>
                </li>
                <li>
                   <p class="times">{{resultData.param.bpNormal}}</p> 
                   <p class="name">正常次数</p>
                </li>
                <li>
                   <p class="result">
                       <!-- <span class="zan"></span> -->
                       <span class="num">{{resultData.param.bpNoNormal}}</span>
                    </p> 
                   <p class="name">不正常次数</p>
                </li>
            </ul>
            <!-- 心率 -->
            <ul class="trainData" v-if="resultData.hr || resultData.hrs">
                <li>
                   <p class="times">{{resultData.param.hrTotal}}</p> 
                   <p class="name">测量次数</p>
                </li>
                <li>
                   <p class="times">{{resultData.param.hrNormal}}</p> 
                   <p class="name">正常次数</p>
                </li>
                <li>
                   <p class="result">
                       <!-- <span class="zan"></span> -->
                       <span class="num">{{resultData.param.hrNoNormal}}</span>
                    </p> 
                   <p class="name">不正常次数</p>
                </li>
            </ul>
            <!-- 指氧 -->
            <ul class="trainData" v-if="resultData.spo2 || resultData.spo2s">
                <li>
                   <p class="times">{{resultData.param.spo2Total}}</p> 
                   <p class="name">测量次数</p>
                </li>
                <li>
                   <p class="times">{{resultData.param.spo2Normal}}</p> 
                   <p class="name">正常次数</p>
                </li>
                <li>
                   <p class="result">
                       <!-- <span class="zan"></span> -->
                       <span class="num">{{resultData.param.spo2NoNormal}}</span>
                    </p> 
                   <p class="name">不正常次数</p>
                </li>
            </ul>
            <div class="tip-wrap" v-if="resultData.param">
                <h5>训练小贴士</h5>
                <p>
                    {{resultData.param.tip}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
// import dateLine from '@/components/Home/swiper.vue'
import HeaderTop from '@/components/common/header.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getDataTrain,getDataHome,getDataBp,getDataRsco2,getDataHr,getDataSpo2 } from '@/api/data/index.js'
import { getDataTrains,getDataBps,getDataRsco2s,getDataHrs,getDataSpo2s } from '@/api/data/home.js'

export default {
    components : {
        HeaderTop,swiper,swiperSlide,
    },
    data () {
        return {
            bgColor : '',
            mySwiperA : '',
            title: '训练',
            curDate : 'day',
            memberData: '',
            resultData : '',
            newDate : [],
            zanNum : [],
            selectDate : this.$route.query.selectDate,
            homeDate : this.$route.query.selectDate,
            homeWeek : '',
            dateDayBuf1 : [],   //日期 day 模板 08.1
            dateDayBuf2 : [],   //日期模板 2018-08-01 
            dateWeekBuf1 : [] ,  //日期  week 模板  08.05-08.11
            dateWeekBuf2 : [] ,  //日期  week 模板  obj ={ begindae :'2018-09-01' , dateEnd : '2018-09-08'}
            dateMonthBuf1 : [] ,  //日期  week 模板  08.05-08.11
            dateMonthBuf2 : [] ,  //日期  week 模板  obj ={ begindae :'2018-09-01' , dateEnd : '2018-09-08'}
            dateMonthBuf3 : [],
        }
    },
    mounted () {
        this.switchData();
        this.arrTurnDate(this.homeDate,this.homeDate);  //day 
        this.arrTurnWeek(this.homeDate,this.homeDate); //week
        
    },
    methods : {
        /**
         * *  Tab切换
         * */
        tabCut (data) {
            this.curDate = data;
            switch ( data ) {
                case 'day' :
                    this.arrTurnDate(this.homeDate,this.homeDate);  //day 
                    this.switchData(this.homeDate)

                break;
                case 'week' :
                    this.arrTurnWeek(this.homeDate,this.homeDate);
                    this.switchArrData(this.dateWeekBuf2[1])
                break;
                case 'month' :
                    this.arrTurnMonth(this.homeDate,this.homeDate)
                break;
            }
        },
        // 时间轴配置
        lineSwiperOpt () {
            var that = this;
            var swiperOption = {
                    notNextTick: true,  
                    slidesPerView : 7,
                    centeredSlides : true,
                    slidesOffsetBefore : 0,
                    slidesOffsetAfter : 0,
                    initialSlide :1,//默认第二个
                    on: {
                        slideChangeTransitionEnd: function(){
                            if ( that.curDate == 'day') {
                                switch ( this.activeIndex ) {
                                    case 0 :
                                        that.switchData(that.dateDayBuf2[0])
                                        that.arrTurnDate(that.homeDate,that.dateDayBuf2[0])
                                        this.slideTo(1, 10, false);
                                    break;
                                    case 1 :
                                        that.switchData(that.dateDayBuf2[1])
                                        that.arrTurnDate(that.homeDate,that.dateDayBuf2[1])
                                        this.slideTo(1, 10, false);
                                    break;
                                    case 2 :
                                        that.switchData(that.dateDayBuf2[2])
                                        that.arrTurnDate(that.homeDate,that.dateDayBuf2[2])
                                        this.slideTo(1, 10, false);
                                    break;
                                }
                            } else if ( that.curDate == 'week' ) {
                                switch ( this.activeIndex ) {
                                    case 0 :
                                        that.switchArrData(that.dateWeekBuf2[0])
                                        that.arrTurnWeek(that.homeDate,that.dateWeekBuf2[0].dayBegin);
                                        this.slideTo(1, 10, false);
                                    break;
                                    case 1 :
                                        that.switchArrData(that.dateWeekBuf2[1])
                                        that.arrTurnWeek(that.homeDate,that.dateWeekBuf2[1].dayBegin);

                                        this.slideTo(1, 10, false);

                                    break
                                    case 2 :
                                        that.switchArrData(that.dateWeekBuf2[2])
                                        that.arrTurnWeek(that.homeDate,that.dateWeekBuf2[2].dayBegin);
                                        this.slideTo(1, 10, false);

                                    break
                                }
                            } else if ( that.curDate == 'month' ) {
                                switch ( this.activeIndex ) {
                                    case 0 :
                                        that.switchArrData(that.dateMonthBuf2[0])
                                        that.arrTurnMonth(that.homeDate,that.dateMonthBuf2[0].dayBegin);
                                        this.slideTo(1, 10, false);
                                    break;
                                    case 1 :
                                        that.switchArrData(that.dateMonthBuf2[1])
                                        that.arrTurnMonth(that.homeDate,that.dateMonthBuf2[1].dayBegin);

                                        this.slideTo(1, 10, false);

                                    break
                                    case 2 :
                                        that.switchArrData(that.dateMonthBuf2[2])
                                        that.arrTurnMonth(that.homeDate,that.dateMonthBuf2[2].dayBegin);
                                        this.slideTo(1, 10, false);

                                    break
                                }
                            }
                            

                        },
                    },
            }
            return swiperOption;
        },
        // 请求单日接口
        switchData (chooseDate) {
            this.bgColor = this.$route.query.type;
            var obj = {
                date : chooseDate ? chooseDate :this.selectDate
            }
            
            switch ( this.bgColor ) {
                case 'train' :
                    this.title = '训练';
                    if ( this.curDate == 'day') {
                            getDataTrain(obj).then( res => {
                            this.resultData = res.data.result;
                        })
                    }else {
                        getDataTrains(obj).then  ( res => {
                            
                        })
                    }
                    
                    break;
                case 'brain' :
                    this.title = '脑氧';
                    if ( this.curDate == 'day' ) {
                        getDataRsco2(obj).then( res => {
                            this.resultData = res.data.result;
                        })
                    } else {

                    }
                    
                    break;
                case 'blood' :
                    this.title = '血压';
                    if ( this.curDate == 'day' ) {
                        getDataBp(obj).then( res => {
                            this.resultData = res.data.result;
                        })
                    } else {

                    }
                    break;
                case 'heart' :
                    this.title = '心率';
                    if ( this.curDate == 'day' ) {
                        getDataHr(obj).then( res => {
                            this.resultData = res.data.result;
                        })
                    }else {

                    }
                    
                    break;
                case 'oxygen' :
                    this.title = '指氧';
                    if ( this.curDate == 'day' ) {
                        getDataSpo2(obj).then( res => {
                            this.resultData = res.data.result;
                        })
                    } else {
                        
                    }
                    
                    break;
            }

        },
        // 请求时间段 接口
        switchArrData (chooseDate) {
            var that = this;
            this.bgColor = this.$route.query.type;
            
            switch ( this.bgColor ) {
                case 'train' :
                    this.title = '训练';
                    getDataTrains(chooseDate).then  ( res => {
                        this.resultData = res.data.result;
                        var data = res.data.result.trans.effect;
                        that.drawLine(data);
                        
                    })
                    break;
                case 'brain' :
                    this.title = '脑氧';
                    getDataRsco2s(chooseDate).then( res => {
                        this.resultData = res.data.result;
                        var data = res.data.result.rsco2s.rsco2Value1;
                        that.drawLine(data);
                        
                    })
                    break;
                case 'blood' :
                    this.title = '血压';
                    getDataBps(chooseDate).then( res => {
                        this.resultData = res.data.result;
                        var hightData = res.data.result.bps.bpHighLeftFirst;
                        var lowData = res.data.result.bps.bpLowLeftFirst;
                        that.drawLine2(hightData,lowData);
                    })
                    break;
                case 'heart' :
                    this.title = '心率';
                    getDataHrs(chooseDate).then( res => {
                        this.resultData = res.data.result;
                        var data = res.data.result.hrs.hrValue1;
                        that.drawLine(data);

                    })
                    break;
                case 'oxygen' :
                    this.title = '指氧';
                    getDataSpo2s(chooseDate).then( res => {
                        this.resultData = res.data.result;
                        var data = res.data.result.spo2s.spo2Value1;
                        that.drawLine(data);
                    })
                    break;
            }

        },
        /**
         **  绘制图表
         **/ 
        drawLine(data){
            var myChartArr ;
            myChartArr = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                            opacity:'.1',

                        }
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                            opacity:'.1',
                        }
                    },
                },
                series: [
                    {
                        data: data,
                        type: 'line',
                        itemStyle : {color:'#fff'},
                    }
                ]
            };
            myChartArr.setOption(option);
        },
        drawLine2(hightData,lowData){
            var myChartArr ;
            myChartArr = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: hightData,
                        type: 'line'
                    },
                    {
                        data: lowData,
                        type: 'line'
                    }

                ]
            };
            myChartArr.setOption(option);
        },
        //数组日期 day 转化 
        arrTurnDate (homeDate,chooseDate) {
            const nDay = 3;
            var getHomeDay = new Date(homeDate);
            var dateDayBuf1 = new Array(nDay);
            var dateDayBuf2 = new Array(nDay);

            //初始化数组
            function initDateDay(date){
                var dateDemo = new Date(date);
                    dateDayBuf1[nDay-1] = dateDemo.Format("MM.dd");
                    for(var i=nDay-2;i>=0; i--){
                        dateDemo.setDate(dateDemo.getDate()-1);
                        dateDayBuf1[i] = dateDemo.Format("MM.dd");
                    }

                    dateDayBuf2[nDay-1] = dateDemo.Format("yyyy-MM-dd");
                    for(var i=nDay-2;i>=0; i--){
                        dateDemo.setDate(dateDemo.getDate()+1);
                        dateDayBuf2[i] = dateDemo.Format("yyyy-MM-dd");
                    }

            }

            //刷新数组
            (function refreshDate(date){
                var dateDemo = new Date(date);
                if(dateDemo >= getHomeDay){
                    dateDemo = getHomeDay;
                }
                dateDemo.setDate(dateDemo.getDate() + nDay/2);
                initDateDay(dateDemo.Format("yyyy-MM-dd"));
                
            })(chooseDate)
            this.dateDayBuf1 = dateDayBuf1;
            this.dateDayBuf2 = dateDayBuf2.reverse();

        },
        // 日期周转化
        arrTurnWeek (homeDate,chooseDate) {
            /**
            *	nDay          日期数组的长度
            *   nWeek         周的长度
            *   getHomeDay    最终的日期,可以设置为当前日期
            *   dateDayBuf    日期数组
            *   dateWeekBuf1   周的数组
            *   dateWeekBuf2   周的数组
            */
            const nDay = 15;
            const nWeek = 3;
            var getHomeDay = new Date(homeDate);

            var dateDayBuf = new Array(nDay);
            var dateWeekBuf1 = new Array(nWeek);
            var dateWeekBuf2 = new Array(nWeek);

            function initDateWeek(date){
                var dateDemo = new Date(date);
                dateDemo.setDate(dateDemo.getDate() + parseInt(nWeek/2)*7);
                for(var i=nWeek-1;i>=0; i--){
                    dateWeekBuf1[i] = getDateOfWeek(dateDemo);
                    dateWeekBuf2[i] = getDateOfWeek2(dateDemo);

                    dateDemo.setDate(dateDemo.getDate() - 7);
                    
                }
            }

            //刷新数组
            (function refreshDateWeek(date){
                var dateDemo = new Date(date);
                var dateDemoParam = new Date(date);

                dateDemo.setDate(dateDemo.getDate() + parseInt(nWeek/2)*7);

                if(dateDemo >= getHomeDay){
                    dateDemoParam = getHomeDay;
                }

                initDateWeek(dateDemoParam);
            })(chooseDate)


            function getDateOfWeek(dateDemo) {  
                var dateBegin = new Date(dateDemo);  
                var dateEnd = new Date(dateDemo);

                var nInvDay = dateBegin.getDay();  

                dateBegin.setDate(dateBegin.getDate() - nInvDay);
                dateEnd.setDate(dateEnd.getDate() - nInvDay + 6);

                return dateBegin.Format("MM.dd") + '-' + dateEnd.Format("MM.dd");
            }
            function getDateOfWeek2 (dateDemo) {  
                var dateBegin = new Date(dateDemo);  
                var dateEnd = new Date(dateDemo);
                var nInvDay = dateBegin.getDay();  

                dateBegin.setDate(dateBegin.getDate() - nInvDay);
                dateEnd.setDate(dateEnd.getDate() - nInvDay + 6);
                var obj = {
                    dayBegin : dateBegin.Format("yyyy-MM-dd"),
                    dayEnd : dateEnd.Format("yyyy-MM-dd")
                }
                return obj;
            }
            this.dateWeekBuf1 = dateWeekBuf1;
            this.dateWeekBuf2 = dateWeekBuf2;

        },
        //  日期 月转换
        arrTurnMonth (homeDate,chooseDate) {
            /**
            *	nDay          日期数组的长度
            *   nWeek         周的长度
            *   getHomeDay    最终的日期,可以设置为当前日期
            *   dateDayBuf    日期数组
            *   dateWeekBuf   周的数组
            */
            const nMonth      = 3;
            var getHomeDay   = new Date(homeDate);
            var dateMonthBuf1 = new Array(nMonth);
            var dateMonthBuf2 = new Array(nMonth);
            var dateMonthBuf3 = new Array(nMonth);
            var that = this;
            //date:yyyy-MM
            function initDateMonth(date){
                var dateDemo = new Date(date);
                var dateFlag = new Date(date);

                var nMonthMin = dateDemo.getMonth() - parseInt(nMonth/2);

                for(var i=0; i<nMonth; i++){
                    var nMonthDemo = nMonthMin + i;

                    if(nMonthDemo < 0) {
                        dateDemo.setYear(dateFlag.getFullYear() - 1);
                    }
                    else if(nMonthDemo <= 11){
                        dateDemo.setYear(dateFlag.getFullYear());
                    }else{
                        
                        dateDemo.setYear(dateFlag.getFullYear() + 1);
                    }
                    dateDemo.setMonth((nMonthDemo + 12) % 12);
                    dateMonthBuf3[i] = dateDemo.Format("yyyy-MM-dd");
                    that.dateMonthBuf2[i] = {
                        dayBegin : getFirstDay(dateMonthBuf3[i]),
                        dayEnd :getLastDay(dateMonthBuf3[i])
                    }
                    that.dateMonthBuf1[i] = new Date (getFirstDay(dateMonthBuf3[i])).Format("MM.dd") + '-' + new Date(getLastDay(dateMonthBuf3[i])).Format("MM.dd");
                }
            }
            function getLastDay(date)   
            {   
                var dateDemo = new Date(date);

                var year = dateDemo.getFullYear();
                var month = dateDemo.getMonth() + 1;

                var new_year = year;      //取当前的年份   
                var new_month = month++;  //取下一个月的第一天，方便计算（最后一天不固定） 

                if(month>12)              //如果当前大于12月，则年份转到下一年   
                {   
                    new_month -=12;       //月份减   
                    new_year++;           //年份增   
                }   
                var new_date = new Date(new_year,new_month,1);        //取当年当月中的第一天   

                return (new Date(new_date.getTime()-1000*60*60*24)).Format("yyyy-MM-dd");//获取当月最后一天日期   
            }
            function getFirstDay(date){
                var mydate=new Date(date);
                mydate.setDate(1);
                return mydate.Format("yyyy-MM-dd");
            }
            //刷新数组
            (function refreshDateMonth(date){
                var dateDemo = new Date(date);
                var dateDemoParam = new Date(date);

                if(dateDemo >= getHomeDay){
                    dateDemoParam = getHomeDay;
                }

                initDateMonth(dateDemoParam);
            })(chooseDate)

            // this.dateMonthBuf1  = dateMonthBuf1;
            console.log(this.dateMonthBuf1)
            console.log(this.dateMonthBuf2)
            console.log(this.dateMonthBuf3)
            // refreshDateMonth('2018-05-07');
        },
        /**
         * 获取数据
         * */
        getPrevWeek () {
            var date = new Date(this.homeDate);//获取当前时间
            date.setDate(date.getDate()-7);//设置天数 -1 天
            var time = date.Format("yyyy-MM-dd");
            return time;
            // alert(time)
        },

        /***
         * 日期截取字符串
         * */
        getNewDate () {
            var aa = [],bb =[];
            this.newDate.forEach( (val,i) => {
                aa.push(val.substring(6,10))
            })
            aa.forEach( val => {
                bb.push(val.replace(/-/,'.'));
            })
            this.newDate = bb;

        }

    }
}
</script>
<style lang="scss">
    .swiper.train{
        background: #2B8CFF;
    }
    .swiper.brain{
        background: #3AD7E8;
    }
    .swiper.blood{
        background: #77CB53;
    }
    .swiper.heart{
        background: #FA816B;
    }
    .swiper.oxygen{
        background: #E6B917;
    }
    .wrap{
        margin-top:80px;
    }
    .swiper { margin-top:80px;}
    .detail-wrap{
        height: 418px;
        .zanwrap{
            overflow: hidden;
            text-align: center;
        }
        .zanNo{
            display: inline-block;
            width:90px;height:88px;
            margin-top:105px;
            margin-bottom:25px;

        }
        .zanNo0 {
            height: 90px;
            background:url('../../assets/images/home/cryface.png') no-repeat;
            background-size:100%;
        }
        .zanNo1{
            width:90px;
            height:90px;
            background:url('../../assets/images/home/zan-white.png') no-repeat;
            background-size:100%;
        }
        .zanNo2{
            width:180px;
            height:90px;
            background:url('../../assets/images/home/zan-white2.png') no-repeat;
            background-size:100%;
        }
        .zanNo3{
            width:270px;
            height:90px;
            background:url('../../assets/images/home/zan-white3.png') no-repeat;
            background-size:100%;
        }
        .zanNo4{
            width:90px;
            height:90px;
            background:url('../../assets/images/home/zan-white4.png') no-repeat;
            background-size:100%;
        }
        .zanNo5{
            width:90px;
            height:90px;
            background:url('../../assets/images/home/zan-white5.png') no-repeat;
            background-size:100%;
        }
        .tip{
            font-size:30px;
            color:#fff;
            text-align: center;
        }

    }
        .cycle-data.train {
            .dateBar li.act,.trainData li .times{
                color:#2B8CFF;
            }
        }
        .cycle-data.brain {
            .dateBar li.act,.trainData li .times{
                color:#3AD7E8;
            }
        }
        .cycle-data.blood {
            .dateBar li.act,.trainData li .times{
                color:#77CB53;
            }
        }
        .cycle-data.heart {
            .dateBar li.act,.trainData li .times{
                color:#FA816B;
            }
        }
        .cycle-data.oxygen {
            .dateBar li.act,.trainData li .times{
                color:#E6B917;
            }
        }
    .cycle-data{
        .dateBar{
            display: flex;
            flex-flow: nowrap row;
            width:100%;
            justify-content: space-around;
            background:#fff;
            margin-bottom:10px;
            li{
                font-size:34px;
                height:88px;
                line-height: 88px;
                text-align: center;
                flex-grow: 1;
            }
            li.act{
                background:rgba(43,140,255,.2);
                color:#2B8CFF;
            }
        }
        .trainData{
            display: flex;
            flex-flow: nowrap row;
            width:100%;
            padding:55px 0;
            justify-content: space-around;
            background:#fff;
            margin-bottom:10px;
            li{
               height: 85px;
               text-align: center;
               flex-grow: 1;
               border-right:1px solid #EEE;
               :last-of-type{
                   border-right:none;
               }
               .times{
                   font-size:40px;
                   color: #2B8CFF;
                   line-height: 36px;
               }
               .name{
                   line-height: 80px;
                   font-size:28px;
                   color:#888;
               }
               .result.train{
                   line-height: 10px;
               }
               .result{
                   line-height: 34px;
                   .zan{
                       display: inline-block;
                        width:35px;height:35px;
                        background:url('../../assets/images/home/zan.png') no-repeat;
                        background-size:100%;
                        vertical-align: sub;
                   }
                   .num{
                       position: relative;top:3px;
                       font-size:40px;color:#FAC919;
                   }
               }
            }
        }
        .tip-wrap{
            background: #fff;
            h5{
                height: 87px;
                line-height: 87px;
                font-size:34px;
                font-weight: normal;
                padding-left:25px;
                border-bottom:1px solid #EEE;
            }
            p{
                padding:19px 25px 100px;
                font-size: 28px;
                color: #333333;
                letter-spacing: 0;
                line-height: 56px;
            }
        }
    }
    .table{
        // border:1px solid #fff;
        margin:0 auto;
        margin-top:70px;
        td {
            width:220px;height:70px;
            text-align: center;
            color:#fff;font-size:40px;
            border-bottom:1px solid #fff;
        }
        tr td:first-of-type{
            border-right:1px solid #fff;
        }
        tr:last-of-type td{
            border-bottom:none;
        }
    }
    
    .date-wrap{
        height: 100px;
        .swiper-wrapper{
            height:82px;
            line-height: 82px;
            margin-left:80px;
            .swiper-slide{
                text-align: center;
                width: 100px !important;
                color:#fff;
                font-size:30px;
            line-height: 82px;
                
                opacity: .7;
            }
            .swiper-slide-active{
                font-size:40px;
                opacity: 1;
                line-height: 82px;
            }
        }
    }
    .date-wrap.week{
        .swiper-slide{
            width:210px !important;
        }
        .swiper-slide-active{
            font-size:40px;
            opacity: 1;
            width:230px!important;
            line-height: 82px;
        }
    }
    .date-wrap.month{
        .swiper-slide{
            width:210px !important;
        }
        .swiper-slide-active{
            font-size:40px;
            opacity: 1;
            width:230px!important;
            line-height: 82px;
        }
    }
    .date-wrap.week .swiper-wrapper,.date-wrap.month .swiper-wrapper{
        position: relative;left:-240px;
    }
    .date-wrap .swiper-wrapper{
        left : -60px;
    }
</style>

