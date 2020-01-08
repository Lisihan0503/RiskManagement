<template>
  <div class="ui_management_evaluation_plan">
    <div class="ui_search_result">
      <el-row style="background: #fafafa;margin-top: 50px;">
        <el-col :span="24">
          <span></span>上传资源
        </el-col>
      </el-row>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="上传类型" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择" @change="ChooseResources(selected)">
          <el-option
            v-for="item in changeRes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            class="optionColor">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "UploadResources",
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
          region: [
            {required: true, message: '请选择上传区域', trigger: 'change'}
          ]
        },
        /**
         *  点击option改变页面元素方法
         * @param
         * @returns {Promise}
         * @Author 李思晗
         * */
        changeRes: [{
          value: 'Video',
          label: '视频资源'
        }, {
          value: 'NonVideo',
          label: '非视频资源'
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

      },
      /**
       *  表单方法
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      /**
       * 视频资源
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      ChooseResources(index) {
        console.log(index);
        console.log(this.changeRes[index].value);
      }
    }
  };


</script>


<style lang="scss" scoped type="text/scss">
  @import "../../common/style/commonSass/ManagerCommonSass";
  @import "../../common/style/common.scss";
  @import "../../common/style/resetElemtnUI.css";

  .el-form-item {
    display: inline-block;
    max-width: 800px;
    margin: 15px 0 15px 15%;

    .el-select {
      width: 300px;
    }

    .el-select:focus {
      border-color: $navHoverBg;
    }
  }

  .optionColor {
    color: $navHoverBg;
  }

</style>
