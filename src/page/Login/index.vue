<template>
    <div class="login-wrap">
        <header-top :title="title"></header-top>

        <div class="ban">
            <ul class="tabCut">
                <li :class="status == 'register' ? 'on' : ''" @click="tabCut('register')">注册</li>
                <li :class="status == 'login' ? 'on' : ''" @click="tabCut('login')">登录</li>
            </ul>
        </div>
        <form v-if="status=='register'" class="register-wrap form-wrap">
            <span class="checkPhone" @click="checkPhone()">系统检测</span>
            <mt-field  placeholder="购买设备预留手机号" type="number" v-model="phone" :class="wrongTip == true ? 'on' : ''"  >
                <span class="icon-phone icon"></span>
            </mt-field>
            <div class="wrong-tip" v-if="wrongTip">
                <p>*为保障您的数据安全，请填写购买设备时登记手机号；</p>
                <p>*若是忘记手机号，请拨打客服电话。</p>
            </div>
            <mt-field  placeholder="请输入密码" type="password" v-model="password">
                <span class="icon-psw icon"></span>

            </mt-field>
            <mt-field  placeholder="再输一遍6位密码" type="password" v-model="againPassword">
                <span class="icon-psw icon"></span>
            </mt-field>
            <mt-field  placeholder="设备SN号" type="text" v-model="goodsNum" readonly="readonly">
                <span class="icon-goods icon"></span>
            </mt-field>
            <p class="registerBtn">注册</p>
        </form>
        <form v-else class="login-wrap form-wrap">
            <mt-field  placeholder="购买设备预留手机号" type="number" v-model="phone"  >
                <span class="icon-phone icon"></span>
            </mt-field>
            <mt-field  placeholder="请输入密码" type="password" v-model="password">
                <span class="icon-psw icon"></span>
            </mt-field>
            <!-- <a href="/home"> -->
                <p class="registerBtn" @click="goLogin()">登录</p>
            <!-- </a> -->
            <a class="tip" @click="forgetPassword">忘记登录密码？</a>
        </form>
    </div>
</template>
<script>
import HeaderTop from '@/components/common/header.vue'
import { GoMemLoin } from '@/api/data/index.js'
export default {
    components : {
       HeaderTop
    },
    data () {
        return {
            title : '注册',
            typeIndex : 1,
            phone :'',  //手机号
            password : '' , //密码
            againPassword : '' ,  //再次输入密码
            goodsNum : '' , //设备号
            status:'login',
            wrongTip : false,   //设备错误提示
        }
    },
    mounted () {
        var obj = {
            "phone" : '13678965467',
            "tuserPwd" : '123456'
        }
        GoMemLoin(obj).then( res => {
            console.log('1111')
        })
        this.status == 'register' ? this.title = '注册' : this.title = '登录';
    },
    methods : {
        tabCut (status) {
            this.$set(this,'status',status);
            this.status == 'register' ? this.title = '注册' : this.title = '登录';
        },
        checkPhone () {
            this.wrongTip = true;
        },
        goLogin () {
            this.$router.push({path: '/home'})

        },
        //忘记密码
        forgetPassword(){
          this.$router.push({path: 'forgetPassword'})
        }


    },
    watch : {
        wrongTip () {
            // alert(1)
        }
    }
}
</script>
<style lang="scss">
body{
    background:#fff;
}
    .login-wrap{
        .ban{
            width:100%;
            height:350px;
            background: linear-gradient(0deg, #4D9DFF 0%, #3ABFE8 100%);
            overflow: hidden;
            .tabCut{
                display: flex;
                flex-flow: nowrap row;
                justify-content: space-between;
                color:#fff;
                margin-top:280px;
                li{
                    flex-grow: 1;
                    text-align: center;
                    font-size:34px;
                }
                li.on:after{
                    display: block;
                    content:'';
                    width:38px;height:38px;
                    background:#fff;
                    transform: rotateZ(45deg);
                    margin:0 auto;
                }
            }
        }
        .icon-phone{
            background:url('../../assets/images/login/phone.png') no-repeat;
            background-size:100%;
        }
        .icon-psw{
            background:url('../../assets/images/login/password.png') no-repeat;
            background-size:100%;
        }
        .icon-goods{
            background:url('../../assets/images/login/goods.png') no-repeat;
            background-size:100%;
        }

        .form-wrap{
            padding:75px;
            background:#fff;
            .checkPhone{
                position: absolute;
                right:80px;
                z-index: 2;
                font-size:34px;
                color: #2B8CFF;
                line-height: 60px;
            }
            .icon{
                display: inline-block;
                width:34px;height:34px;
            }
            .mint-cell .mint-cell-wrapper{
                font-size:34px;
                border-bottom:2px solid #D8D8D8;
                padding-left:0;
                padding-bottom:20px;
                margin-bottom:40px;
            }
            .mint-field-core{
                padding-left:50px;
            }
            .mint-field-other{
                width:34px;
                position: absolute;
                top:12px;
                left:0;
            }

            .registerBtn{
                width:600px;
                height:88px;
                font-size:34px;
                line-height: 88px;
                text-align: center;
                color:#fff;
                margin:0 auto;
                border-radius: 4px;
                background: #2B8CFF;
            }
            .tip{
                float: right;
                font-size: 28px;
                color: #888888;
                margin-top:30px;
            }
            .wrong-tip{
                font-size: 24px;
                color: #FA3B19;
                margin-bottom:24px;
            }

        }
        .register-wrap{
            .mint-cell.on:first-of-type .mint-cell-wrapper {
                margin-bottom: 0;
            }
        }

    }
</style>


