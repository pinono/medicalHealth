<template>
  <div class="strokePage">
    <header-top :title="title"></header-top>
    <!--表单组件-->
    <manage-form @myfromEvent="myfromEvent" :formArry="formArry" :subObj="subObj" :allContentArry="allContentArry"></manage-form>
  </div>
</template>
<script>
  import manageForm from '@/components/sick/autoManageForm.vue'
  import HeaderTop from '@/components/common/header.vue'
  import {getStrokeStruct,getStrokeData,updateStroke} from '@/api/data/index.js'
export default {
  components : {
    manageForm,
    HeaderTop
  },
  data(){
    return {
      title: '脑卒中筛查',
      formArry : [],     //表单结构--传给组件
      subObj:{},//需要提交的数据对象
      allContentArry : {},
    }
  },
  mounted(){
    this.getFormInfo();
  },
  methods:{
    //获取表单信息
    getFormInfo(){
      var that = this;
      //得到表单结构
      getStrokeStruct().then( res => {
        this.formArry=res.data.result.fieldList;
        this.formArry.forEach(function (item) {
          that.$set(that.allContentArry,item.fieldCode, item.fieldType.content)
        })
        console.log('content',this.allContentArry)
      });
      //得到表单数据回显
      let obj ={
        paperId : 3,
        recordId : 0
      }
      getStrokeData(obj).then( res => {
        this.subObj = res.data.result.record;
        delete this.subObj['id'];
      });
      console.log('表单提交的参数',that.subObj)
    },
//提交表单
    myfromEvent(data){
      console.log('编辑表单数据=',data)

      updateStroke(data).then( res => {
        console.log('编辑成功',res)
      })

    },
  },

}
</script>
<style lang="scss" scoped>
  .strokePage{
    height: 1334px;
    background: #fff;
    padding-top: 80px;
  }

</style>


