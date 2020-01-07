<template>
  <div class="ui_management_evaluation_plan">
    <div>{{title}}</div>
    <div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SelectUsers",
    data() {
      return {
        title: ''
      }
    },
    mounted() {
      this.initPage()
    },
    methods: {
      /**
       *  初始化
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      initPage() {
        if (this.$route.query.Modify == 0) {
          this.title = '选择用户'
        } else {
          this.title = '受邀用户'
        }
      }
    }
  }
</script>

<style scoped>

</style>
