<template>
  <div class="manxingbing_page">
    <!--tap切换-->
    <div class="mxb_headeNav">
      <div class="mxb_navItem" :class="[navTapStatu==1 ? 'navChecke' : '']" @click="navTapCut(1)">异常事件</div>
      <div class="mxb_navItem" :class="[navTapStatu==2 ? 'navChecke' : '']" @click="navTapCut(2)">误报事件</div>
    </div>
    <!--添加事件-->
    <div class="addItemBtn" @click="addManItemFn">
      <img src="../../assets/images/manage/addmanageItem.png" alt="">
    </div>
    <!--列表组件-->
    <manage-list></manage-list>
    <!--底部Strip-->
    <Footer :nowStatus="nowStatus"></Footer>
  </div>
</template>
<script>
import Footer from '@/components/common/footer.vue'
import manageList from '@/components/common/manageIndexList.vue'

export default {
    components : {
      Footer,
      manageList,
    },
  data(){
    return {
      navTapStatu : 1,//导航的切换状态
      nowStatus : 'sick',
    }
  },
  mounted(){},
  methods:{
    //tap切换
    navTapCut(tapFlag){
    this.navTapStatu=tapFlag;
    },
    //添加管理事件
    addManItemFn(){
      this.$router.push({path: 'sickFrom'})
    },
  },

}
</script>
<style lang="scss" scoped>
  .navChecke{
    border-bottom: 4px solid #2B8CFF;
    color: #2B8CFF;
  }
  .manxingbing_page{
    width: 100%;
    height: 100%;
  }
  .mxb_headeNav{
    width: 100%;
    height: 88px;
    display: flex;
    font-size: 32px;
    color: #333333;
    justify-content: space-around;
    position: fixed;
    background: #fff;
    z-index: 2;
    border-bottom: 1px solid #eee;
  }
  .mxb_headeNav .mxb_navItem{
    width: 186px;
    height: 88px;
    line-height: 88px;
    text-align: center;
    box-sizing: border-box;
  }
  .addItemBtn{
    width: 120px;
    height: 120px;
    text-align: center;
    background: rgba(43,140,255,0.1);
    border-radius: 60px;
    position: fixed;
    bottom: 168px;
    right: 34px;
    z-index: 5;
    img{
      width: 100px;
      height: 100px;
      margin-top: 10px;
    }
  }
</style>


