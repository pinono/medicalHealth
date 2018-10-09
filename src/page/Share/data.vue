<template>
    <div class="share-wrap">
        <header-top :title="title"></header-top>
        <div class="banner">
        </div>

        <section>
            <ul class="tab">
                <li :class="{ on:curIndex === 1 }" @click="tabCut(1)">科普视频</li>
                <li :class="{ on:curIndex === 2 }" @click="tabCut(2)">健康知识</li>
            </ul>
            <manage-list></manage-list>
        </section>
        <Footer :nowStatus="nowStatus"></Footer>
        
    </div>
</template>
<script>
import Footer from '@/components/common/footer.vue'
import HeaderTop from '@/components/common/header.vue'
import manageList from '@/components/common/manageIndexList.vue'

export default {
    components : {
        Footer,HeaderTop,manageList
    },
    data () {
        return {
            nowStatus : 'share',
            title : '医院分享',
            curIndex : 1,
        }
    },
    methods : {
        tabCut (index) {
            // this.curIndex = index
            this.$set(this,'curIndex',index)
        },
    }
}
</script>
<style lang="scss" scoped>
    .share-wrap{
        .banner{
            width:100%;
            height:282px;
            background:#ccc;
        }
        .tab{
            width:100%;
            height:88px;
            display: flex;
            flex-flow: nowrap row;
            justify-content: space-between;
            background:#fff;
            color:#333;
            li{
                font-size: 32px;
                height:88px;
                line-height: 88px;
                text-align: center;
                flex-grow: 1;
                
            }
            li.on{
                color: #2B8CFF;
            }
            li.on:after{
                content: '';
                display: block;
                width:50%;
                height:3px;
                background: #2B8CFF;
                margin: auto;

            }

        }
    }
</style>

