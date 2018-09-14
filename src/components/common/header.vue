<template>
    <div>
        <mt-header :title="title">
			<mt-button icon="back" @click="goPrev()" slot="left"></mt-button>
    	</mt-header>
    </div>
</template>
<style lang="scss">
    .mint-header{
        width: 100%;
        height:80px;font-size: 37px;
        background:#fff;
        color:#333;
        position: fixed;
        top: 0px;
        z-index: 2;
    }
</style>

<script>
export default {
    props : ['title'],
    methods : {
        goPrev () {
            window.history.go(-1);
        },
    }
}
</script>



