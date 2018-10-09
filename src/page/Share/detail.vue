<template>
    <div>
        <header-top :title="title"></header-top>
        <share-detail></share-detail>
    </div>
</template>
<script>
import HeaderTop from '@/components/common/header.vue'

import shareDetail from '@/components/Share/detail.vue'
export default {
    components : {
        shareDetail,HeaderTop
    },
    data () {
        return {
            title : '缺血性试用训练仪器缺血性试用训练仪器'
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

