<template>
    <div class="Train">
        <div class="banner-wrap">
            <div class="banner">
                <div class="top">
                    <span class="date">
                        2018-09-12 14:00
                    </span>
                    <span class="right mode">模式：<b>中级</b></span>
                </div>
                <div class="zan">
                    <p>
                        <span class="zanNo2"></span>
                        训练效果非常棒！
                    </p>
                </div>
            </div>
        </div>

        <section>
            <ul>
                <li @click="goTrain('train')">
                        <p>
                            <span class="icon move"></span>
                            <span class="name">训练</span><span class="minName">(完整度)</span>
                            <span class="datanum">90</span>
                            <span class="zanNum right"></span>
                        </p>
                        <p>
                            <span class="data">时长：00时25分</span>
                            <span class="arrow right"></span>
                        </p>
                </li>
                <li @click="goTrain('brain')">
                        <p>
                            <span class="icon brain"></span>
                            <span class="name">脑氧</span><span class="minName">(完整度)</span>
                            <span class="datanum">90</span>
                            <span class="zanNum right"></span>
                        </p>
                        <p>
                            <span class="data">时长：00时25分</span>
                            <span class="arrow right"></span>
                        </p>

                </li>
                <li @click="goTrain('blood')">
                        <p>
                            <span class="icon blood"></span>
                            <span class="name">血压</span><span class="minName">(完整度)</span>
                            <span class="datanum">90</span>
                            <span class="zanNum right"></span>
                        </p>
                        <p>
                            <span class="data">时长：00时25分</span>
                            <span class="arrow right"></span>
                        </p>
                </li>
                <li @click="goTrain('heart')">
                        <p>
                            <span class="icon heart"></span>
                            <span class="name">心率</span><span class="minName">(完整度)</span>
                            <span class="datanum">90</span>
                            <span class="zanNum right"></span>
                        </p>
                        <p>
                            <span class="data">时长：00时25分</span>
                            <span class="arrow right"></span>
                        </p>
                </li>
                <li @click="goTrain('oxygen')">
                    <p>
                        <span class="icon yang"></span>
                        <span class="name">指氧</span><span class="minName">(完整度)</span>
                        <span class="datanum">90</span>
                        <span class="zanNum right"></span>
                    </p>
                    <p>
                        <span class="data">时长：00时25分</span>
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
import Footer from '@/components/common/footer.vue'

export default {
    components : {
        Footer
    },
    data () {
        return {
            nowStatus : 'home',
        }
    },
    methods : {
        goTrain (purpose) {
            switch (purpose) {
                case 'train' :
                    this.$router.push({path: '/train?type=train'})
                    break;
                case 'brain' :
                    this.$router.push({path: '/train?type=brain'})
                    break;
                case 'blood' :
                    this.$router.push({path: '/train?type=blood'})
                    break;
                case 'heart' :
                    this.$router.push({path: '/train?type=heart'})
                    break;
                case 'oxygen' :
                    this.$router.push({path: '/train?type=oxygen'})
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
                    font-size:44px;
                    left:380px;
                    top:30px;
                    color:#777;
                }
                .zanNum{
                    display: inline-block;
                    width:40px;height:40px;
                    background:url('../assets/images/home/zan.png') no-repeat;
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
            margin-bottom:98px;
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


