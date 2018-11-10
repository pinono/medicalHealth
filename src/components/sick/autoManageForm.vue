<template>
  <div class="myManForm">
      <!--表单列表-->
      <ul class="formList">
        <template v-for="(item,index) in formArry">
          <input type="hidden" :name="item.fieldCode" value=""/>
          <!--静态标签-->
          <li v-if="item.fieldType.typeId==0" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>静态标签</span>
            <input type="text" v-model="staticInp" readonly="readonly"/>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--数字类型-->
          <li v-if="item.fieldType.typeId==1" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>数字类型</span>
            <input type="number" v-model="numInp" />
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--单行文本-->
          <li v-if="item.fieldType.typeId==2" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>单行文本</span>
            <input type="text" v-model="aSingleInp" />
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--多行文本-->
          <li v-if="item.fieldType.typeId==3" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>多行文本</span>
            <p>{{supplementText}}</p>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--日期类型-->
          <li @click="openPicker" v-if="item.fieldType.typeId==4">
            <span>日期类型</span>
            <p>{{dateVal}}</p>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--时间类型-->
          <li @click="openPickerLength" v-if="item.fieldType.typeId==5">
            <span>时间类型</span>
            <p>{{timeVal}}</p>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--单选-->
          <li @click="showOrClosePop(6,'itemFlag')" v-if="item.fieldType.typeId==6">
            <span>单选按钮</span>
            <p>{{radioVal}}</p>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--下拉选项-->
          <li v-if="item.fieldType.typeId==7" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>下拉选项</span>
            <select>
              <option value="1">abc</option>
              <option value="2">bac</option>
              <option value="3">cab</option>
            </select>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--多选-->
          <li @click="showOrClosePop(8,'itemFlag')" v-if="item.fieldType.typeId==8">
            <span>多选按钮</span>
            <p>{{checkBoxStr}}</p>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>

        </template>
      </ul>
    <!--提交按钮-->
    <div class="subFormBtn" @click="submitForm()">提交</div>
<!--
弹窗部分
-->
      <div class="pop_background" @click="showOrClosePop(0)" v-if="popStatus==3||popStatus==6||popStatus==8"></div>
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
      <div class="pop_checkBox" v-if="popStatus==8">
        <mt-checklist
          v-model="checkBoxVal"
          :options="checkBoxPop">
        </mt-checklist>
        <div class="popOmen_btn pop_btn">
          <span @click="showOrClosePop(0)">取消</span>
          <span @click="supplementFn">确定</span>
        </div>
      </div>
      <!--单选框-弹窗-->
      <div class="pop_checkBox pop_radio" v-if="popStatus==6">
        <mt-radio
          v-model="radioVal"
          :options="radioPop">
        </mt-radio>
        <div class="popOmen_btn pop_btn">
          <span @click="showOrClosePop(0)">取消</span>
          <span @click="supplementFn">确定</span>
        </div>
      </div>
      <!--datetime日期组件-->
      <mt-datetime-picker
        ref="dateTimeType"
        type="datetime"
        v-model="dateVal"
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
        ref="timeType"
        type="time"
        v-model="timeVal"
        hour-format="{value}时"
        minute-format="{value}分"
        @confirm="handleConfirmLength">
      </mt-datetime-picker>

  </div>
</template>
<script>
  import moment from 'moment'// 格式化时间
  import {getPaperStruct,getPaperList} from '@/api/data/index.js' //接口
export default {
    props:["formArry"],
    data () {
        return {
          paperId : '',
          fieldList : [],     //表单结构
          supplementText : '',//补充说明表单内容
          supplementPopText : '',//补充说明弹窗内容
          startDate: new Date('1807'),//设置开始时间根据自己的需要
          //endDate: new Date('2018'),//设置结束时间
          radioPop:[],//单选按钮的选项
          checkBoxPop:[],//复选框的选项
          checkBoxVal:[],//复选框选中的值

          itemIndex : 0,//弹窗表示===========

          popStatus : 0,//弹窗显示与隐藏(0是隐藏弹窗,6单选按钮,8复选框,3多行文本)
          subObj:{},//提交表单的参数
          staticInp:'',//0.静态标签
          numInp:null,//1.数字类型
          aSingleInp:'',//2.单行文本
          textareaVal:'',//3.多行文本
          dateVal: '', //4.日期类型
          timeVal: '',//5.时间类型
          radioVal:'',//6.单选按钮选中的值
          checkBoxStr: '',//8.发作先兆的值




          /*赋值时的条件*/
          itemIndex:null,
          itemFieldCode:'',
          itemTypeId:null,
          itemContent:'',






        }
    },
    mounted(){
        this.checkList();
    },
    methods : {
      //赋值
      getItemInfo(index,fieldCode,typeId,content){//参数按顺序是:1.循环索引,2.参数key,3.结构类型,4.结构内容
        this.itemIndex=index;
        this.itemFieldCode=fieldCode;
        this.itemTypeId=typeId;
        this.itemContent=content;
        console.log('赋值时的条件',this.itemIndex+'/'+this.itemFieldCode+'/'+this.itemTypeId+'/'+this.itemContent)

        switch (typeId){
            //静态标签
          case 0:
            this.subObj[fieldCode]=this.staticInp;
            break;
          //数字类型
          case 1:
            this.subObj[fieldCode]=this.numInp;
              break;
          //单行文本
          case 2:
            this.subObj[fieldCode]=this.aSingleInp;




            this.popStatus=3;


            break;
          //多行文本
          case 3:

            break;
          //日期类型
          case 4:
            break;
          //时间类型
          case 5:
            break;
          //单选按钮
          case 6:
            break;
          //下拉菜单
          case 7:
            break;
          //多选按钮
          case 8:
            break;

        }
        console.log(this.subObj)
      },
      //提交表单
      submitForm(){

      },

      //显示隐藏弹窗
      showOrClosePop(popFlag,index){

        if(index==1){
            this.itemIndex=index;
        }
        this.popStatus=popFlag;

      },
      //pop的确定按钮
      supplementFn(){
        this.popStatus=0;//确定后隐藏弹框

        this.supplementText=this.supplementPopText;
        this.checkBoxStr = this.checkBoxVal.join(",");
        //alert(this.itemTypeId+","+this.itemFieldCode+","+this.supplementText)

        if(this.itemTypeId==3){
          this.subObj[this.itemFieldCode]=this.supplementText;
        }else if(this.itemTypeId==6){
          this.subObj[this.itemFieldCode]=this.radioVal;
        }else if(this.itemTypeId==8){
          this.subObj[this.itemFieldCode]=this.checkBoxStr;
        }

        console.log(this.subObj)
      },
      //datetime日期组件
      openPicker () {
        this.$refs.dateTimeType.open()
        this.dateVal=new Date()
      },
      handleConfirm (data) {//成功回调
        let date = moment(data).format("YYYY-MM-DD HH:mm")
        this.dateVal = date
      },
      //time时间组件
      openPickerLength(){
        this.$refs.timeType.open()
      },
      handleConfirmLength(data){//成功回调
        this.timeVal = data
      },
      //复选框组件
      checkList(){
        this.checkBoxPop = [
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
        this.radioPop = [
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
    width: 750px;
    background: #fff;
    height: 1334px;
    overflow-y: auto;
    padding-top: 80px;
    padding-bottom: 190px;
    .subFormBtn{
      width: 700px;
      height: 88px;
      line-height: 88px;
      background: #2B8CFF;
      border-radius: 4px;
      font-family: PingFangSC-Regular;
      font-size: 34px;
      color: #FFF;
      text-align: center;
      position: absolute;
      bottom: 80px;
      left: 0px;
      right: 0px;
      margin: auto;
    }
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
    .pop_checkBox{
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
        .mint-radiolist{
          width: 100%;
          height: 806px;
          overflow-y: auto;
          .mint-cell{
            width: 100%;
            padding: 0px 75px 48px 75px;
            .mint-radio-core{
              width: 40px;
              height: 40px;
              background: #EEE;
              border: none;
              vertical-align: sub;
            }
            .mint-radio-core::after {
              width: 16px;
              height: 16px;
              left: 12px;
              top:12px;
            }
            .mint-radio-input:checked + .mint-radio-core {
              background-color: #26a2ff;
              border-color: #26a2ff;
            }
            label{
              font-size: 34px;
              color: #333333;
            }
          }
        }
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


