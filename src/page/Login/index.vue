<template>
    <div class="login-wrap">
        <header-top :title="title"></header-top>

        <div class="ban">
            <ul class="tabCut">
                <li :class="status == 'register' ? 'on' : ''" @click="tabCut('register')">注册</li>
                <li :class="status == 'login' ? 'on' : ''" @click="tabCut('login')">登录</li>
            </ul>
        </div>

        <!-- 注册 -->
        <form v-if="status=='register'" class="register-wrap form-wrap">
            <span class="checkPhone" @click="checkPhone(phone)">系统检测</span>
            <mt-field  placeholder="购买设备预留手机号" type="number"  v-model="phone" :class="wrongTip == true ? 'on' : ''"  >
                <span class="icon-phone icon"></span>
            </mt-field>
            <div class="wrong-tip" v-if="wrongTip">
                <p>*为保障您的数据安全，请填写购买设备时登记手机号；</p>
                <p>*若是忘记手机号，请拨打客服电话。</p>
            </div>
            <mt-field  placeholder="请输入6位密码" type="password" :attr="{ maxlength: 6,minlength:6 }" v-model="password">
                <span class="icon-psw icon"></span>

            </mt-field>
            <mt-field  placeholder="再输一遍6位密码" type="password" :attr="{ maxlength: 6,minlength:6 }" v-model="againPassword">
                <span class="icon-psw icon"></span>
            </mt-field>
            <mt-field  placeholder="设备SN号" type="text" v-model="deviceSN" readonly="readonly">
                <span class="icon-goods icon"></span>
            </mt-field>
            <p class="registerBtn" @click="register()">注册</p>
        </form>

        <!-- 登录 -->
        <form v-else class="login-wrap form-wrap">
            <mt-field  placeholder="购买设备预留手机号" type="number" v-model="phone"  >
                <span class="icon-phone icon"></span>
            </mt-field>
            <mt-field  placeholder="请输入密码" type="password" v-model="password">
                <span class="icon-psw icon"></span>
            </mt-field>
            <p class="registerBtn" @click="goLogin()">登录</p>
            <a class="tip" @click="forgetPassword">忘记登录密码？</a>
        </form>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import HeaderTop from '@/components/common/header.vue'
import { GoMemLogin,GocheckPhone,GoRegister } from '@/api/data/login.js'
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
            deviceSN : '' , //设备号
            status:'login',
            wrongTip : false,   //设备错误提示
        }
    },
    mounted () {
        this.status == 'register' ? this.title = '注册' : this.title = '登录';
        
    },
    // 自定义指令  blur
    // directives: {
    //     'mtfblur' (el, binding, vnode) {
    //         let mtinput = el.querySelector('input')
    //         mtinput.onblur = function () {

    //         }
    //     }
    // },
    methods : {
        //切换
        tabCut (status) {
            this.$set(this,'status',status);
            this.status == 'register' ? this.title = '注册' : this.title = '登录';
            this.phone = null;
            this.password = null;
        },
        // 检查是否预留手机号
        checkPhone () {
            var phone = this.phone;
            var obj = {
                phone : phone
            }
            if ( !phone ) {
                Toast('手机号不能为空!')
                return false;

            }else {
                GocheckPhone(obj).then( res => {
                    if ( res.data.code == 200 ) {
                        this.deviceSN = res.data.result.device.deviceSN;
                        // Toast('验证通过~')
                    } else {
                        this.wrongTip = true;
                        Toast('手机号输入错误~')
                        this.phone = null;
                        return false;

                    }
                })
            }
            
        },
        // 登录
        goLogin () {
            // var obj = {
            //     "phone" : '13678965467',
            //     "tuserPwd" : '123456'
            // }
            var that = this;
            var obj = {
                phone : that.phone,
                tuserPwd : that.password
            }
            GoMemLogin(obj).then( res => {
                console.log(res)
                if ( res.data.code == 200 ) {
                    Toast('登录成功!');
                    this.$router.push({path: '/home'})
                } else {
                    Toast('账号或密码错误,请重新输入~');
                    that.phone = null;
                    that.password = null;
                }
                // var result = res.data.result;
                // this.setCookie('baseTuserId',result.baseTuserId);
                // this.setCookie('deviceId',result.deviceId)
                // this.setCookie('tuserId',result.tuserId)
            })
        },
        // 注册
        register () {
            var that = this;
            this.checkPhone();
            if ( this.password !== this.againPassword ) {
                Toast('密码不一致!')
                return false;
            }else if ( this.password == '' ||  this.againPassword == ''){
                Toast('密码不能为空!')
                return false;
            }else if ( this.password.length !== 6 || this.againPassword.length !== 6){ 
                Toast('密码只能为6位')
                return false;
            }else if (this.deviceSN !== '' ) {
                Toast('预留手机号未检测!')
            }else {
                var obj = {
                    deviceSN : that.deviceSN,
                    phone : that.phone,
                    tuserPwd : that.password
                }
                GoRegister(obj).then( res => {
                    Toast('注册成功');
                    that.goLogin();
                })
            }
        },
        //忘记密码
        forgetPassword(){
          this.$router.push({path: 'forgetPassword'})
        },
        setCookie (name,value) {
            // var exdate=new Date();
            // exdate.setDate(exdate.getDate()+expiredays);
            // document.cookie=name+ "=" +escape(value)
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


