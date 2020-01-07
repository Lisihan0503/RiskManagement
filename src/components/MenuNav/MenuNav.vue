<template>
  <div class="">
    <template-header :changeBgColor="changeBgColor" ></template-header>
    <template-routers-tab :changeBgColor2="changeBgColor2" :changeBgColor3="changeBgColor3"
                          :changeBgColor4="changeBgColor4" :changeBgColor5="changeBgColor5"></template-routers-tab>
    <template-contents-tab-router></template-contents-tab-router>
  </div>
</template>

<script>

  import Header from '@/components/Header/Header'
  import RoutersTab from '@/components/RoutersTab/RoutersTab'
  import ContentsTab from '@/components/ContentsTab/ContentsTab'

  export default {
    name: '',
    props:['changeBgColor','changeBgColor2','changeBgColor3','changeBgColor4','changeBgColor5'],
    data () {
      return {

      }
    },
    components: {
      'template-header':Header,
      'template-routers-tab':RoutersTab,
      'template-contents-tab-router':ContentsTab,
    },
    mounted () {

    },
    methods: {}
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/common.scss";

</style>
