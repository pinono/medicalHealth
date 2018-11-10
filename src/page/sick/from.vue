<template>
  <div class="manxingbing_page">
    <header-top :title="title"></header-top>
    <!--表单组件-->
    <manage-form :formArry="formArry"></manage-form>

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
      formArry : [],     //慢病管理的表单结构
      paperId : '',
    }
  },
  mounted(){
    this.getFormInfo();
  },
  methods:{
    //获取表单信息
    getFormInfo(){
      this.paperId=this.$route.query.paperId;
      //得到表单结构
      getPaperStruct(this.paperId).then( res => {
        this.formArry=res.data.result.fieldList;
        console.log('结构=',this.formArry)
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

</style>


