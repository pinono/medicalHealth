<template>
  <div class="forgetPassword">
    <header-top :title="title"></header-top>
    <section>
      <ul>
        <li>
          <span class="icon">
            <img src="../../assets/images/login/phone.png" alt="">
          </span>
          <input class="inp" type="number" placeholder="购买设备预留手机号" >
        </li>
        <li>
          <span class="icon">
            <img src="../../assets/images/login/password.png" alt="">
          </span>
          <input class="inp" type="password" placeholder="6位密码" >
        </li>
        <li>
          <span class="icon">
            <img src="../../assets/images/login/password.png" alt="">
          </span>
          <input class="inp" type="password" placeholder="再输一遍6位密码" >
        </li>
      </ul>
    </section>
    <div class="footer">
      <a class="okBtn" @click="subBtn(1)">确定</a>
      <a class="noBtn" @click="subBtn(2)">返回</a>
    </div>
  </div>
</template>
<script>
  import HeaderTop from '@/components/common/header.vue'
export default {
  components : {
    HeaderTop
  },
    data () {
        return {
          title: '忘记密码'
        }
    },
    mounted () {

    },
    methods : {
      subBtn(subFlag){//subFlag 1.确定 2.返回
          let obj = {
            loginStatus : 'login',
          }
        this.$router.push({path: 'login' , query:obj})
      }

    },
}
</script>
<style lang="scss">
  .forgetPassword{
    width: 100%;
    height: 1334px;
    background: #fff;
    padding-top: 80px;
    section{
      ul{
        padding: 0px 75px;
        li{
          height: 108px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #D8D8D8;
          .icon{
            width:34px;
            height:34px;
            margin-right: 15px;
            background-size: 100%;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .inp{
            height: 100%;
            flex: 1;
            font-size: 34px;
            background: inherit;
          }
        }
      }
    }
    .footer{
      padding: 0px 75px;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      text-align: center;
      a{
        width: 600px;
        height: 88px;
        line-height: 88px;
        border-radius: 4px;
        font-size: 34px;
      }
      .okBtn{
        color: #fff;
        background: #2B8CFF;
        margin-bottom: 20px;
        border: 2px solid #2B8CFF;
      }
      .noBtn{
        border: 2px solid #999;
        border-radius: 4px;
      }
    }
  }
</style>


