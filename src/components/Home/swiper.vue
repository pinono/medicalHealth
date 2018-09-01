<template>
    <div class="wrap">
        <div class="swiper">
            <section class="date-wrap">
                <swiper :options="swiperOption" ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide>8.2</swiper-slide>
                    <swiper-slide>8.3</swiper-slide>
                    <swiper-slide>8.4</swiper-slide>
                    <swiper-slide>8.5</swiper-slide>
                    <swiper-slide>8.6</swiper-slide>
                    <swiper-slide>8.7</swiper-slide>
                    <swiper-slide>8.8</swiper-slide>
                    <swiper-slide>8.9</swiper-slide>
                    
                    <!-- Optional controls -->
                    <!-- <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
                </swiper>
            </section>

            <section class="detail-wrap">
                <swiper :options="swiperOption2" ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide>
                        <span class="zan1"></span>
                        <p class="tip">训练效果非常棒！</p>
                    </swiper-slide>
                    <swiper-slide>
                        <span class="zan1"></span>
                        <p class="tip">训练效果非常棒！</p>
                    </swiper-slide>
                    <swiper-slide>
                        <span class="zan1"></span>
                        <p class="tip">训练效果非常棒！</p>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <!-- <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
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
     swiperOption: {
       // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
       notNextTick: true,
       slidesPerView : 7,
        centeredSlides : true,
        slidesOffsetBefore : 0,
        slidesOffsetAfter : 0,
        loop : true,
     },
     swiperOption2: {
        loop : true,
     },
      computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
   }
 },
 
}
</script>
<style lang="scss">
    .swiper{
        background: #2B8CFF;
        
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


