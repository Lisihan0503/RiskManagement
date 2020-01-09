<template>

  <div class="ui_management_evaluation_plan">
    <div class="ui_search_result">
      <el-row style="background: #fafafa;margin-top: 50px;">
        <el-col :span="24">
          <span></span>{{title}}
        </el-col>
      </el-row>
    </div>


    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="培训主题" prop="TraTheme">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="强制培训" prop="JudOption">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="必须通过考试" prop="JudOption">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>

      <!--<div @click="toSelectUsers">选择</div>-->
    </el-form>
  </div>


</template>

<script>
  export default {
    name: "TrainingModify",
    data() {
      return {
        // title: '123',
        ruleForm: {
          TraTheme: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          TraTheme: [
            {required: true, message: '请输入活动名称', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ]
        }
      }
    },
    mounted() {
      this.initPage();
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
      toSelectUsers() {
        this.$goRoute('/SelectUsers', {Modify: 0})
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/commonSass/ManagerCommonSass";
  @import "../../common/style/common.scss";
  @import "../../common/style/resetElemtnUI.css";
  .ui_pagination_box {
    margin-top: 80px;
    float: right;

    .ui_total_num {
      font-size: 14px;
      font-weight: 600;
      color: $navHoverBg;
      margin-top: 6px;
    }
  }

  .ui_btn {
    cursor: pointer;
    height: 37px;
    line-height: 37px;
    text-align: center;
    border-radius: 4px;
    background: #bf7709;
    color: #fff;
    display: inline-block;
    font-size: 16px;
    padding: 0 30px;
    margin-top: 5px;
    margin-left: 20px;
  }


  .el-form {
    width: 45%;
    padding: 15px 12%;

    .el-form-item {

      .el-radio-group {
        width: 120px;


      }

      .el-input {
        width: 590px;
        margin-right: 115px;
        float: right;
      }

      .el-form-item__content {
        .el-form-item__error {
          padding: 6px 0 0 45px;
        }

      }

      .el-select {
        width: 650px;
      }

      .el-icon-circle-plus-outline,
      .el-icon-remove-outline {
        font-weight: 600;
        color: #a0a0a0;
        margin: 0 5px;

      }

    }


    span {
      line-height: 30px;
    }

  }

  .optionColor {
    color: $navHoverBg;
  }

</style>
