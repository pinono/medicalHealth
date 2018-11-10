<template>
    <div>
        <div class="news-wrap">
            <section class="video">
                <video src="../../assets/images/share/movie.ogg" width="100%;" controls="controls"></video>
            </section>
            <section class="top">
                <h3>缺血预适应训练仪简介</h3>
                <ul>
                    <li>作者：某某某</li>
                    <li>123321人已看</li>
                    <li>3242点赞</li>
                </ul>
            </section>
            <section class="cont">
                缺血预适应训练仪是在低氧医学研究的基础上，根据中国目前脑卒中发病特点和治疗现状所研发的治疗和预防脑卒中的医疗器械，具有极大的社会效益、经济效益和临床推广应用价值。
                <h3>1. 中国脑卒中发病情况和治疗现状</h3>
                <p>我国脑卒中具有高发病率、高致残率、高死亡率和高复发率的特点。在我国，卒中正以每年8.7%的速度快速增长，每年新增卒中患者280万，总数超过750万人。一旦发生卒中，溶栓是有效地治疗手段，由于溶栓时间窗短（3-4.5小时）,仅少数（5%）患者能接受溶栓治疗，我国接受溶栓治疗的患者比例更低(不足1%)。对卒中高危患者进行有效干预是预防我国卒中发生和复发的经济、有效措施。然而，即使给予标准化的抗栓和降脂治疗，卒中的年复发率依然高达18.8%。
</p>
            </section>
            <footer @click="zan()">赞一下</footer>
        </div>
    </div>
</template>
<script>
import { getShareDetail } from '@/api/data/share.js'
export default {
    data () {
        return {
            id : this.$route.query.artical
        }
    },
    mounted () {
        alert(this.id)
        getShareDetail(this.id).then( res => {

        })
    },
    methods : {
        zan () {
            alert('已点赞')
        }
    }
}
</script>
<style lang="scss" scoped>
    .news-wrap{
        margin-top:80px;
        background:#fff;
        .video video{
            width:100%;
            // height:440px;
        }
        .top{
            padding:25px;
            border-bottom:1px solid #ddd;
            h3{
                font-size: 40px;
                color: #333333;
            }
            ul{
                display: flex;
                flex-flow: nowrap row;
                justify-content: space-between;
                margin-top:18px;
                li{
                    color:#888;
                    flex-grow: 1;
                    font-size: 24px;
                }
                li:nth-of-type(1){
                    color: #2B8CFF;
                }
                li:nth-of-type(2){
                    text-align: center;
                    
                }
                li:nth-of-type(3){
                    text-align: right;
                }
            }

        }
        .cont,.cont p{
            font-size:30px;
            color:#333;
            line-height: 60px;
            padding:20px 25px;
            h3{
                font-size:32px;
            }
        }
        footer{
            position: fixed;
            bottom:0;
            display: block;
            width:100%;
            height: 98px;
            font-size:34px;
            line-height: 98px;
            text-align: center;
            color:#fff;
            background: #2B8CFF;
        }
    }
</style>


