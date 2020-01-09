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
        <el-select v-model="ruleForm.region" placeholder="请选择" @change="ChooseResources($event)">
          <el-option label="视频资源" value="Video"></el-option>
          <el-option label="非视频资源" value="NonVideo"></el-option>
        </el-select>
      </el-form-item>

      <div class="Video" style="display:none;">
        <el-form-item label="上传视频" prop="UploadVideo">
          <el-input v-model="ruleForm.name"></el-input>
          <div class="ChosFilBtn" @click="ChooesVideo">选择文件</div>
        </el-form-item>
      </div>

      <div class="NonVideo" style=" ">
        <el-form-item label="上传PDF" prop="UploadPDF">
          <el-input v-model="ruleForm.name"></el-input>
          <div class="ChosFilBtn" @click="ChooesPDF">选择文件</div>
        </el-form-item>
        <el-form-item label="上传音频" prop="UploadAudio">
          <el-input v-model="ruleForm.name"></el-input>
          <div class="ChosFilBtn" @click="ChooesAudio">选择文件</div>
        </el-form-item>
      </div>

      <el-form-item label="章节名称" prop="ChapterName">
        <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
      </el-form-item>

      <el-form-item label="章节描述" prop="ChapterDescription">
        <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入章节描述"></el-input>
      </el-form-item>

      <el-form-item>
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
          ],
          UploadVideo: [
            {required: true, message: '请选择视频文件', trigger: 'change'}
          ],
          ChapterName: [
            {required: true, message: '请填写章节名称', trigger: 'change'}
          ],
          ChapterDescription: [
            {required: true, message: '请填写章节描述', trigger: 'change'}
          ],
          UploadVideo: [
            {required: true, message: '请选择视频文件', trigger: 'change'}
          ],
          UploadPDF: [
            {required: true, message: '请选择PDF文件', trigger: 'change'}
          ],
          UploadAudio: [
            {required: true, message: '请选择音频文件', trigger: 'change'}
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
        console.log(formName);
        this.$refs[formName].resetFields();
      },
      /**
       * 视频资源
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      ChooseResources(value) {
        console.log(value)

        if(value == 'Video'){

        }else if(value == 'NonVideo'){

        }

      },
      /**
       * 上传视频资源
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      ChooesVideo(){
        console.log('视频文件');
      },
      /**
       * 上传PDF资源
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      ChooesPDF(){
        console.log('PDF文件');
      },
      /**
       * 上传音频资源
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      ChooesAudio(){
        console.log('音频文件');
      }
    }
  };


</script>


<style lang="scss" scoped type="text/scss">
  @import "../../common/style/commonSass/ManagerCommonSass";
  @import "../../common/style/common.scss";
  @import "../../common/style/resetElemtnUI.css";

  .el-form{

    width: 75%;
    padding: 15px 12%;

    .el-form-item {
      margin-bottom: 10px;
      .el-select {
        width: 300px;
      }

      .el-select:focus {
        border-color: $navHoverBg;
      }

      .el-input,
      .el-textarea {
        width: 960px;
      }
    }
  }

  .ChosFilBtn {
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
    margin-top: 5px;
    margin-left: 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  }

  .ChosFilBtn:hover {
    border-color: #C0C4CC;
  }

  .optionColor {
    color: $navHoverBg;
  }

  .NonVideo,
  .Video {
    display: inline-block;
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

</style>
