<template>
    <div class="wrap">
        <div class="swiper" :class="bgColor">
            <section class="date-wrap">
                <swiper :options="swiperOption" ref="mySwiperA">
                    <!-- slides -->
                    <swiper-slide>8.1</swiper-slide>
                    <swiper-slide>8.2</swiper-slide>
                    <swiper-slide>8.3</swiper-slide>
                    <swiper-slide>8.4</swiper-slide>
                    <swiper-slide>8.5</swiper-slide>
                    <swiper-slide>8.6</swiper-slide>
                    <swiper-slide>8.7</swiper-slide>
                    <swiper-slide>8.8</swiper-slide>
                    
                    <!-- Optional controls -->
                    <!-- <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
                </swiper>
            </section>

            <section class="detail-wrap">
                <swiper :options="swiperOption2" ref="mySwiperB">
                    <!-- slides -->
                    <swiper-slide>
                        <span class="zan1"></span>
                        <p class="tip">训练效果非常棒！1111</p>
                    </swiper-slide>
                    <swiper-slide>
                        <span class="zan1"></span>
                        <p class="tip">训练效果非常棒！2222</p>
                    </swiper-slide>
                    <swiper-slide>
                        <span class="zan1"></span>
                        <p class="tip">训练效果非常棒！3333</p>
                    </swiper-slide>
                    <swiper-slide>
                        <span class="zan1"></span>
                        <p class="tip">训练效果非常棒！4444</p>
                    </swiper-slide>
                    <swiper-slide>
                        <span class="zan1"></span>
                        <p class="tip">训练效果非常棒！5555</p>
                    </swiper-slide>
                    <swiper-slide>
                        <span class="zan1"></span>
                        <p class="tip">训练效果非常棒！6666</p>
                    </swiper-slide>
                    <swiper-slide>
                        <span class="zan1"></span>
                        <p class="tip">训练效果非常棒！77777</p>
                    </swiper-slide>
                    <swiper-slide>
                        <span class="zan1"></span>
                        <p class="tip">训练效果非常棒！88888</p>
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
        swiperSlide
    },
    data() {
        return {
            mySwiperA : '',
            mySwiperB : '',
            bgColor :'',
            swiperOption: {
                notNextTick: true,
                slidesPerView : 7,
                centeredSlides : true,
                slidesOffsetBefore : 0,
                slidesOffsetAfter : 0,
            },
            swiperOption2: {
                on: {
                    slideNextTransitionEnd: function(){
                        // alert('切换结束了');
                    },
                },
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
        console.log("每次切换都会触发我");
        console.log(this.$refs.mySwiperA.swiper)
        this.bgColor = this.$route.query.type;
        console.log(this.bgColor)
        this.mySwiperA = this.$refs.mySwiperA.swiper;
        this.mySwiperB = this.$refs.mySwiperB.swiper;
        this.mySwiperA.controller.control = this.mySwiperB;//Swiper1控制Swiper2，需要在Swiper2初始化后
        this.mySwiperB.controller.control = this.mySwiperA;//Swiper2控制Swiper1，需要在Swiper1初始化后
        this.swiper.slideTo(3, 1000, false)
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
        .swiper-slide{
            text-align: center;
            height: 418px;
            color:#fff;
            font-size:30px;
        }
        .zan1{
            display: inline-block;
            width:90px;height:88px;
            margin-top:105px;
            margin-bottom:25px;
            background:url('../../assets/images/home/zan-white.png') no-repeat;
            background-size: 100%;
        }
        .tip{
            font-size:30px;
        }

    }
    
</style>


