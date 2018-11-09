<template>
    <div class="wrap">
        <div class="swiper" :class="bgColor">
            <section class="date-wrap">
                <swiper :options="swiperOption" ref="mySwiperA">
                    <!-- slides -->
                    <swiper-slide v-for="(item,i) in dateDayBuf" :key="i">{{item}}</swiper-slide>
                </swiper>
            </section>
            <section class="detail-wrap" v-show="dateType == 'day'">
            </section>
            <!-- <section class="detail-wrap" v-show="dateType == 'day'">
                <swiper :options="swiperOption2" ref="mySwiperB">
                    <swiper-slide v-if="zanNum" v-for="(item,i) in zanNum" :key="i">
                        <span :class="'zanNo zanNo' + item"></span>
                        <p class="tip" v-if="item == null">没有训练哦!</p>
                        <p class="tip" v-if="item == 0">训练效果零级棒!</p>
                        <p class="tip" v-if="item == 1">训练效果一级棒!</p>
                        <p class="tip" v-if="item == 2">训练效果二级棒!</p>
                        <p class="tip" v-if="item == 3">训练效果三级棒!</p>
                    </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </section> -->
            <section class="detail-wrap" v-show="dateType == 'week'">
                <swiper :options="swiperOption3" ref="mySwiperC">
                    <!-- slides -->
                    <swiper-slide>
                            <div id="myChart0" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart1" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart2" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart3" :style="{width: '300px',  height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart4" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart5" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart6" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart7" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </section>
            <section class="detail-wrap" v-show="dateType == 'month'">
                <swiper :options="swiperOption4" ref="mySwiperD">
                    <!-- slides -->
                    <swiper-slide>
                            <div id="myChart8" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart9" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart10" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart11" :style="{width: '300px',  height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart12" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart13" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart14" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <swiper-slide>
                            <div id="myChart15" :style="{width: '300px', height: '250px',margin:'0 auto'}"></div>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </section>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'carrousel',
    components: {
        swiper,
        swiperSlide,
    },
    props :['dateType','newDate','zanNum','sltDate'],
    data() {
        return {
            mySwiperA : '',
            mySwiperB : '',
            mySwiperC : '',
            bgColor :'',
            timeType : this.dateType,
            homeDate : this.sltDate,
            dateDayBuf : [],   //日期模板
            swiperOption: {
                notNextTick: true,  
                slidesPerView : 7,
                centeredSlides : true,
                slidesOffsetBefore : 0,
                slidesOffsetAfter : 0,
                
            },
            // swiperOption2: {
            //     navigation: {
            //         nextEl: '.swiper-button-next',
            //         prevEl: '.swiper-button-prev',
            //     },
            //     controller: {
            //         control: this.mySwiperA, //控制Swiper1
            //     },
            // },
            swiperOption3: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                controller: {
                    control: this.mySwiperA, //控制Swiper1
                },
            },
            swiperOption4: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                controller: {
                    control: this.mySwiperA, //控制Swiper1
                },
            },
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiperA.swiper
        }
    },
    mounted() {
        this.turnDate(this.homeDate);
        this.arrTurnDate(this.homeDate,this.homeDate);
        this.bgColor = this.$route.query.type;   //背景颜色
        // this.BindSwiper(); //绑定swiper
    },
    methods : {
        /**
         **  绘制图表
         **/ 
        drawLine(){
            this.BindSwiper();   //绑定swiper
            var myChartArr = [];
            for ( let i = 0; i < 15; i++ ) {
                myChartArr[i] = this.$echarts.init(document.getElementById('myChart'+ i))
                // 绘制图表
                var option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [1, 2, 3, 4, 5, 6, 7],
                        type: 'line'
                    }]
                };
                myChartArr[i].setOption(option);
            }
        },
        /**
         ** swiper 相互绑定
         **/ 
        BindSwiper () {
            this.mySwiperA = this.$refs.mySwiperA.swiper;
            this.mySwiperB = this.$refs.mySwiperB.swiper;
            this.mySwiperC = this.$refs.mySwiperC.swiper;
            this.mySwiperD = this.$refs.mySwiperD.swiper;
            if( this.dateType == 'day' ) {
                this.mySwiperA.controller.control = this.mySwiperB;
            }
            if( this.dateType == 'week' ) {
            this.mySwiperA.controller.control = this.mySwiperC;
            }
            if( this.dateType == 'month' ) {
            this.mySwiperA.controller.control = this.mySwiperD;
            }
            this.mySwiperB.controller.control = this.mySwiperA;//Swiper2控制Swiper1，需要在Swiper1初始化后
            this.mySwiperC.controller.control = this.mySwiperA;//Swiper2控制Swiper1，需要在Swiper1初始化后
            this.mySwiperD.controller.control = this.mySwiperA;//Swiper2控制Swiper1，需要在Swiper1初始化后
        },
        // 传来的时期 转化为日期
        turnDate (str) {
            var date = new Date(str)
            console.log(date)
        }, 
        //数组日期 转化
        arrTurnDate (homeDate,chooseDate) {
            const nDay = 3;
            var getHomeDay = new Date(homeDate);
            var dateDayBuf = new Array(nDay);
            //初始化数组
            function initDateDay(date){
                var dateDemo = new Date(date);
                dateDayBuf[nDay-1] = dateDemo.Format("MM.dd");
                for(var i=nDay-2;i>=0; i--){
                    dateDemo.setDate(dateDemo.getDate()-1);
                    dateDayBuf[i] = dateDemo.Format("MM.dd");
                }

                for(var i=0; i<nDay; i++){
                    console.log(dateDayBuf[i]);
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
            this.dateDayBuf = dateDayBuf;
            console.log(dateDayBuf)
	        // refreshDate('2018-09-07');

        } 
    },
    /**
     * * tab切换时监听日期 : day week month  
     * */ 
    watch : {
        dateType (val,oldval) {
            console.log(val,oldval)
            if( val == 'week' || val == 'month' ) {
                this.drawLine();   
            }
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
    .date-wrap{
        .swiper-wrapper{
            height:82px;
            line-height: 82px;
            margin-left:80px;
            
            .swiper-slide{
                text-align: center;
                width: 100px !important;
                color:#fff;
                font-size:30px;
                opacity: .7;
            }
            .swiper-slide-active{
                font-size:40px;
                opacity: 1;
            }
        }
    }
    .detail-wrap{
        height: 418px;
        .swiper-slide{
            text-align: center;
            height: 418px;
            color:#fff;
            font-size:30px;
        }
        .zanNo{
            display: inline-block;
            width:90px;height:88px;
            margin-top:105px;
            margin-bottom:25px;
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
        }

    }
    
</style>


