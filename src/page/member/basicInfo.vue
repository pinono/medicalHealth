<template>
  <div class="personalInfo_page">
    <header-top :title="title"></header-top>
    <!--表单组件-->
    <mem-from></mem-from>
  </div>
</template>
<script>
  import memFrom from '../../components/member/memberFrom.vue'
  import HeaderTop from '@/components/common/header.vue'
export default {
  components : {
    memFrom,
    HeaderTop
  },
  data(){
    return {
      title: '基本信息'
    }
  },
  mounted(){

  },
  methods:{

  },

}
</script>
<style lang="scss" scoped>
  .personalInfo_page{
    height: 1334px;
    background: #fff;
    padding-top: 80px;
  }

</style>


