<template>
  <div class="manxingbing_page">
    <header-top :title="title"></header-top>
    <!--表单组件-->
    <manage-form @myfromEvent="myfromEvent" :formArry="formArry" :subObj="subObj"></manage-form>

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
      subObj:{},//需要提交的数据对象
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
      var that = this;
      this.title=this.$route.query.titleNav;
      this.paperId=this.$route.query.paperId;
      this.recordId=this.$route.query.recordId;
      //得到表单结构
        getPaperStruct(this.paperId).then( res => {
          this.formArry=res.data.result.fieldList;
        });
      //得到表单数据回显
        if(this.$route.query.recordId != undefined){
          let obj ={
            paperId : this.paperId,
            recordId : this.recordId
          }
          getPaperList(obj).then( res => {
            this.subObj = res.data.result.record;
          });
        }
        console.log('表单提交的参数',that.subObj)
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


