<template>
  <div class="contentTabs">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'contentTabs',
    data () {
      return {

      }
    },
    components: {

    },
    mounted () {

    },
    methods: {}
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/common.scss";
  .contentTabs{
    width: 100%;
  }
</style>
