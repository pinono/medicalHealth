<template>
  <div class="contList">
    <div class="item" @click="goDetail('shareDetail')">
      <img class="img" src="../../assets/images/goodsImg.png">
      <div class="text">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <div class="item" @click="goDetail('shareDetail')">
      <img class="img" src="../../assets/images/goodsImg.png">
      <div class="text">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <section class="shareList">
      <div  class="item" v-for="(item,i) in arrActs" :key="i" @click="goDetail('shareDetail',arrActs[i].articalId)">
        <img class="img" src="../../assets/images/goodsImg.png">
        <div class="text">
          <p>{{item.title}}</p>
          <p>{{item.author}}</p>
          <p>{{item.readed}}人已看{{item.articalId}}</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
    props : ['arrActs'],
    data () {
        return {

        }
    },
    mounted () {
      console.log(this.arrActs)
    },
    methods : {
        goDetail (purpose,id) {
            switch (purpose) {
                case 'shareDetail' :
                    this.$router.push({path: '/shareDetail?artical=' + id})
                    break;
            }
        }
    },

}
</script>
<style lang="scss" scoped>
  .contList{
    padding-bottom: 98px;
    background: #fff;
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
  }
  .shareList {
    .item .text>p:nth-child(3) {
      font-size: 0.32rem;
      color: #888888;
      position: absolute;
      bottom: -3px;right:0;
    }
  }
</style>


