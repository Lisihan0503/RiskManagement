<template>
  <div class="ui_management_evaluation_plan">
    <div>{{title}}</div>
    <div>
      <div @click="toSelectUsers">选择用户</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TrainingModify",
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
          this.title = '创建培训'
        } else {
          this.title = '编辑培训'
        }
      },
      /**
       *  选择用户
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      toSelectUsers(){
        this.$goRoute('/SelectUsers',{Modify: 0})
      }
    }
  }
</script>

<style scoped>

</style>
