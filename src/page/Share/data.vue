<template>
    <div class="share-wrap">
        <header-top :title="title"></header-top>
        <div class="banner">

        </div>
        <h5>32424</h5>
        <Footer :nowStatus="nowStatus"></Footer>
        
    </div>
</template>
<script>
import Footer from '@/components/common/footer.vue'
import HeaderTop from '@/components/common/header.vue'

export default {
    components : {
        Footer,HeaderTop
    },
    data () {
        return {
            nowStatus : 'share',
            title : '医院分享',
        }
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
    }
</style>

