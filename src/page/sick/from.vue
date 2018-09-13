<template>
  <div class="manxingbing_page">
    <header-top :title="title"></header-top>
    <!--表单组件-->
    <manage-form></manage-form>
    <!--提交按钮-->
    <div class="subFormBtn">提交</div>
  </div>
</template>
<script>
  import HeaderTop from '@/components/common/header.vue'
  import manageForm from '@/components/sick/manageForm.vue'

export default {
    components : {
      HeaderTop,
      manageForm,
    },
  data(){
    return {
      title : '异常事件填写',//头部组件title名
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


