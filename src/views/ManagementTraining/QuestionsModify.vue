<template>
  <div class="ui_management_evaluation_plan">
    <div class="ui_search_result">
      <el-row style="background: #fafafa;margin-top: 50px;">
        <el-col :span="24">
          <span></span>创建考题
        </el-col>
      </el-row>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <!-- 题干 -->
      <el-form-item label="考题题干" prop="QuestionStem">
        <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入考题题干"></el-input>
      </el-form-item>
      <!-- 题类型 -->
      <el-form-item label="考题类型" prop="QuestionType">
        <el-select v-model="ruleForm.region" placeholder="请选择">
          <el-option label="选择题" value="ChoiceQue"></el-option>
          <el-option label="判断题" value="JudgementQue"></el-option>
        </el-select>
      </el-form-item>
      <!-- 选择题选项内容 -->
      <div class="ChooesQueContent">
        <el-form-item label="选项" required prop="Option">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="A"></el-radio>
          </el-radio-group>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="B"></el-radio>
          </el-radio-group>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="C"></el-radio>
          </el-radio-group>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="D"></el-radio>
          </el-radio-group>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="el-form-item__content" style="margin-left: 60px;">
            <span class="el-form-item__label AddOption">
              <i class="el-icon-circle-plus-outline"></i>
              <span>新增选项</span>
            </span>
            <span class="el-form-item__label deleteOption">
              <i class="el-icon-remove-outline"></i>
              <span>删除选项</span>
            </span>
          </div>
        </el-form-item>
      </div>
      <!-- 判断题选项内容 -->
      <div class="JudgementQueContent" style="display:none;">
        <el-form-item label="选项" prop="JudOption">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
      </div>
      <!-- 分数设置 -->
      <el-form-item label="设置分值" prop="Score">
        <el-input v-model="ruleForm.name" style="width: 650px;"></el-input>
      </el-form-item>

      <el-form-item>
        <div class="el-textarea">
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
    name: "QuestionsModify",
    data() {
      return {

        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          QuestionStem: [
            { required: true, message: '请输入考题题干', trigger: 'blur' }
          ],
          QuestionType: [
            { required: true, message: '请选择 ', trigger: 'blur' }
          ],
          Option: [
            { required: true, message: '请输入 ', trigger: 'blur' }
          ],
          Score: [
            { required: true, message: '请输入 ', trigger: 'blur' }
          ],
          JudOption: [
            { required: true, message: '请输入 ', trigger: 'blur' }
          ]
        }

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

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/commonSass/ManagerCommonSass";

  .ui_pagination_box{
    margin-top: 80px;
    float: right;
    .ui_total_num{
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


  .el-form{
    width: 45%;
    padding: 15px 12%;

    .el-form-item{
      margin-bottom: 10px;
      .el-radio-group{
        width: 40px;

      }

      .el-input {
        width: 590px;
        margin-right: 115px;
        float: right;
      }

      .el-form-item__content{

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

      .el-textarea {
        width: 960px;
      }

    }

    .JudgementQueContent {

      .el-radio-group{
        width: 120px;
      }

    }

    span{
      line-height: 35px;
    }

  }
</style>
