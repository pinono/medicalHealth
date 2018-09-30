<template>
    <div class="memFrom">
      <ul class="formList">
        <li>
          <span>*姓名</span>
          <input type="text" />
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <li>
          <span>*性别</span>
          <input type="text" />
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <li @click="openPicker">
          <span>*出生日期</span>
          <p>{{dateTime}}</p>
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <li>
          <span>*身高</span>
          <input type="text" />
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <li>
          <span>*体重</span>
          <input type="text" />
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
        <li>
          <span>医生编号</span>
          <input type="text" />
          <img src="../../assets/images/manage/rightarrowicon@2x.png" alt="">
        </li>
      </ul>
      <!--提交按钮-->
      <div class="subFormBtn" @click="subFormBtn">保存</div>
      <!--时间组件-->
      <mt-datetime-picker
        ref="picker"
        type="date"
        v-model="dateTime"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        @confirm="handleConfirm"
        :startDate="startDate">
      </mt-datetime-picker>
    </div>
</template>
<script>
  import moment from 'moment'// 格式化时间
export default {

    data () {
        return {
          dateTime: '', //时间值
          startDate: new Date('1807'),//设置开始时间根据自己的需要
          //endDate: new Date('2018'),//设置结束时间
        }
    },
    methods : {
      subFormBtn(){},
      //打开时间组件
      openPicker () {
        this.$refs.picker.open()
        this.dateTime=new Date()
      },
      //时间组件确定回调
      handleConfirm (data) {
        let date = moment(data).format("YYYY-MM-DD")
        this.dateTime = date
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
  .mint-datetime-cancel {
    color: #333;
  }

    .memFrom{
      width:100%;
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
            width: 160px;
            color: #333333;
            text-align: left;
            margin-right: 30px;
          }
          input{
            flex: 1;
            font-size: 34px;
            color: #888888;
            background: initial;
            text-align: right;
          }
          p{
            flex: 1;
            font-size: 34px;
            color: #888888;
            border:none;
            text-align: right;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
          }
          img{
            width: 14px;
            height: 24px;
            vertical-align: middle;
            margin-top: 44px;
            margin-left: 50px;
          }
        }
        li:nth-child(1){
          border-top: 1px solid #eee;
        }
      }
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
        margin-top: 40px;
      }
    }
</style>


