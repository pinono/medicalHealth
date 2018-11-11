<template>
    <div>
        <header-top :title="title"></header-top>
        <div class="news-wrap">
            <section class="video" v-if="isVideo">
                <video src="../../assets/images/share/movie.ogg" width="100%;" controls="controls"></video>
            </section>
            <section class="top">
                <h3>{{detailData.title}}</h3>
                <ul>
                    <li>作者：{{detailData.author}}</li>
                    <li>{{detailData.readed}}人已看</li>
                    <li>{{detailData.liked}}点赞</li>

                </ul>
            </section>
            <section class="cont" v-html="detailData.content">
            </section>
            <!-- <footer @click="zan()">赞一下</footer> -->
        </div>
    </div>
</template>
<script>
import HeaderTop from '@/components/common/header.vue'

import { getShareDetail,getVideoDetail} from '@/api/data/share.js'
export default {
    components : {
        HeaderTop,
    },
    data () {
        return {
            title : '',
            isVideo : this.$route.query.video ? true : false,
            artId : this.$route.query.artical ? this.$route.query.artical : this.$route.query.video,
            detailData : '',
        }
    },
    mounted () {
        if (this.$route.query.artical) {
            getShareDetail(this.artId).then( res => {
                this.detailData = res.data.result.artical,
                this.title = this.detailData.title
            })
        } else {
            getVideoDetail(this.artId).then( res => {
                this.detailData = res.data.result.video,
                this.title = this.detailData.title
            })
        }
        
    },
    methods : {
        zan () {
            // window.ZanCount++
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


