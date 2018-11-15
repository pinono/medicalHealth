<template>
  <div class="myManForm">
      <!--表单列表-->
      <ul class="formList">
        <template v-for="(item,index) in formArry">
          <input type="hidden" :name="item.fieldCode" value=""/>
          <!--静态标签-->
          <li v-if="item.fieldType.typeId==0" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>{{item.fieldName}}</span>
            <input type="text" v-model="subObj[item.fieldType]" readonly="readonly"/>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--数字类型-->
          <li v-if="item.fieldType.typeId==1" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>{{item.fieldName}}</span>
            <input type="number" v-model="subObj[item.fieldCode]" />
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--单行文本-->
          <li v-if="item.fieldType.typeId==2" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>{{item.fieldName}}</span>
            <input type="text" v-model="subObj[item.fieldCode]" />
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--多行文本-->
          <li v-if="item.fieldType.typeId==3" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>{{item.fieldName}}</span>
            <p>{{subObj[item.fieldCode]}}</p>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
            <!--多行文本-弹窗-->
            <div class="pop_supplement" v-if="popStatus==3">
              <p class="popsup_title">{{item.fieldName}}</p>
              <textarea placeholder="请填写补充说明" v-model="subObj[item.fieldCode]"></textarea>
              <div class="popsup_btn pop_btn">
                <span @click="showOrClosePop(0)" @click.stop>取消</span>
                <span @click="supplementFn" @click.stop>确定</span>
              </div>
            </div>
          </li>
          <!--日期类型-->
          <li v-if="item.fieldType.typeId==4" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>{{item.fieldName}}</span>
            <p>{{subObj[item.fieldCode]}}</p>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--时间类型-->
          <li v-if="item.fieldType.typeId==5" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>{{item.fieldName}}</span>
            <p>{{subObj[item.fieldCode]}}</p>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--单选-->
          <li v-if="item.fieldType.typeId==6" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>{{item.fieldName}}</span>
            <p>{{subObj[item.fieldCode] == 'null' ? '': subObj[item.fieldCode] }}</p>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--下拉选项-->
          <li v-if="item.fieldType.typeId==7" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>{{item.fieldName}}</span>
            <select v-model="subObj[item.fieldCode]">
              <template v-for="item in allContentArry[item.fieldCode]">
                <option :value="item.value">{{item.label}}</option>
              </template>
            </select>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>
          <!--多选-->
          <li v-if="item.fieldType.typeId==8" @click="getItemInfo(index,item.fieldCode,item.fieldType.typeId,item.fieldType.content)">
            <span>{{item.fieldName}}</span>
            <p>{{subObj[item.fieldCode] == 'null' ? '': subObj[item.fieldCode] }}</p>
            <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
          </li>

        </template>
      </ul>
    <!--提交按钮-->
    <div class="footerBox">
      <div class="subFormBtn" @click="submitForm()">提交</div>
    </div>

<!--
弹窗部分
-->
      <div class="pop_background" @click="showOrClosePop(0)" v-if="popStatus==3||popStatus==6||popStatus==8"></div>
      <!--单选框-弹窗-->
      <div class="pop_checkBox pop_radio" v-if="popStatus==6">
        <mt-radio
          v-model="radioVal"
          :options="allContentArry[itemFieldCode]">
        </mt-radio>
        <div class="popOmen_btn pop_btn">
          <span @click="showOrClosePop(0)">取消</span>
          <span @click="supplementFn">确定</span>
        </div>
      </div>
      <!--多选框-弹窗-->
      <div class="pop_checkBox" v-if="popStatus==8">
        <mt-checklist
          v-model="checkBoxVal"
          :options="allContentArry[itemFieldCode]">
        </mt-checklist>
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
        @confirm="supplementFn"
        :startDate="startDate">
      </mt-datetime-picker>
      <!--time时间组件-->
      <mt-datetime-picker
        ref="timeType"
        type="time"
        v-model="timeVal"
        hour-format="{value}时"
        minute-format="{value}分"
        @confirm="supplementFn">
      </mt-datetime-picker>

  </div>
</template>
<script>
  import moment from 'moment'// 格式化时间
  import {addDataPaper,updateDataPaper} from '@/api/data/index.js' //接口
export default {
    props:["formArry","subObj","allContentArry"],//1.需要表结构数组2.要提交的对象(改变表单就是改变这个对象)3.每一项对应的content对象
    data () {
        return {
          startDate: new Date('1807'),//设置开始时间根据自己的需要
          /*fieldCode事实改变subObj对象*/
          popStatus : 0,//弹窗显示与隐藏(0是隐藏弹窗,6单选按钮,8复选框,3多行文本)
          textareaVal:'',//3.多行文本
          dateVal: '', //4.日期类型
          timeVal: '',//5.时间类型
          radioVal:'',//6.单选按钮选中的值
          checkBoxStr: '',//8.复选框被转化成字符串值
          checkBoxVal:[],//复选框选择完的初始值(跟上面关联)
          /*content*/
          selectContent : [],//选择框的选项
          checkBoxContent : [],//复选框的选项
          radioContent : [],//单选按钮的选项
          /*赋值时的条件*/
          itemIndex : null,
          itemFieldCode : '',
          itemTypeId : null,
          itemContent : '',


        }
    },
  mounted(){

    },
    methods : {
      //提交表单
      submitForm(){
        let myfrom=this.subObj;
        this.$emit('myfromEvent',myfrom);
        console.log('提交',this.subObj);
      },
      //打开弹窗时把数据回显到选择框
      getItemInfo(index,fieldCode,typeId,content){//参数按顺序是:1.循环索引,2.参数key,3.结构类型,4.结构内容
        this.itemIndex=index;
        this.itemFieldCode=fieldCode;
        this.itemTypeId=typeId;
        this.itemContent=content;
        //console.log('赋值时的条件',this.itemIndex+'/'+this.itemFieldCode+'/'+this.itemTypeId+'/'+this.itemContent)

        switch (typeId){
          //多行文本
          case 3:
            this.popStatus=3;
            break;
          //日期类型
          case 4:
            this.$refs.dateTimeType.open();
            if(this.subObj[fieldCode]==''||this.subObj[fieldCode]==undefined){
              this.dateVal=new Date();
            }else{
              this.dateVal=this.subObj[fieldCode];
            }
            break;
          //时间类型
          case 5:
            this.$refs.timeType.open();
            if(this.subObj[fieldCode]==''||this.subObj[fieldCode]==undefined){
              this.timeVal=new Date();
            }else{
              this.timeVal=this.subObj[fieldCode];
            }
            break;
          //单选按钮
          case 6:
            this.popStatus=6;
            this.radioVal=this.subObj[fieldCode];
            break;
          /*//下拉框
          case 7:
            console.log('所有的content=',this.allContentArry)
            break;*/
          //多选按钮
          case 8:
            this.popStatus=8;
            //this.checkBoxContent=content;
            if(this.checkBoxStr!=''){
              this.checkBoxVal= this.checkBoxStr.split(",");
            }
            break;

        }
        console.log(this.subObj)
      },
      //显示隐藏弹窗
      showOrClosePop(popFlag){
        this.popStatus=popFlag;
      },
      //pop的确定按钮,确定并给提交对象赋值
      supplementFn(data){
        this.popStatus=0;//确定后隐藏弹框
        switch (this.itemTypeId){
          case 3://多行文本
            this.popStatus=0;
            break;
          case 4://日期
            let erDate = this.allContentArry[this.itemFieldCode];
            let date = moment(data).format(erDate)
            this.dateVal = date;
            this.subObj[this.itemFieldCode]=this.dateVal;
            break;
          case 5://时间
            this.timeVal = data;
            this.subObj[this.itemFieldCode]=this.timeVal;
            break;
          case 6://单选
            this.subObj[this.itemFieldCode]=this.radioVal;
            break;
          case 2://复选
            this.checkBoxStr = this.checkBoxVal.join(",");
            this.subObj[this.itemFieldCode]=this.checkBoxStr;
            break;
        }
        console.log('需要提交的对象值:',this.subObj)
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
    height: 1050px;
    overflow-y: auto;
    //padding-bottom: 190px;
    .footerBox{
      height: 190px;
      width: 100%;
      position: fixed;
      bottom: 0px;
      background: #fff;
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
        margin: auto;
      }
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
                height: 100%;
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
        z-index: 10;
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


