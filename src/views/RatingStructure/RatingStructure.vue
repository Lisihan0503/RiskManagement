<template>
  <div class="ui_management_evaluation_plan">
    <!--    管理汇总路线-->
    <div class="ui_search_result ui_rating">
      <el-row style="background: #fafafa;">
        <el-col :span="24">
          <span></span>评级结构
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="3">
          <el-steps :active="0" align-center class="ui_step_box">
            <el-step title="步骤1" description="评级结构"></el-step>
            <el-step title="步骤2" description="管理指标"></el-step>
            <el-step title="步骤3" description="管理问卷"></el-step>
            <el-step title="步骤4" description="关联问题"></el-step>
            <el-step title="步骤5" description="剩余风险"></el-step>
            <el-step title="步骤6" description="管理汇路线"></el-step>
          </el-steps>
        </el-col>
      </el-row>
    </div>
    <!--    表格-->
    <div class="ui_table_box manager_routes_box">
      <el-row style="margin-top: 10px">
        <el-col :span="24" :offset="2">
          <el-form class="w_370 w_620">
            <el-form-item label="评估计划名称：" class="fn-left" label-width="120px">
              <div class="block">
                <el-input v-model="input" placeholder="请输入内容" ></el-input>
              </div>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" :offset="2">
          <el-form class="w_370">
            <el-form-item label="选择评级结构：" class="fn-left" label-width="120px" style="width: 140%">
              <div class="block">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="ui_box_list le_20">
            <p class="ui_title">定义固有风险评级结构</p>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>高</i>
                  <b class="ui_color_height"></b>
                </span>
              </li>
            </ul>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>中高</i>
                  <b class="ui_color_z_height"></b>
                </span>
              </li>
            </ul>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>中</i>
                  <b class="ui_yellow"></b>
                </span>
              </li>
            </ul>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>中低</i>
                  <b class="ui_green"></b>
                </span>
              </li>
            </ul>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>低</i>
                  <b class="ui_height_green"></b>
                </span>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="ui_box_list ml02 ui_mt_mb">
            <p class="ui_title">定义控制有效性评级结构</p>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>高</i>
                  <b class="ui_color_height"></b>
                </span>
              </li>
            </ul>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>中高</i>
                  <b class="ui_color_z_height"></b>
                </span>
              </li>
            </ul>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>中</i>
                  <b class="ui_yellow"></b>
                </span>
              </li>
            </ul>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>中低</i>
                  <b class="ui_green"></b>
                </span>
              </li>
            </ul>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>低</i>
                  <b class="ui_height_green"></b>
                </span>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="ui_box_list">
            <p class="ui_title">定义剩余风险评级结构</p>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>高</i>
                  <b class="ui_color_height"></b>
                </span>
              </li>
            </ul>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>中高</i>
                  <b class="ui_color_z_height"></b>
                </span>
              </li>
            </ul>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>中</i>
                  <b class="ui_yellow"></b>
                </span>
              </li>
            </ul>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>中低</i>
                  <b class="ui_green"></b>
                </span>
              </li>
            </ul>
            <ul class="ui_ul_list">
              <li>
                <span>第一优先</span>
                <span>(风险最高)</span>
              </li>
              <li>
                <span>
                  <i>低</i>
                  <b class="ui_height_green"></b>
                </span>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--    提交返回-->
    <div class="ui_tj">
      <el-row>
        <el-col :span="24">
          <ul class="ui_search_right">
            <li>
              <span>下一步</span>
            </li>
            <li>
              <span>返回</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>


  export default {
    name: 'RatingStructure',
    data() {
      return {
        active:0,
        currentPage3: 1,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        input: '',
        tableData: [{
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1517 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1519 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1516 弄'
        }]
      }
    },
    components: {},
    mounted() {
      document.getElementById('bg_color').style.display = 'none'
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/commonSass/ManagerCommonSass";

  .ui_li_list {
    li {
      float: left;
      text-align: center;
      margin-left: 15px;
    }

    li:hover {
      color: $navHoverBg;
      cursor: pointer;

      a {
        border-bottom: 1px solid $navHoverBg;
      }
    }
  }

  .ui_search_right {
    margin: 10px 0;
    li{
      span{
        cursor: pointer;
        width: 106px;
        height: 37px;
        line-height: 37px;
        text-align: center;
        border-radius: 4px;
        background: $navHoverBg;
        color: $white;
        display: inline-block;
        font-size: $fontsize16;
      }
    }
    li:nth-child(2){
      margin-right: 40px;
    }

  }
  .ui_tj{
    margin-top: 30px;
    margin-bottom: 60px;
  }

  .ui_step_box{
    margin-top: 16px;
  }
  .manager_routes_box{
    margin-top: -16px;
  }

  .ui_box_list{
    width: 80%;
    height: 515px;
    border: 1px solid #cfcfcf;
  }
  .le_20{
    margin-left: 20%;
  }
  .ml02{
    margin: 0 10%;
  }
  .ui_title{
    height: 52px;
    line-height: 52px;
    text-align: center;
    background: $navHoverBg;
    color: $white;
    font-size: 20px;
  }
  .ui_ul_list{
    width: 100%;
    display: inline-block;
    li{
      float: left;
    }
    li:nth-child(1){
      margin: 18px 20px 18px 46px;
      span{
        font-size: 16px;
        display: block;
        text-align: center;
        font-weight: 500;
      }
    }
    li:nth-child(2){
      width: 65%;
      margin-top: 20px;
      span{
        width: 85%;
        height: 46px;
        border: 1px solid #cfcfcf;
        display: inline-block;
        i{
          line-height: 33px;
          font-size: 16px;
          display: inline-block;
          width: 100%;
          text-align: center;
          font-style: normal;
        }
        b{
          width: 100%;
          height: 7px;
          display: inline-block;
        }
      }
    }
  }

  .ui_color_height{
    background: #e70012;
  }
  .ui_color_z_height{
    background: #f9b552;
  }
  .ui_yellow{
    background: #fff45c;
  }
  .ui_green{
    background: #42d36e;
  }
  .ui_height_green{
    background: #207639;
  }

  @media screen and (max-width: 1200px) {
    .ui_box_list:nth-child(1) {
      margin-left: 10%;
    }
    .ui_mt_mb{
      margin: 20px 0 20px 0;
    }
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    .ui_ul_list li:nth-child(2){
      width: 60%!important;
    }
  }
  @media (min-width: 1200px) and (max-width: 1410px) {
    .ui_ul_list li:nth-child(2){
      width: 55%!important;
    }
  }
</style>

