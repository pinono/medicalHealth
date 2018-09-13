<template>
  <div class="strokePage">
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
      title: '脑卒中筛查'
    }
  },
  mounted(){

  },
  methods:{

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


