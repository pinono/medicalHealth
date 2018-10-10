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
        <li>
          <span>*出生日期</span>
          <input type="text" />
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
      <div class="subFormBtn">保存</div>
    </div>
</template>
<script>
export default {

    data () {
        return {

        }
    },
    methods : {
      subFormBtn(){},
    }
}
</script>
<style lang="scss" scoped>
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


