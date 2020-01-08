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
      <el-form-item label="考题题干" prop="QuestionStem">
        <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入考题题干"></el-input>
      </el-form-item>

      <el-form-item label="考题类型" prop="QuestionType">
        <el-select v-model="ruleForm.region" placeholder="请选择">
          <el-option label="选择题" value="ChoiceQue"></el-option>
          <el-option label="判断题" value="JudgementQue"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="选项" required prop="Option">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="A"></el-radio>
          <el-input v-model="ruleForm.name"></el-input>
        </el-radio-group>
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="B"></el-radio>
          <el-input v-model="ruleForm.name"></el-input>
        </el-radio-group>
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="C"></el-radio>
          <el-input v-model="ruleForm.name"></el-input>
        </el-radio-group>
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="D"></el-radio>
          <el-input v-model="ruleForm.name"></el-input>
        </el-radio-group>
      </el-form-item>
      <div class="el-form-item__content" style="margin-left: 100px;">
        <ul class="ui_li_list">
          <li><icon></icon>新增选项</li>
          <li><icon></icon>删除选项</li>
        </ul>
      </div>


      <el-form-item label="设置分值" prop="Score">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <div class="fn-right">
        <div class="fn-left ui_btn" >确认</div>
        <div class="fn-left ui_btn" >返回</div>
      </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "addQuestions",
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
          name: [
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
    padding: 15px 10%;

    .el-form-item{

      .el-radio-group{
        margin-bottom: 15px;
        width: 400px;
        .el-radio{
          margin-right:10px;
        }
        .el-input {
          width: 300px;
        }

      }

      .el-select {
        width: 345px;
      }

    }

    ul{
      li{
        float: left;
        margin: 0 15px 0 0;
      }
    }

  }
</style>
