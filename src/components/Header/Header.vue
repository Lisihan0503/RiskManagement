<template>
  <div class="header" :style="bg">
    <div class="ui_logo"></div>
    <div class="ui_title">欢迎登录风控系统</div>
  </div>
</template>

<script>


  export default {
    name: '',
    props: ['changeBgColor'],
    data() {
      return {
        bg:this.changeBgColor
      }
    },
    components: {},
    watch:{
      changeBgColor(val){
        this.bg = 'background:'+ val
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/common.scss";

  .header {
    width: 100%;
    height: 74px;
    background: $headerBgColor;
    overflow: hidden;

    .ui_logo {
      width: 118px;
      height: 43px;
      background: url("../../assets/logo.png") no-repeat center;
      background-size: contain;
      margin: 18px 0 0 20px;
      float: left;
    }

    .ui_title {
      font-size: 28px;
      float: left;
      color: $white;
      margin-top: 25px;
      margin-left: 30px;
    }
  }
</style>
