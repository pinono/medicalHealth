<template>
    <div class="share-wrap">
        <div class="headNav">
          <div class="banner"></div>
          <ul class="tab">
            <li :class="{ on:curIndex === 1 }" @click="tabCut(1)">科普视频</li>
            <li :class="{ on:curIndex === 2 }" @click="tabCut(2)">健康知识</li>
          </ul>
        </div>
        <!-- 视频列表 -->
        <section class="shareList" v-if="curIndex == 1">
          <div  class="item" v-for="(item,i) in arrVideo" :key="i" @click="goDetail('video',arrVideo[i].videoId)">
            <img class="img" src="../../assets/images/goodsImg.png">
            <div class="text">
              <p>{{item.title}}</p>
              <p>{{item.author}}</p>
              <p>{{item.readed}}人已看{{item.articalId}}</p>
            </div>
          </div>
        </section>
        <!-- 文章列表 -->
        <section class="shareList" v-if="curIndex == 2">
            <div  class="item" v-for="(item,i) in articals" :key="i" @click="goDetail('artical',articals[i].articalId)">
              <img class="img" src="../../assets/images/goodsImg.png">
              <div class="text">
                <p>{{item.title}}</p>
                <p>{{item.author}}</p>
                <p>{{item.readed}}人已看{{item.articalId}}</p>
              </div>
            </div>
        </section>
        <Footer :nowStatus="nowStatus"></Footer>

    </div>
</template>
<script>
import Footer from '@/components/common/footer.vue'
import manageList from '@/components/common/manageIndexList.vue'
import {getShareList,getShareDetail,getVideoList} from '@/api/data/share.js'

export default {
    components : {
        Footer,
      manageList
    },
    data () {
        return {
            nowStatus : 'share',
            curIndex : 1,
            articals : [],
            arrVideo : [],
        }
    },
    mounted () {
      getShareList().then( res => {
        this.articals = res.data.result.articals;

      })
      getVideoList().then ( res => {
        this.arrVideo = res.data.result.videos;
        console.log(res)
      })
    },
    methods : {
      // 切换tab
        tabCut (index) {
            this.$set(this,'curIndex',index)
        },
        // 到详情页
        goDetail (purpose,id) {
            switch (purpose) {
                case 'artical' :
                    this.$router.push({path: '/shareDetail?artical=' + id})
                    break;
                case 'video' :
                    this.$router.push({path: '/shareDetail?video=' + id})
                    break;
            }
        }
        
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
      .item{
        display: block;
        width: 100%;
        height: 205px;
        padding: 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
      }
      .item .img{
        width: 220px;
        height: 165px;
      }
      .item .text{
        width: 460px;
        position: relative;
      }
      .item .text>p:nth-child(1){
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        color: #000;
        font-size: 34px;
      }
      .item .text>p:nth-child(2){
        font-size: 24px;
        color: #888888;
        position: absolute;
        bottom: 0px;
      }
      .shareList {
        background:#fff;
        .item .text>p:nth-child(3) {
          font-size: 0.32rem;
          color: #888888;
          position: absolute;
          bottom: -3px;right:0;
        }
      }
</style>

