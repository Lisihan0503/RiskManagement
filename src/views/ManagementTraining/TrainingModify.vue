<template>

  <div class="ui_management_evaluation_plan">
    <div class="ui_search_result">
      <el-row style="background: #fafafa;margin-top: 50px;">
        <el-col :span="24">
          <span></span>{{title}}
        </el-col>
      </el-row>
    </div>


    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">

      <el-form-item label="培训主题" prop="TraTheme" class="TraTheme">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="强制培训" prop="ComTraining">
        <el-radio-group v-model="ruleForm.ComTraining">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="必须通过考试" prop="MutPasExam">
        <el-radio-group v-model="ruleForm.MutPasExam">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="通过考试分数线" prop="PassScoreLine">
        <el-input v-model="ruleForm.PassScoreLine"></el-input>
      </el-form-item>

      <el-form-item label="培训截止日期" required prop="date1">
        <el-date-picker type="date" placeholder="请选择" v-model="ruleForm.date1"></el-date-picker>
      </el-form-item>

      <el-form-item label="受邀用户" prop="NvitedUsers">
        <div class="chooseNvitedUsers" @click="toSelectUsers">选择</div>
      </el-form-item>

      <el-form-item label="活动形式" prop="TrainingDescription">
        <el-input type="textarea" v-model="ruleForm.TrainingDescription" placeholder="请输入培训描述"></el-input>
      </el-form-item>

      <el-form-item label="选择章节" prop="SelectionSection">
        <el-select v-model="ruleForm.region" placeholder="请选择">
          <el-option label="章节一" value="shanghai"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="选择考题" prop="SelectQuestion">
        <div class="chooseNvitedUsers" @click="toSelectQuestion">选择</div>
      </el-form-item>

      <el-form-item class="TraTheme">
        <div class="el-input">
          <div class="fn-right">
            <div class="fn-left ui_btn" >确认</div>
            <div class="fn-left ui_btn" >返回</div>
          </div>
        </div>
      </el-form-item>

    </el-form>
  </div>


</template>

<script>
  export default {
    name: "TrainingModify",
    data() {
      return {
        title: '',
        ruleForm: {
          TraTheme: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          ComTraining: '',
          MutPasExa: '',
          PassScoreLine: '',
          NvitedUsers: '',
          TrainingDescription: '',
          SelectionSection: '',
          desc: ''
        },
        rules: {
          TraTheme: [
            {required: true, message: '请输入活动名称', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          CompulsoryTraining: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          ComTraining: [
            {required: true, message: '请选择一个选项', trigger: 'change'}
          ],
          MutPasExam: [
            {required: true, message: '请选择一个选项', trigger: 'change'}
          ],
          PassScoreLine: [
            {required: true, message: '请选择一个选项', trigger: 'change'}
          ],
          NvitedUsers: [
            {required: true, message: '请选择用户', trigger: 'change'}
          ],
          TrainingDescription: [
            {required: true, message: '请输入培训描述', trigger: 'change'}
          ],
          SelectionSection: [
            {required: true, message: '请输入培训描述', trigger: 'change'}
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
      },
      /**
       *  选择考题
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      toSelectQuestion() {
        this.$goRoute('/SelectQuestion', {Modify: 0})
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
    width: 65%;
    padding: 15px 12%;

    .el-form-item {
      margin-bottom: 10px;

      .el-radio-group {
        width: 120px;
      }

      .el-input,
      .el-textarea,
      .el-select {
        width: 650px;
      }

      .el-form-item__content {
        .el-form-item__error {
          padding: 6px 0 0 45px;
        }

      }

      .el-icon-circle-plus-outline,
      .el-icon-remove-outline {
        font-weight: 600;
        color: #a0a0a0;
        margin: 0 5px;

      }

    }

    .TraTheme {
      .el-input {
        width: 960px;
      }
    }

    span {
      line-height: 30px;
    }

  }

  .optionColor {
    color: $navHoverBg;
  }

  .chooseNvitedUsers {
    cursor: pointer;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    background: #fff;
    color: #606266;
    display: inline-block;
    font-size: 16px;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  }

</style>
