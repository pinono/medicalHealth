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
  import manageForm from '@/components/sick/autoManageForm.vue'
  import {getPaperStruct,getPaperList} from '@/api/data/index.js'

export default {
    components : {
      HeaderTop,
      manageForm,
    },
  data(){
    return {
      title : '异常事件填写',//头部组件title名
      fieldList : [],     //表单结构
      paperId : '',
    }
  },
  mounted(){

  },
  methods:{
    //获取表单信息
    getFormInfo(){
      this.paperId=this.$route.query.paperId;
      //得到表单结构
      getPaperStruct(this.paperId).then( res => {
        console.log('结构=',res)
        this.fieldList=res.data.result.fieldList;
      });
      //得到表单数据回显
      if(this.$route.query.recordId != undefined){
        let obj ={
          paperId : this.paperId,
          recordId : 1
        }
        getPaperList(obj).then( res => {
          console.log('数据回显=',res)
        });
      }
    },
  }

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


