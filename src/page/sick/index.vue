<template>
  <div class="manxingbing_page">
    <!--tap切换-->
    <div class="mxb_headeNav">
      <div class="mxb_navItem" :class="[navTapStatu==1 ? 'navChecke' : '']" @click="navTapCut(1)">慢病管理</div>
      <div class="mxb_navItem" :class="[navTapStatu==2 ? 'navChecke' : '']" @click="navTapCut(2)">随访管理</div>
    </div>
    <!--添加事件-->
    <div class="addItemBtn" @click="goForm('save')">
      <img src="../../assets/images/manage/addmanageItem.png" alt="">
    </div>
    <!--列表-->
    <div class="emptyBlock"></div>
    <div class="contList">
      <template v-for="item in paperArry">
        <div class="item" @click="goForm('update',item)">
          <img class="img" src="../../assets/images/goodsImg.png">
          <div class="text">
            <p>{{item.paperTitle}}</p>
            <p>{{item.updateOn}}</p>
          </div>
        </div>
      </template>
    </div>
    <!--底部Strip-->
    <Footer :nowStatus="nowStatus"></Footer>
  </div>
</template>
<script>
import Footer from '@/components/common/footer.vue'
import {getDataSick,getPaperModel} from '@/api/data/index.js'

export default {
    components : {
      Footer,
    },
  data(){
    return {
      navTapStatu : 1,//导航的切换状态
      nowStatus : 'sickIndex',//底部组件跳转地址
      paperId : '',
      paperArry : [],
    }
  },
  mounted(){
    this.getDateList();
  },
  methods:{
    //tap切换
    navTapCut(tapFlag){
      this.navTapStatu=tapFlag;
      this.getDateList();
    },
    //跳转表单
    goForm(myForm,paperItem){
      var obj ={};
      var titleNav = '';
      if(myForm=='save'){ //添加
        if(this.navTapStatu==1){
          titleNav='慢病管理填写';
        }else if(this.navTapStatu==2){
          titleNav='随访信息填写';
        }
        obj.paperId = this.paperId;
        obj.fromStatus = 'save';
      }else{      //编辑
        if(this.navTapStatu==1){
          titleNav='慢病管理编辑';
        }else if(this.navTapStatu==2){
          titleNav='随访信息编辑';
        }
        obj.paperId = paperItem.paperId;
        obj.recordId = paperItem.recordId
        obj.fromStatus = 'update';
      }
      obj.titleNav = titleNav
      this.$router.push({path: 'sickFrom',query:obj})
    },
    //请求数据
    getDateList(){
      let obj =this.navTapStatu
      getDataSick(obj).then( res => {
        if(res.data.result.paperList.length>0) {
          this.paperArry = res.data.result.paperList;
        }
      })
      getPaperModel(obj).then( res => {
        if(res.data.result.papers.length==0){
          this.paperId=null;
        }else{
          this.paperId = res.data.result.papers[0].paperId;
        }

      })
    },



  }

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
  }
  .emptyBlock{
    width:100%;
    height: 88px;
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


