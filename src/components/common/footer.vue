<template>
    <div class="footer">
        <ul>
            <li @click="changeTab()">
                <b class="home"></b>
                缺血训练
            </li>
            <li @click="changeTab()">
                <b class="manage"></b>
                慢病管理
            </li>
            <li @click="changeTab()">
                <b class="share"></b>
                医患分享
            </li>
            <li @click="changeTab()">
                <b class="member"></b>
                个人中心
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods : {
        changeTab () {
            console.log(111)
        }
    }
}
</script>
<style lang="scss" scoped>
    .footer{
        width:100%;
        position:fixed;
        bottom:0;
        ul{
            border-top: 1px solid #eee;
            display: flex;
            width:100%;
            height:98px;
            background:#fff;
            flex-flow: nowrap row;
            justify-content: space-around;
            li{
                font-size: 22px;
                color:#888;
                b{
                    display: block;
                    width :48px;
                    height:48px;
                    margin:0 auto;
                    margin-top:.1rem;

                    }
                    .home{
                        background:url('../../assets/images/common/homeA.png') no-repeat;
                        background-size:100%;
                    }
                    .manage{
                        background:url('../../assets/images/common/manageA.png') no-repeat;
                        background-size:100%;
                    }
                    .share{
                        background:url('../../assets/images/common/shareA.png') no-repeat;
                        background-size:100%;
                    }
                    .member{
                        background:url('../../assets/images/common/memberA.png') no-repeat;
                        background-size:100%;
                    }
            }
        }

    }
</style>


