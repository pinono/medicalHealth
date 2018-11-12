<template>
    <div class="Train">
        <div class="banner-wrap">
            <div class="banner" v-if="homeData">
                <div class="top">
                    <span class="date" v-if="homeData.tran">
                        {{homeData.tran.tranTime}}
                    </span>
                    <span class="right mode">模式：<b v-if="homeData.tran">{{homeData.tran.tranType}}</b></span>
                </div>
                <div class="zan">
                    <p v-if="homeData.tran">
                        <span :class="'zanNo' + homeData.tran.effect"></span>
                        <span v-if="homeData.tran.effect == 0">没有训练哦~</span>
                        <span v-else>训练效果非常棒！</span>
                    </p>
                </div>
            </div>
        </div>

        <section class="homeData-wrap">
            <ul v-if="homeData">
                <li @click="goTrain('train')" >
                        <p v-if="homeData.tran">
                            <span class="icon move"></span>
                            <span class="name">训练</span><span class="minName">(完整度)</span>
                            <span class="datanum">{{homeData.tran.tranComplete}}</span>
                            <span :class="'right zanNum' +  homeData.tran.effect"></span>
                        </p>
                        <p>
                            <span class="data">时长：{{homeData.tran.tranDuration}}</span>
                            <span class="arrow right"></span>
                        </p>
                </li>
                <li @click="goTrain('brain')">
                        <p>
                            <span class="icon brain"></span>
                            <span class="name">脑氧</span><span class="minName">(%)</span>
                            <span class="datanum">{{homeData.rsco2.rsco2Value1}}</span>
                            <span :class="'right zanNum' +  homeData.rsco2.effect"></span>
                        </p>
                        <p>
                            <span class="data">{{homeData.rsco2.access}}</span>
                            <span class="arrow right"></span>
                        </p>

                </li>
                <li @click="goTrain('blood')">
                        <p>
                            <span class="icon blood"></span>
                            <span class="name">血压</span><span class="minName">(mmHg)</span>
                            <span class="datanum">{{homeData.bp.bpHigh}}/{{homeData.bp.bpLow}}</span>
                            <span :class="'right zanNum' +  homeData.bp.effect"></span>
                        </p>
                        <p>
                            <span class="data">{{homeData.bp.access}}</span>
                            <span class="arrow right"></span>
                        </p>
                </li>
                <li @click="goTrain('heart')">
                        <p>
                            <span class="icon heart"></span>
                            <span class="name">心率</span><span class="minName">(次/分)</span>
                            <span class="datanum">{{homeData.hr.hrValue1}}</span>
                            <span :class="'right zanNum' +  homeData.hr.effect"></span>
                        </p>
                        <p>
                            <span class="data">时长：{{homeData.hr.access}}</span>
                            <span class="arrow right"></span>
                        </p>
                </li>
                <li @click="goTrain('oxygen')">
                    <p>
                        <span class="icon yang"></span>
                        <span class="name">指氧</span><span class="minName">(%)</span>
                        <span class="datanum">{{homeData.spo2.spo2Value1}}</span>
                        <span :class="'right zanNum' +  homeData.spo2.effect"></span>
                    </p>
                    <p>
                        <span class="data">时长：{{homeData.spo2.access}}</span>
                        <span class="arrow right"></span>
                    </p>
                </li>
            </ul>
            <div class="goNews" @click="goTrain('stroke')">
                <span class="check-icon"></span>
                国家脑卒中筛查
                <span class="tip right">点击查看<b class="arrow"></b></span>
            </div>
            <div class="goNews userNews" @click="goTrain('memberCenter')">
                <span class="check-icon"></span>
                用户健康档案
                <span class="tip right">点击查看<b class="arrow"></b></span>
            </div>
        </section>
        <div class=""></div>
        <Footer :nowStatus="nowStatus"></Footer>
    </div>
</template>
<script>
import {getDataHome} from '@/api/data/index.js'
import Footer from '@/components/common/footer.vue'

export default {
    components : {
        Footer
    },
    data () {
        return {
            nowStatus : 'home',
            homeData : null,
            selectDate : '',
        }
    },
    mounted () {
        getDataHome().then( res=>{
            this.homeData = res.data.result;
            this.selectDate = res.data.result.date;

        })
    },
    methods : {
        goTrain (purpose) {
            switch (purpose) {
                case 'train' :
                    this.$router.push({path: '/train?type=train&selectDate='+ this.selectDate})
                    break;
                case 'brain' :
                    this.$router.push({path: '/train?type=brain&selectDate='+ this.selectDate})
                    break;
                case 'blood' :
                    this.$router.push({path: '/train?type=blood&selectDate='+ this.selectDate})
                    break;
                case 'heart' :
                    this.$router.push({path: '/train?type=heart&selectDate='+ this.selectDate})
                    break;
                case 'oxygen' :
                    this.$router.push({path: '/train?type=oxygen&selectDate='+ this.selectDate})
                    break;
                case 'stroke' :
                    this.$router.push({path: '/stroke'})
                    break;
                case 'memberCenter' :
                    this.$router.push({path: '/memberCenter'})
                    break;
            }
        }
    }
}
</script>
<style lang="scss">
    .homeData-wrap{
        padding-bottom:100px;
    }
    .Train{
        a{color:#333;}
        .banner-wrap{background:#fff;}
        .banner{
            width:100%;
            height:405px;
            // background:linear-gradient(90deg, #4D9DFF 0%, #3ABFE8 100%);
            background: url('../assets/images/home/banner.png') no-repeat;
            background-size:100%;
            .top{
                padding:30px;
                color:#fff;
                .date{
                    font-size:30px;
                }
                .mode{
                    position: relative;
                    bottom:7px;
                    b{
                        font-size:34px;
                        font-weight: normal;
                        vertical-align: middle;
                    }
                }
            }
            .zan{
                color:#fff;
                text-align: center;
                p{
                    font-size: 28px;
                }
                .zanNo0{
                    width:90px;
                    height:90px;
                    display: block;
                    background:url('../assets/images/home/cryface.png') no-repeat;
                    background-size:100%;
                    margin:50px auto 30px;
                }
                .zanNo1{
                    width:90px;
                    height:90px;
                    display: block;
                    background:url('../assets/images/home/zan-white.png') no-repeat;
                    background-size:100%;
                    margin:50px auto 30px;
                }
                .zanNo1{
                    width:90px;
                    height:90px;
                    display: block;
                    background:url('../assets/images/home/zan-white.png') no-repeat;
                    background-size:100%;
                    margin:50px auto 30px;
                }
                .zanNo2{
                    width:180px;
                    height:90px;
                    display: block;
                    background:url('../assets/images/home/zan-white2.png') no-repeat;
                    background-size:100%;
                    margin:50px auto 30px;
                }
                .zanNo3{
                    width:90px;
                    height:90px;
                    display: block;
                    background:url('../assets/images/home/zan-white3.png') no-repeat;
                    background-size:100%;
                    margin:50px auto 30px;
                }
                .zanNo4{
                    width:90px;
                    height:90px;
                    display: block;
                    background:url('../assets/images/home/zan-white4.png') no-repeat;
                    background-size:100%;
                    margin:50px auto 30px;
                }
                .zanNo5{
                    width:90px;
                    height:90px;
                    display: block;
                    background:url('../assets/images/home/zan-white5.png') no-repeat;
                    background-size:100%;
                    margin:50px auto 30px;
                }
            }
        }
        section{
            li{
                position: relative;
                padding:15px 30px;
                background:#fff;
                border-bottom :1px solid #EEE;
                .icon{
                    display: inline-block;
                    width:44px;
                    height:44px;
                    vertical-align: bottom;
                    margin-right:15px;
                }
                .move{
                    background:url('../assets/images/home/train.png') no-repeat;
                    background-size:100%;
                }
                .brain{
                    background:url('../assets/images/home/brain.png') no-repeat;
                    background-size:100%;
                }
                .blood{
                    background:url('../assets/images/home/blood.png') no-repeat;
                    background-size:100%;
                }
                .heart{
                    background:url('../assets/images/home/heart.png') no-repeat;
                    background-size:100%;
                }
                .yang{
                    background:url('../assets/images/home/yang.png') no-repeat;
                    background-size:100%;
                }
                .name{
                    font-weight: bold;
                    font-size:34px;
                }
                .minName{
                    font-size:24px;
                }
                .datanum{
                    position: absolute;
                    font-size:36px;
                    left:380px;
                    top:30px;
                    color:#777;
                }
                .zanNum1{
                    display: inline-block;
                    width:40px;height:40px;
                    background:url('../assets/images/home/zan.png') no-repeat;
                    background-size:100%;
                    margin-top:7px;
                }
                .zanNum2{
                    display: inline-block;
                    width:80px;height:40px;
                    background:url('../assets/images/home/zan2.png') no-repeat;
                    background-size:100%;
                    margin-top:7px;
                }
                .zanNum3{
                    display: inline-block;
                    width:120px;height:40px;
                    background:url('../assets/images/home/zan3.png') no-repeat;
                    background-size:100%;
                    margin-top:7px;
                }
                .zanNum4{
                    display: inline-block;
                    width:160px;height:40px;
                    background:url('../assets/images/home/zan4.png') no-repeat;
                    background-size:100%;
                    margin-top:7px;
                }
                .zanNum5{
                    display: inline-block;
                    width:200px;height:40px;
                    background:url('../assets/images/home/zan5.png') no-repeat;
                    background-size:100%;
                    margin-top:7px;
                }
                .data{
                    font-size:26px;
                    color:#888;
                    margin-left:65px;
                }
                .arrow{
                    display: inline-block;
                    width:24px;height:24px;
                    background:url('../assets/images/home/arrow-right.png') no-repeat;
                    background-size:100%;
                    margin-top:10px;
                    margin-right:6px;
                }
            }
        }
        .goNews{
            font-size:32px;
            height:130px;font-weight: bold;
            line-height: 130px;
            background:#fff;
            margin-top:10px;
            .check-icon{
                display: inline-block;
                width:34px;height:44px;
                background:url('../assets/images/home/check.png') no-repeat;
                background-size:100%;
                vertical-align: middle;
                margin:0 5px 0 28px;
            }
            .tip{
                font-size: 26px;
                color: #888888;
                .arrow{
                    display: inline-block;
                    width:24px;height:24px;
                    background:url('../assets/images/home/arrow-right.png') no-repeat;
                    background-size:100%;
                    margin-right:26px;
                    position: relative;
                    top:2px;
                }
            }

        }
        .goNews.userNews{
            background:url('../assets/images/home/userBg.png') no-repeat;
            background-size:100%;
            color:#fff;
            .check-icon{
                width:60px;height:58px;
                background:url('../assets/images/home/yao-bag.png') no-repeat;
                background-size:100%;
                vertical-align: middle;
                margin:0 5px 0 28px;
                position: relative;
                bottom: 4px;
            }
            .tip{color:#fff;}
        }
    }
</style>


