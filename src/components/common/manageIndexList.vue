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
    <div class="item" @click="goDetail('shareDetail')">
      <img class="img" src="../../assets/images/goodsImg.png">
      <div class="text">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods : {
        goDetail (purpose) {
            switch (purpose) {
                case 'shareDetail' :
                    this.$router.push({path: '/shareDetail'})
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
      -webkit-box-orient: vertical;
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

</style>


