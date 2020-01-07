<template>
  <div class="">
    <template-menu-nav :changeBgColor="changeBgColor"
                       :changeBgColor2="changeBgColor2"
                       :changeBgColor3="changeBgColor3"
                       :changeBgColor4="changeBgColor4"
                       :changeBgColor5="changeBgColor5"></template-menu-nav>
    <!--    自定义颜色-->
<!--    <div id="bg_color">-->
<!--      <div class="block">-->
<!--        <span class="demonstration">欢迎行 自定义背景色</span>-->
<!--        <el-color-picker @active-change="activeChange" v-model="color1"></el-color-picker>-->
<!--      </div>-->
<!--      <div class="block">-->
<!--        <span class="demonstration">一级菜单自定义背景色</span>-->
<!--        <el-color-picker @active-change="activeChange2" v-model="color2"></el-color-picker>-->
<!--      </div>-->
<!--      <div class="block">-->
<!--        <span class="demonstration">一级菜单（选中）自定义背景色</span>-->
<!--        <el-color-picker @active-change="activeChange3" v-model="color3"></el-color-picker>-->
<!--      </div>-->
<!--      <div class="block">-->
<!--        <span class="demonstration">二级菜单自定义背景色</span>-->
<!--        <el-color-picker @active-change="activeChange4" v-model="color3"></el-color-picker>-->
<!--      </div>-->
<!--      <div class="block">-->
<!--        <span class="demonstration">二级菜单(选中)自定义背景色</span>-->
<!--        <el-color-picker @active-change="activeChange5" v-model="color4"></el-color-picker>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>

  import MenuNav from '@/components/MenuNav/MenuNav'

  export default {
    name: '',
    data() {
      return {
        color1: '#409EFF',
        color2: '#381803',
        color3: '#bf7709',
        color4: '#ffffff',
        changeBgColor:null,
        changeBgColor2:null,
        changeBgColor3:null,
        changeBgColor4:null,
        changeBgColor5:'#ffffff',
      }
    },
    components: {
      'template-menu-nav': MenuNav
    },
    watch: {},
    mounted() {

    },
    methods: {
      activeChange(val) {
        this.changeBgColor = val
      },
      activeChange2(val) {
        this.changeBgColor2 = val
      },
      activeChange3(val) {
        this.changeBgColor3 = val
      },
      activeChange4(val) {
        this.changeBgColor4 = val
      },
      activeChange5(val) {
        this.changeBgColor5 = val
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/common.scss";
  #bg_color{
    width: 100%;
    display: inline-block;
    margin-top: 50px;
  }
</style>
