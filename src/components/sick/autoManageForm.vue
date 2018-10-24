<template>
  <div class="myManForm">
      <!--表单列表-->
      <ul class="formList">
        <!--单行文本-->
        <li>
          <span>单行文本</span>
          <input type="text" value="" name=""/>
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <!--多行文本-->
        <li @click="showOrClosePop(3)">
          <span>多行文本</span>
          <p>{{supplementText}}</p>
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <!--数字类型-->
        <li>
          <span>数字类型</span>
          <input type="number" />
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <!--日期类型-->
        <li @click="openPicker">
          <span>日期类型</span>
          <p>{{dateTime}}</p>
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <!--时间类型-->
        <li @click="openPickerLength">
          <span>时间类型</span>
          <p>{{timeLength}}</p>
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <!--多选-->
        <li @click="showOrClosePop(2)">
          <span>多选按钮</span>
          <p>{{checkListStr}}</p>
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <!--单选-->
        <li @click="">
          <span>单选按钮</span>
          <p>{{checkListStr}}</p>
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <!--下拉选项-->
        <li @click="">
          <span>下拉选项</span>
          <select>
            <option value="1">abc</option>
            <option value="2">bac</option>
            <option value="3">cab</option>
          </select>
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <!--静态标签-->
        <li>
          <span>静态标签</span>
          <input type="text" value="1231321" name="" readonly="readonly"/>
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>





      </ul>
















      <div class="pop_background" @click="showOrClosePop(0)" v-if="popStatus==1||popStatus==2||popStatus==3"></div>
      <!--多行文本-弹窗-->
      <div class="pop_supplement" v-if="popStatus==3">
        <p class="popsup_title">补充说明</p>
        <textarea placeholder="请填写补充说明" v-model="supplementPopText"></textarea>
        <div class="popsup_btn pop_btn">
          <span @click="showOrClosePop(0)">取消</span>
          <span @click="supplementFn">确定</span>
        </div>
      </div>
      <!--多选框-弹窗-->
      <div class="pop_omen" v-if="popStatus==2">
        <mt-checklist
          v-model="checkListVal"
          :options="options">
        </mt-checklist>
        <div class="popOmen_btn pop_btn">
          <span @click="showOrClosePop(0)">取消</span>
          <span @click="supplementFn">确定</span>
        </div>
      </div>
      <!--单选框-弹窗-->
      <div class="pop_omen" v-if="popStatus==12">
        <mt-radio
          title="单选框列表"
          v-model="value"
          :options="['选项A', '选项B', '选项C']">
        </mt-radio>
        <div class="popOmen_btn pop_btn">
          <span @click="showOrClosePop(0)">取消</span>
          <span @click="supplementFn">确定</span>
        </div>
      </div>
      <!--datetime日期组件-->
      <mt-datetime-picker
        ref="picker"
        type="datetime"
        v-model="dateTime"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        hour-format="{value}时"
        minute-format="{value}分"
        @confirm="handleConfirm"
        :startDate="startDate">
      </mt-datetime-picker>
      <!--time时间组件-->
      <mt-datetime-picker
        ref="picker1"
        type="time"
        v-model="timeLength"
        hour-format="{value}时"
        minute-format="{value}分"
        @confirm="handleConfirmLength">
      </mt-datetime-picker>

  </div>
</template>
<script>
  import moment from 'moment'// 格式化时间
export default {
    data () {
        return {
          supplementText : '',//补充说明表单内容
          supplementPopText : '',//补充说明弹窗内容
          popStatus : 0,//弹窗显示与隐藏(0是隐藏,1是时间,2是先兆,3说明)
          dateTime: '', //发作的时间值
          startDate: new Date('1807'),//设置开始时间根据自己的需要
          //endDate: new Date('2018'),//设置结束时间
          options:[],//复选框的选项
          checkListVal:[],//复选框选中的值
          checkListStr: '',//发作先兆的值
          timeLength: '',//发作时长值
        }
    },
    mounted(){
        this.checkList();
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
        this.checkListStr =this.checkListVal.join(",");
      },
      //打开发作时间组件
      openPicker () {
        this.$refs.picker.open()
        this.dateTime=new Date()
      },
      //发作时间组件确定回调
      handleConfirm (data) {
        let date = moment(data).format("YYYY-MM-DD HH:mm")
        this.dateTime = date
      },
      //time时间组件
      openPickerLength(){
        this.$refs.picker1.open()
      },

      handleConfirmLength(data){
        this.timeLength = data
      },
      //复选框组件
      checkList(){
        this.options = [
          {
            label: '被禁用',
            value: '值F',
          },
          {
            label: '选中禁用',
            value: '选中禁用的值',
          },
          {
            label: '选项A',
            value: '值A'
          },
          {
            label: '选项B',
            value: '值B'
          },
          {
            label: '选中禁用',
            value: '选中禁用的值',
          },
          {
            label: '选项A',
            value: '值A1'
          },
          {
            label: '选项B',
            value: '值B2'
          },
          {
            label: '选中禁用',
            value: '选中禁用的值3',
          },
          {
            label: '选项A',
            value: '值A4'
          },
          {
            label: '选项B',
            value: '值B5'
          },
          {
            label: '选中禁用',
            value: '选中禁用的值6',
          },
          {
            label: '选项A',
            value: '值A7'
          },
          {
            label: '选项B',
            value: '值B8'
          }

        ];
      },
      //下拉选项
      dropDownFn(){

      },




    }
}
</script>
<style lang="scss">
  /*时间组件样式*/
  .picker-toolbar {
    height: 88px;
  }
  .mint-datetime-action {
    line-height: 88px;
    font-size: 34px;
  }
  .picker-slot {
    font-size: 34px;
  }
  .picker-items {
    height: 400px;
  }
  .mint-datetime-cancel {
    color: #333;
  }

  .myManForm{
    width: 100%;
    background: #fff;
    padding-top: 80px;
      .formList{
        li{
            display: flex;
            align-items: center;
            flex-direction: row;
            width: 100%;
            height: 110px;
            border-bottom: 1px solid #eee;
            padding: 0 25px;
            padding-bottom: 1px;
            font-size: 34px;
              span{
                width: 150px;
                color: #333333;
                text-align: center;
                margin-right: 30px;
              }
              input,select{
                flex: 1;
                font-size: 34px;
                color: #888888;
                text-align: right;
                border: none;
              }
              select {
                direction: rtl;
              }
              select option {
                direction: ltr;
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
                text-align: right;
              }
              img{
                width: 14px;
                height: 24px;
                margin-left: 30px;
              }
          }
        li:nth-child(1){
          border-top: 1px solid #eee;
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
        .mint-checklist{
            width: 100%;
            height: 806px;
            overflow-y: auto;
              .mint-cell{
                width: 100%;
                padding: 0px 75px 48px 75px;
                .mint-checkbox-core{
                  width: 40px;
                  height: 40px;
                  border-radius: 2px;
                  background: #EEEEEE;
                  border: none;
                  vertical-align: sub;
                }
                .mint-checkbox-core::after {
                  width: 12px;
                  height: 24px;
                  top:0px;
                  left: 12px;
                }
                .mint-checkbox-input:checked + .mint-checkbox-core {
                  background-color: #26a2ff;
                  border-color: #26a2ff;
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
        font-size: 34px;
      }
      span:nth-child(2){
        color: #2B8CFF;
      }
    }
  }
</style>


