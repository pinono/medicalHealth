<template>
    <div>
        <header-top :title="title"></header-top>
        <date-line :dateType='curDate' :newDate="newDate" :zanNum="zanNum"></date-line>
        <div class="cycle-data" :class="bgColor">
            <ul class="dateBar">
                <li @click="tabCut('day')" :class="curDate == 'day' ? 'act': ''">日</li>
                <li @click="tabCut('week')" :class="curDate == 'week' ? 'act': ''">周</li>
                <li @click="tabCut('month')" :class="curDate == 'month' ? 'act': ''">月</li>
            </ul>
            <ul class="trainData" v-if="resultData.param">
                <li>
                   <p class="times">{{resultData.param.tranEffect}}</p> 
                   <p class="name">训练次数</p>
                </li>
                <li>
                   <p class="times">{{resultData.param.tranTotal}}</p> 
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
import dateLine from '@/components/Home/swiper.vue'
import HeaderTop from '@/components/common/header.vue'
import { getDataTrain,getDataHome } from '@/api/data/index.js'
export default {
    components : {
        dateLine,HeaderTop
    },
    data () {
        return {
            bgColor : '',
            title: '训练',
            curDate : 'day',
            memberData: '',
            resultData : '',
            newDate : [],
            zanNum : [],
        }
    },
    mounted () {
        this.switchData();
        this.getData();
    },
    methods : {
        /**
         * *  Tab切换
         * */ 
        tabCut (data) {
            this.curDate = data;
        },
        switchData () {
            this.bgColor = this.$route.query.type;
            // 用户ID 和 登录时间 (传参)
            var obj = {
                date : '2018-8-12'
            }
            
            switch ( this.bgColor ) {
                case 'train' :
                    this.title = '训练';
                    var obj = {
                        dayBegin :'2018-08-01',
                        dayEnd : '2018-08-31'
                    }
                    getDataTrain(obj).then( res => {
                        this.resultData = res.data.result;
                        this.newDate = res.data.result.trans.date;
                        this.zanNum = res.data.result.trans.effect;
                        this.getNewDate();
                        console.log('train',this.resultData)
                    })
                    break;
                case 'brain' :
                    this.title = '脑氧';
                    break;
                case 'blood' :
                    this.title = '血压';
                    break;
                case 'heart' :
                    this.title = '心率';
                    break;
                case 'oxygen' :
                    this.title = '指氧';
                    break;
            }
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
</style>

