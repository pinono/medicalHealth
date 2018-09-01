<template>
  <div class="mxb_ContentList">
    <div class="mxb_contentItem">
      <img class="contentItemImg" src="images/aaaa.jpg">
      <div class="contentItemText">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <div class="mxb_contentItem">
      <img class="contentItemImg" src="images/aaaa.jpg">
      <div class="contentItemText">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <div class="mxb_contentItem">
      <img class="contentItemImg" src="images/aaaa.jpg">
      <div class="contentItemText">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <div class="mxb_contentItem">
      <img class="contentItemImg" src="images/aaaa.jpg">
      <div class="contentItemText">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <div class="mxb_contentItem">
      <img class="contentItemImg" src="images/aaaa.jpg">
      <div class="contentItemText">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <div class="mxb_contentItem">
      <img class="contentItemImg" src="images/aaaa.jpg">
      <div class="contentItemText">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <div class="mxb_contentItem">
      <img class="contentItemImg" src="images/aaaa.jpg">
      <div class="contentItemText">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <div class="mxb_contentItem">
      <img class="contentItemImg" src="images/aaaa.jpg">
      <div class="contentItemText">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <div class="mxb_contentItem">
      <img class="contentItemImg" src="images/aaaa.jpg">
      <div class="contentItemText">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <div class="mxb_contentItem">
      <img class="contentItemImg" src="images/aaaa.jpg">
      <div class="contentItemText">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <div class="mxb_contentItem">
      <img class="contentItemImg" src="images/aaaa.jpg">
      <div class="contentItemText">
        <p>中国人民解放军第302医院体检中心</p>
        <p>2018-08-11  21:35:59</p>
      </div>
    </div>
    <div class="mxb_contentItem">
      <img class="contentItemImg" src="images/aaaa.jpg">
      <div class="contentItemText">
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
        changeTab () {
            console.log(111)
        }
    }
}
</script>
<style lang="scss" scoped>
  .mxb_ContentList{
    padding-top: 88px;
    padding-bottom: 98px;
    background: #fff;
  }
  .mxb_contentItem{
    width: 100%;
    height: 205px;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
  }
  .mxb_contentItem .contentItemImg{
    width: 220px;
    height: 165px;
  }
  .mxb_contentItem .contentItemText{
    width: 460px;
    position: relative;
  }
  .mxb_contentItem .contentItemText>p:nth-child(1){
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #000;
    font-size: 34px;
  }
  .mxb_contentItem .contentItemText>p:nth-child(2){
    font-size: 24px;
    color: #888888;
    position: absolute;
    bottom: 0px;
  }
</style>


