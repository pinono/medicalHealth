<template>
  <div class="myManForm">
      <!--表单列表-->
      <ul class="formList">
        <li @click="showOrClosePop(1)">
          <span>发作时间</span>
          <input type="time" />
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <li>
          <span>发作地点</span>
          <input type="text" />
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <li @click="showOrClosePop(2)">
          <span>发作先兆</span>
          <p></p>
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <li>
          <span>发作状态</span>
          <input type="text" />
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <li>
          <span>发作类型</span>
          <input type="text" />
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <li>
          <span>诱发因素</span>
          <input type="text" />
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <li>
          <span>发作时长</span>
          <input type="text" />
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <li @click="showOrClosePop(3)">
          <span>补充说明</span>
          <p>{{supplementText}}</p>
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
      </ul>
      <div class="pop_background" @click="showOrClosePop(0)" v-if="popStatus==1||popStatus==2||popStatus==3"></div>
      <!--补充说明-弹窗-->
      <div class="pop_supplement" v-if="popStatus==3">
        <p class="popsup_title">补充说明</p>
        <textarea placeholder="请填写补充说明" v-model="supplementPopText"></textarea>
        <div class="popsup_btn pop_btn">
          <span @click="showOrClosePop(0)">取消</span>
          <span @click="supplementFn">确定</span>
        </div>
      </div>
      <!--发作先兆-弹窗-->
      <div class="pop_omen" v-if="popStatus==2">
        <ul>
          <li>
            <input type="checkbox" id="popOmen1">
            <label for="popOmen1">心慌1</label>
          </li>
          <li>
            <input type="checkbox" id="popOmen2">
            <label for="popOmen2">心慌2</label>
          </li>
          <li>
            <input type="checkbox" id="popOmen3">
            <label for="popOmen3">心慌3</label>
          </li>
          <li>
            <input type="checkbox" id="popOmen4">
            <label for="popOmen4">心慌4</label>
          </li>
          <li>
            <input type="checkbox" id="popOmen5">
            <label for="popOmen5">心慌5</label>
          </li>
          <li>
            <input type="checkbox" id="popOmen6">
            <label for="popOmen6">心慌6</label>
          </li>

          <li>
            <input type="checkbox" id="popOmen6">
            <label for="popOmen6">心慌6</label>
          </li>
          <li>
            <input type="checkbox" id="popOmen6">
            <label for="popOmen6">心慌6</label>
          </li>
          <li>
            <input type="checkbox" id="popOmen6">
            <label for="popOmen6">心慌6</label>
          </li>
          <li>
            <input type="checkbox" id="popOmen6">
            <label for="popOmen6">心慌6</label>
          </li>
          <li>
            <input type="checkbox" id="popOmen6">
            <label for="popOmen6">心慌6</label>
          </li>
          <li>
            <input type="checkbox" id="popOmen6">
            <label for="popOmen6">心慌6</label>
          </li>
        </ul>
        <div class="popOmen_btn pop_btn">
          <span @click="showOrClosePop(0)">取消</span>
          <span @click="supplementFn">确定</span>
        </div>
      </div>
      <!--发作时间-弹窗-->
      <div class="pop_time" v-if="popStatus==1"></div>
  </div>
</template>
<script>
export default {
    data () {
        return {
          supplementText : '',//补充说明表单内容
          supplementPopText : '',//补充说明弹窗内容
          popStatus : 0,//弹窗显示与隐藏(0是隐藏,1是时间,2是先兆,3说明)
        }
    },
    methods : {
      //显示隐藏弹窗
      showOrClosePop(popFlag){
        if(popFlag == 3){
          this.supplementPopText=this.supplementText;
        }
        this.popStatus=popFlag;
        console.log(this.popStatus)
      },
      //说明弹窗的内容赋值给表单
      supplementFn(){
        this.supplementText=this.supplementPopText;
        this.popStatus=0;
      },




    }
}
</script>
<style lang="scss" scoped>
  .myManForm{
    width: 100%;
    background: #fff;
      .formList{
          li{
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
                width: 150px;
                color: #333333;
                text-align: center;
                margin-right: 30px;
              }
              input{
                flex: 1;
                font-size: 34px;
                color: #888888;
              }
              p{
                flex: 1;
                font-size: 34px;
                color: #888888;
                border:none;
                line-height: 52px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              img{
                width: 14px;
                height: 24px;
                vertical-align: middle;
                margin-top: 44px;
                margin-left: 50px;
              }
          }
      }
      .pop_background{
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background: #000;
        position: fixed;
        top: 0;
      }
      .pop_supplement{
        width: 600px;
        height: 460px;
        background: #FFFFFF;
        border-radius: 10px;
        position: fixed;
        left: 0px;
        right: 0px;
        bottom: 0px;
        top: 0px;
        margin: auto;
        font-size: 34px;
        color: #333333;
        text-align: center;
          .popsup_title{
            font-size: 34px;
            color: #333333;
            line-height: 108px;
            text-align: center;
          }
          textarea{
            width: 540px;
            height: 234px;
            background: #F2F4F5;
            font-size: 34px;
            color: #333333;
          }
      }
      .pop_omen{
        position: fixed;
        left: 0px;
        right: 0px;
        bottom: 0px;
        top: 0px;
        margin: auto;
        width: 600px;
        height: 948px;
        background: #FFF;
        border-radius: 10px;
        padding-top: 54px;
          ul{
            width: 100%;
            height: 806px;
            overflow-y: auto;
              li{
                width: 100%;
                padding-bottom: 48px;
                input{
                  width: 40px;
                  height: 40px;
                  margin-left: 70px;
                  margin-right: 15px;
                  vertical-align: sub;
                }
                label{
                  font-size: 34px;
                  color: #333333;
                }
              }
          }

      }
      .pop_btn{
      width: 100%;
      height: 88px;
      line-height: 88px;
      display: flex;
      justify-content: space-around;
      border-top: 1px solid #eee;
      position: absolute;
      bottom: 0px;
      background: #fff;
      z-index: 2;
      span{
        text-align: center;
      }
      span:nth-child(2){
        color: #2B8CFF;
      }
    }
  }
</style>


