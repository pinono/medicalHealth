<template>
    <div class="footer">
        <ul>
            <li @click="changeTab('home')" :class="nowStatus == 'home' ? 'on' : ''">
                <b class="home"></b>
                缺血训练
            </li>
            <li @click="changeTab('sickIndex')" :class="nowStatus == 'sickIndex' ? 'on' : ''">
                <b class="manage"></b>
                慢病管理
            </li>
            <li @click="changeTab('shareList')" :class="nowStatus == 'share' ? 'on' : ''">
                <b class="share"></b>
                医患分享
            </li>
            <li @click="changeTab('memberCenter')" :class="nowStatus == 'memberCenter' ? 'on' : ''">
                <b class="member"></b>
                个人中心
            </li>

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
        changeTab (purpose) {
            switch (purpose) {
                case 'home' :
                    this.$router.push({path: '/home'})
                    break;
                case 'sickIndex' :
                    this.$router.push({path: '/sickIndex'})
                    break;
                case 'shareList' :
                    this.$router.push({path: '/shareList'})
                    break;
                case 'memberCenter' :
                    this.$router.push({path: '/memberCenter'})
                    break;
            }
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


