<template>
  <div class="showProblem_page">
    <header-top :title="title"></header-top>
    <!--表单组件-->
    <div class="proList">
      <template v-for="(item,index) in dataList">
        <div class="listTitle" @click="titleChecked(index)">
          <span>{{item.question}}</span>
          <img v-if="arrowsIcon != index" src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          <img v-if="arrowsIcon==index" :class="arrowsIcon==index?'bottomImg':''" src="../../assets/images/center/arrowsBottom.png" alt="">
        </div>
        <div class="listContent" v-if="arrowsIcon==index">
          {{item.answer}}
        </div>
      </template>
    </div>

  </div>
</template>
<script>
  import HeaderTop from '@/components/common/header.vue'
  import {getCommonProblem} from '@/api/data/index.js'
export default {
  components : {
    HeaderTop
  },
  data(){
    return {
      arrowsIcon : 0,
      title: '常见问题',
      dataList : [],
    }
  },
  mounted(){
    this.getCommonProblemFn();
  },
  methods:{
    titleChecked(flag){
      this.arrowsIcon=flag;
    },
    //获取页面数据
    getCommonProblemFn(){
      getCommonProblem().then( res => {
        console.log('常见问题',res)
        this.dataList = res.data.result.commonProblems;
      })
    }
  },

}
</script>
<style lang="scss" scoped>
  .showProblem_page{
    width: 100%;
    height: 100%;
    background: #fff;
    padding-top: 80px;
    .proList{
      .listTitle{
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 110px;
      line-height: 108px;
      border-bottom: 1px solid #eee;
      padding: 0 25px;
      padding-bottom: 1px;
      font-family: PingFangSC-Regular;
      font-size: 34px;
      span{
        color: #333333;
        text-align: left;
        margin-right: 30px;
        flex: 1;
      }
      img{
        width: 14px;
        height: 25px;
        vertical-align: middle;
        margin-top: 44px;
        margin-left: 50px;
      }
        .bottomImg{
          width: 25px;
          height: 14px;
        }
    }
      div:nth-child(1){
        border-top: 1px solid #eee;
      }
      .listContent{
        width: 100%;
        padding: 20px 45px;
        font-size: 30px;
        color: #888;
        line-height: 50px;
        background: #F2F4F5;
      }
  }
  }

</style>


