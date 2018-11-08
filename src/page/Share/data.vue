<template>
    <div class="share-wrap">
        <div class="headNav">
          <div class="banner">
          </div>
          <ul class="tab">
            <li :class="{ on:curIndex === 1 }" @click="tabCut(1)">科普视频</li>
            <li :class="{ on:curIndex === 2 }" @click="tabCut(2)">健康知识</li>
          </ul>
        </div>
        <section>
            <manage-list></manage-list>
        </section>
        <Footer :nowStatus="nowStatus"></Footer>

    </div>
</template>
<script>
import Footer from '@/components/common/footer.vue'
import manageList from '@/components/common/manageIndexList.vue'
import {getShareList,getShareDetail} from '@/api/data/index.js'

export default {
    components : {
        Footer,
      manageList
    },
    data () {
        return {
            nowStatus : 'share',
            curIndex : 1,
        }
    },
    mounted () {
      getShareList().then( res => {
        console.log(res)
      })
      getShareDetail().then( res => {
        console.log(res)
      })
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
      padding-top: 370px;
      .headNav{
        width: 100%;
        position: fixed;
        top: 0px;
        z-index: 10;
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
            height:4px;
            background: #2B8CFF;
            margin: auto;

          }

        }
      }

    }
</style>

