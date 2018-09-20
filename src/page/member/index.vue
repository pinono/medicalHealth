<template>
    <div class="center_indexPage">
      <div class="c_indexBanner">
        <div class="bannerLogo">
          <img  src="" alt="">
        </div>
        <div class="bannerInfo">
          <p>用户名称</p>
          <p>ID：123456789</p>
          <p>某某的家属</p>
        </div>
        <img class="addFamily" @click="toFamilyIndex" src="../../assets/images/center/addFamily.png" alt="">
      </div>
      <div class="c_indexTap">
        <div class="tapNav">
          <img src="../../assets/images/center/caseIcon.png" alt="">
          <div>
            <p class="tapTitle">病历报告</p>
            <span class="tapclick" @click="toReportCut(1)">点击查看&gt;&gt;</span>
          </div>
        </div>
        <div class="tapNav">
          <img src="../../assets/images/center/bingliTapIcon.png" alt="">
          <div>
            <p class="tapTitle">训练报告</p>
            <span class="tapclick" @click="toReportCut(2)">点击查看&gt;&gt;</span>
          </div>
        </div>
      </div>
      <div class="c_indexList">
        <ul>
          <li class="indexListItem" @click="toListItem(1)">
            <img src="../../assets/images/center/jibenxinxiListIcon.png" alt="">
            <p>基本信息</p>
          </li>
          <li class="indexListItem" @click="toListItem(2)">
            <img src="../../assets/images/center/huanbinglishiListIcon.png" alt="">
            <p>患病历史</p>
          </li>
          <li class="indexListItem" @click="toListItem(3)">
            <img src="../../assets/images/center/saixuanListIcon.png" alt="">
            <p>脑卒中筛查</p>
          </li>
          <li class="indexListItem" @click="toListItem(4)">
            <img src="../../assets/images/center/shebeiListIcon.png" alt="">
            <p>设备信息</p>
          </li>
          <li class="indexListItem" @click="toListItem(5)">
            <img src="../../assets/images/center/changwentiListIcon.png" alt="">
            <p>常见问题</p>
          </li>
          <li class="indexListItem" @click="toListItem(6)">
            <img src="../../assets/images/center/caozuozhinanListIcon.png" alt="">
            <p>操作指南</p>
          </li>
          <li class="indexListItem" @click="toListItem(7)">
            <img src="../../assets/images/center/fangdaoxinxiListIcon.png" alt="">
            <p>随访信息</p>
          </li>
        </ul>
      </div>
      <!--底部Strip-->
      <Footer :nowStatus="nowStatus"></Footer>
    </div>
</template>
<script>
  import Footer from '@/components/common/footer.vue'

export default {
    components : {
        Footer,
    },
  data(){
        return{
          nowStatus : 'memberCenter',
        }
  },
  mounted(){

  },
  methods:{
    //功能块跳转
    toListItem(flag){
        switch (flag){
          case 1://基本信息
            this.$router.push({path: 'basicInfo'})
            break;
          case 2://患病历史
            this.$router.push({path: 'history'})
            break;
          case 3://脑卒中筛查
            this.$router.push({path: 'stroke'})
            break;
          case 4://设备信息
            this.$router.push({path: 'deviceInfo'})
            break;
          case 5://常见问题
            this.$router.push({path: 'problem'})
            break;
          case 6://操作指南
            this.$router.push({path: ''})
            break;
          case 7://随访信息
            this.$router.push({path: 'followUpInfo'})
            break;

        }
    },
    //报告切换
    toReportCut(flag){
        if(flag==1){//病例报告
          this.$router.push({path: 'caseReport'})
        }else{//训练报告
          this.$router.push({path: 'trainingReport'})
        }
  },
    //家属信息
    toFamilyIndex(){
      this.$router.push({path: 'familyIndex'})
    },

  }
}
</script>
<style lang="scss" scoped>
  .center_indexPage{
    width: 100%;
    .c_indexBanner{
        position: relative;
        width: 100%;
        height: 300px;
        background: url("../../assets/images/center/centerBanner.png") no-repeat;
        background-size: 100%;
        display: flex;
        align-items: center;
          .bannerLogo{
            width: 160px;
            height: 160px;
            background: rgba(255,255,255,0.1);
            border-radius: 100px;
            margin-left: 37px;
            margin-right: 45px;
            text-align: center;
            img{
              width: 138px;
              height: 138px;
              margin-top: 11px;
            }
          }
          .bannerInfo{
            font-family: PingFangSC-Medium;
            color: #FFFFFF;
              p{
                font-size: 26px;
              }
              p:nth-child(1){
                font-size: 40px;
                font-weight: bolder;
              }
          }
        .addFamily{
            width: 164px;
            height: 140px;
            position: absolute;
            bottom: 0px;
            right: 0px;
        }
      }
    .c_indexTap{
      width: 750px;
      height: 140px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #fff;
      .tapNav{
        display: flex;
        img{
          width: 76px;
          height: 76px;
          margin-right: 20px;
        }
        .tapTitle{
          font-size: 30px;
          color: #333333;
        }
        .tapclick{
          font-size: 22px;
          color: #FAC919;
        }
      }
    }
    .c_indexList{
      width: 750px;
      height: 790px;
      margin-top: 10px;
      background: #fff;
      overflow-y: auto;
      ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .indexListItem{
          width: 250px;
          height: 210px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #eee;
          border-right: 1px solid #eee;
          img{
            width: 58px;
            height: 58px;
            margin-bottom: 37px;
          }
          p{
            font-size: 30px;
            color: #333;
          }
        }
      }
    }
  }
</style>


