<template>
    <div>
        <header-top :title="title"></header-top>
        <date-line></date-line>
        <div class="cycle-data">
            <ul class="dateBar">
                <li>日</li>
                <li class="act">周</li>
                <li>月</li>
            </ul>
            <ul class="trainData">
                <li>
                   <p class="times">1332</p> 
                   <p class="name">训练次数</p>
                </li>
                <li>
                   <p class="times">232</p> 
                   <p class="name">有效次数</p>
                </li>
                <li>
                   <p class="times">32</p> 
                   <p class="name">训练效果</p>
                </li>
            </ul>
            <div class="tip-wrap">
                <h5>训练小贴士</h5>
                <p>
                    怎么测试呢？在平台上根据网页，看别人产品的销量，基本上翻到四页的样子就可以了。然后统计别人的销量，如果产品能有三到五家的商家卖出了巨量。
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import dateLine from '@/components/Home/swiper.vue'
import HeaderTop from '@/components/common/header.vue'

export default {
    components : {
        dateLine,HeaderTop
    },
    data () {
        return {
            // bgColor : '',
            title: '训练'
            
        }
    },
    mounted () {
        // this.bgColor = this.$route.query.color;
        // console.log(this.bgColor)
    }
}
</script>
<style lang="scss" scoped>
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

