<template>
  <div class="ui_management_evaluation_plan">
    <div class="ui_search_result">
      <el-row style="background: #fafafa;margin-top: 50px;">
        <el-col :span="24">
          <span></span>{{ title }}
        </el-col>
      </el-row>
    </div>

    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item label="筛选方式：">
        <el-select v-model="form.region" placeholder="总部分布">
          <el-option label="培训状态1" value="1"></el-option>
        </el-select>
        <el-select v-model="form.region" placeholder="所在机构">
          <el-option label="培训状态1" value="1"></el-option>
        </el-select>
        <el-select v-model="form.region" placeholder="所在国家">
          <el-option label="培训状态1" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="搜索：" class="search">
        <el-input v-model="form.name" style="width:320px"></el-input>
        <div class="fn-left ui_btn selectTraining" @click="selectTraining" style="float: none;">查询</div>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    name: "SelectUsers",
    data() {
      return {
        title: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [{
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%'
        }]
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
      },
      selectTraining(){

      }
    }
  }
</script>


<style lang="scss" scoped type="text/scss">
  @import "../../common/style/commonSass/ManagerCommonSass";
  @import "../../common/style/common.scss";
  @import "../../common/style/resetElemtnUI.css";

  .el-col-11,
  .el-select {
    margin-right: 10px;
    width: 150px;
  }

  .el-form {
    padding: 0 25px;
  }

  .el-form-item {
    display: inline-block;
    margin: 10px 0;
  }

  .fn-right {
    margin-right: 25px;
  }

  .el-col-24 {
    width: 15%;
  }

  .selectTraining {
    display: inline-block;
    margin: 0 0 0 30px;
    padding: 0;
    width: 72px;
    height: 30px;
    line-height: 30px;
  }

</style>
