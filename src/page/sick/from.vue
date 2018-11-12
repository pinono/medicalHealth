<template>
  <div class="manxingbing_page">
    <header-top :title="title"></header-top>
    <!--表单组件-->
    <manage-form @myfromEvent="myfromEvent" :formArry="formArry" :recordObj="recordObj"></manage-form>

  </div>
</template>
<script>
  import HeaderTop from '@/components/common/header.vue'
  import manageForm from '@/components/sick/autoManageForm.vue'
  import {getPaperStruct,getPaperList,addDataPaper,updateDataPaper} from '@/api/data/index.js'

export default {
    components : {
      HeaderTop,
      manageForm,
    },
  data(){
    return {
      title : '异常事件填写',//头部组件title名
      formArry : [],     //表单结构--传给组件
      recordObj : {},   //表单数据---传给组件回显
      paperId : '',
      recordId : '',

    }
  },
  mounted(){
    this.getFormInfo();
  },
  methods:{
    //获取表单信息
    getFormInfo(){
      this.title=this.$route.query.titleNav;
      this.paperId=this.$route.query.paperId;
      this.recordId=this.$route.query.recordId;
     if(this.paperId!=undefined){
       //得到表单结构
       getPaperStruct(this.paperId).then( res => {
         this.formArry=res.data.result.fieldList;
         //console.log('结构=',this.formArry)
       });
       //得到表单数据回显
       if(this.$route.query.recordId != undefined){
         let obj ={
           paperId : this.paperId,
           recordId : this.recordId
         }
         getPaperList(obj).then( res => {
           this.recordObj = res.data.result.record;
           /*console.log('数据回显=',this.recordObj)*/
         });
       }
     }
    },
    //提交表单
    myfromEvent(data){
        console.log('data',data)
      if(this.$route.query.fromStatus=='save'){
        let paperId = this.$route.query.paperId;
        addDataPaper(paperId,data).then( res => {
          console.log('添加表单',res)
        })
      }else{
        let paperId = this.$route.query.paperId;
        let recordId = this.$route.query.recordId;
        updateDataPaper(paperId,recordId,data).then( res => {
          console.log('编辑表单',res)
        })
      }
    },



  }

}
</script>
<style lang="scss" scoped>

</style>


