<template>
    <div class="login-wrap">
        <header-top :title="title"></header-top>
        
        <div class="ban">
            <ul class="tabCut">
                <li>登录</li>
                <li>注册</li>
            </ul>
        </div>
        <form>
            <mt-field  placeholder="请输入手机号/用户名" ></mt-field>
        </form>
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
            title : '注册',
            typeIndex : 1,
        }
    }
}
</script>
<style lang="scss" scoped>
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
            }
        }

    }
</style>


