<template>
    <div class="footer">
        <ul>
            <a href="/home">
                <li @click="changeTab()" :class="nowStatus == 'home' ? 'on' : ''">
                    <b class="home"></b>
                    缺血训练
                </li>
            </a>
            <a href="/sickIndex">
                <li @click="changeTab()" :class="nowStatus == 'sickIndex' ? 'on' : ''">
                    <b class="manage"></b>
                    慢病管理
                </li>
            </a>
            <a href="/shareList">
                <li @click="changeTab()" :class="nowStatus == 'share' ? 'on' : ''">
                    <b class="share"></b>
                    医患分享
                </li>
            </a>
            <a href="/memberCenter">
                <li @click="changeTab()" :class="nowStatus == 'memberCenter' ? 'on' : ''">
                    <b class="member"></b>
                    个人中心
                </li>
            </a>

        </ul>
    </div>
</template>
<script>
export default {
    props :['nowStatus'],
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
            li.on{
                font-size:30px;
                color:#2B8CFF;
                b{
                    width :38px;
                    height:38px;
                    margin-top:.15rem;
                }
                .home{
                    background:url('../../assets/images/common/homeB.png') no-repeat;
                    background-size:100%;
                }
                .manage{
                    background:url('../../assets/images/common/manageB.png') no-repeat;
                    background-size:100%;
                }
                .share{
                    background:url('../../assets/images/common/shareB.png') no-repeat;
                    background-size:100%;
                }
                .member{
                    background:url('../../assets/images/common/memberB.png') no-repeat;
                    background-size:100%;
                }
            }
        }

    }
</style>


