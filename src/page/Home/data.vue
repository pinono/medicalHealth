<template>
    <div>
        <header-top :title="title"></header-top>
        <div class="swiper" :class="bgColor">
            <section class="date-wrap">
                <swiper :options="lineSwiperOpt()" ref="mySwiperA">
                    <!-- slides -->
                    <swiper-slide v-for="(item,i) in dateDayBuf1" :key="i">{{item}}</swiper-slide>
                </swiper>
            </section>
            <section class="detail-wrap" v-show="curDate == 'day'" >
                <div v-if="resultData">   
                    <div v-if="resultData.param" class="zanwrap">
                        <span :class="'zanNo zanNo' + resultData.param.effect"></span>
                        <p class="tip" v-if="resultData.param.effect == null">没有训练哦!</p>
                        <p class="tip" v-if="resultData.param.effect == 0">没有训练哦~</p>
                        <p class="tip" v-if="resultData.param.effect == 1">训练效果很棒!</p>
                        <p class="tip" v-if="resultData.param.effect == 2">训练效果非常棒!</p>
                        <p class="tip" v-if="resultData.param.effect == 3">训练效果特别棒!</p>
                    </div>
                </div>
                
                <div v-if="!resultData" class="zanwrap">
                    <span :class="'zanNo zanNoCry'"></span>
                    <p class="tip" >没有训练哦!</p>
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
            <ul class="trainData" v-if="resultData.tran">
                <li>
                   <p class="times">{{resultData.param.tranTotal}}</p> 
                   <p class="name">训练次数</p>
                </li>
                <li>
                   <p class="times">{{resultData.param.tranEffect}}</p> 
                   <p class="name">有效次数</p>
                </li>
                <li>
                   <p class="result">
                       <span class="zan"></span>
                       <span class="num">+{{resultData.param.effect}}</span>
                    </p>
                   <p class="name">训练效果</p>
                </li>
            </ul>
            <!-- 脑氧 -->
            <ul class="trainData" v-if="resultData.rsco2">
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
                       <span class="num">+{{resultData.param.rsco2NoNormal}}</span>
                    </p> 
                   <p class="name">不正常次数</p>
                </li>
            </ul>
            <!-- 血压 -->
            <ul class="trainData" v-if="resultData.bp">
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
                       <span class="num">+{{resultData.param.bpNoNormal}}</span>
                    </p> 
                   <p class="name">不正常次数</p>
                </li>
            </ul>
            <!-- 心率 -->
            <ul class="trainData" v-if="resultData.hr">
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
                       <span class="num">+{{resultData.param.hrNoNormal}}</span>
                    </p> 
                   <p class="name">不正常次数</p>
                </li>
            </ul>
            <!-- 指氧 -->
            <ul class="trainData" v-if="resultData.spo2">
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
                       <span class="num">+{{resultData.param.spo2NoNormal}}</span>
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
            dateDayBuf1 : [],   //日期模板 08.1
            dateDayBuf2 : [],   //日期模板 2018-08-01 
        }
    },
    mounted () {
        this.switchData();
        this.arrTurnDate(this.homeDate,this.homeDate);  //day 
        this.arrTurnWeek();

    },
    methods : {
        /**
         * *  Tab切换
         * */
        tabCut (data) {
            this.curDate = data;
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
                    on: {
                        slideChangeTransitionEnd: function(){
                            if( this.activeIndex == 0 ) {
                                console.log(this.activeIndex);
                                that.switchData(that.dateDayBuf2[0])
                                that.arrTurnDate(that.homeDate,that.dateDayBuf2[0])
                                this.slideTo(1, 10, false);
                            }else if ( this.activeIndex == 2 ){
                                console.log(this.activeIndex);
                                that.switchData(that.dateDayBuf2[2])
                                that.arrTurnDate(that.homeDate,that.dateDayBuf2[2])
                                this.slideTo(1, 10, false);
                            }else if ( this.activeIndex == 1 ) {
                                that.switchData(that.dateDayBuf2[1])
                            } 

                        },
                    },
            }
            return swiperOption;
        },
        switchData (chooseDate) {
            this.bgColor = this.$route.query.type;
            var obj = {
                date : chooseDate ? chooseDate :this.selectDate
            }
            switch ( this.bgColor ) {
                case 'train' :
                    this.title = '训练';
                    getDataTrain(obj).then( res => {
                        this.resultData = res.data.result;
                    })
                    break;
                case 'brain' :
                    this.title = '脑氧';
                    getDataRsco2(obj).then( res => {
                        this.resultData = res.data.result;
                        console.log('rsco2',this.resultData)
                    })
                    break;
                case 'blood' :
                    this.title = '血压';
                    getDataBp(obj).then( res => {
                        this.resultData = res.data.result;
                        console.log('bps',this.resultData)
                    })
                    break;
                case 'heart' :
                    this.title = '心率';
                    getDataHr(obj).then( res => {
                        this.resultData = res.data.result;
                        console.log('hr',this.resultData)
                    })
                    break;
                case 'oxygen' :
                    this.title = '指氧';
                    getDataSpo2(obj).then( res => {
                        this.resultData = res.data.result;
                        console.log('spo2',this.resultData)
                    })
                    break;
            }

        },
        //数组日期 转化
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

                    for(var i=0; i<nDay; i++){
                        console.log(dateDayBuf1[i]);
                    }
                
                    dateDayBuf2[nDay-1] = dateDemo.Format("yyyy-MM-dd");
                    for(var i=nDay-2;i>=0; i--){
                        dateDemo.setDate(dateDemo.getDate()+1);
                        dateDayBuf2[i] = dateDemo.Format("yyyy-MM-dd");
                    }

                    for(var i=0; i<nDay; i++){
                        console.log(dateDayBuf2[i]);
                    }
            }

            //刷新数组
            (function refreshDate(date){
                var dateDemo = new Date(date);
                console.log(dateDemo)
                if(dateDemo >= getHomeDay){
                    dateDemo = getHomeDay;
                }
                dateDemo.setDate(dateDemo.getDate() + nDay/2);
                initDateDay(dateDemo.Format("yyyy-MM-dd"));
                
            })(chooseDate)
            this.dateDayBuf1 = dateDayBuf1;
            this.dateDayBuf2 = dateDayBuf2.reverse();
            console.log(dateDayBuf2)

        },
        arrTurnWeek () {
            /**
            *	nDay          日期数组的长度
            *   nWeek         周的长度
            *   getHomeDay    最终的日期,可以设置为当前日期
            *   dateDayBuf    日期数组
            *   dateWeekBuf   周的数组
            */
            const nDay = 15;
            const nWeek = 3;
            var getHomeDay = new Date('2018-11-09');

            var dateDayBuf = new Array(nDay);
            var dateWeekBuf = new Array(nWeek);

            function initDateWeek(date){
                var dateDemo = new Date(date);
                dateDemo.setDate(dateDemo.getDate() + parseInt(nWeek/2)*7);
                for(var i=nWeek-1;i>=0; i--){
                    dateWeekBuf[i] = getDateOfWeek(dateDemo);
                    dateDemo.setDate(dateDemo.getDate() - 7);
                    
                }

                for(var i=0; i<nWeek; i++){
                    console.log(dateWeekBuf[i]);
                }
            }

            //刷新数组
            function refreshDateWeek(date){
                var dateDemo = new Date(date);
                var dateDemoParam = new Date(date);

                dateDemo.setDate(dateDemo.getDate() + parseInt(nWeek/2)*7);

                if(dateDemo >= getHomeDay){
                    dateDemoParam = getHomeDay;
                }

                initDateWeek(dateDemoParam);
            }


            function getDateOfWeek(dateDemo) {  
                var dateBegin = new Date(dateDemo);  
                var dateEnd = new Date(dateDemo);

                var nInvDay = dateBegin.getDay();  

                dateBegin.setDate(dateBegin.getDate() - nInvDay);
                dateEnd.setDate(dateEnd.getDate() - nInvDay + 6);

                return dateBegin.Format("MM.dd") + '-' + dateEnd.Format("MM.dd");
            }
	        refreshDateWeek('2018-10-01');

        },
        /**
         * 获取数据
         * */
        getData () {


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
<style lang="scss" scoped>
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
               .result{
                   line-height: 10px;
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
</style>

