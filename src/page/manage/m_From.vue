<template>
  <div class="manxingbing_page">
    <!--表单组件-->
    <manage-form></manage-form>
    <!--提交按钮-->
    <div class="subFormBtn">提交</div>
    <!--底部Strip-->
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/common/footer.vue'
import manageForm from '@/components/common/manageForm.vue'

export default {
    components : {
      Footer,
      manageForm,
    },
  data(){
    return {

    }
  },
  mounted(){

  },
  methods:{

  },

}
</script>
<style lang="scss" scoped>
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
</style>


