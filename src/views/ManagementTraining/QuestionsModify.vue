<template>
  <div class="ui_management_evaluation_plan">
    <div>创建考题</div>
    <div>
      <div @click="toSelectQuestions">选择考题</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "QuestionsModify",
    data() {
      return {}
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

      },
      /**
       *  选择考题
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      toSelectQuestions(){
        this.$goRoute('/SelectQuestions')
      }
    }
  }
</script>

<style scoped>

</style>
