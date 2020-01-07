<template>
  <div class="ui_management_evaluation_plan">
    <!--    管理汇总路线-->
    <div class="ui_search_result">
      <el-row style="background: #fafafa;">
        <el-col :span="24">
          <span></span>关联问题-XXXXXXXXXX评估计划名
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="3">
          <el-steps :active="3" align-center class="ui_step_box">
            <el-step title="步骤1" description="评级结构"></el-step>
            <el-step title="步骤2" description="管理指标"></el-step>
            <el-step title="步骤3" description="管理问卷"></el-step>
            <el-step title="步骤4" description="关联问题"></el-step>
            <el-step title="步骤5" description="剩余风险"></el-step>
            <el-step title="步骤6" description="管理汇路线"></el-step>
          </el-steps>
        </el-col>
      </el-row>
      <!--    tab切换-->
      <el-row style="position: relative;top: -30px;z-index: 999;left: 45px;">
        <el-col :span="24">
          <div class="fn-left">风险类型</div>
          <ul class="ui_ul_t">
            <li v-for="(item,index) in tabArr" :key="index" :class="{'active_color':item.class}" @click="ToClick(index)">{{item.name}}</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div v-if="current == 0">
      <!--    表格-->
      <div class="ui_table_box relev_box">
        <el-table
          :data="tableData"
          :header-cell-style="{background:'#f5f6f8',height:'45px'}"
          stripe
          style="width: 100%">
          <el-table-column
            fixed
            prop="date"
            label="指标名称"
            :show-overflow-tooltip='true'
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            :show-overflow-tooltip='true'
            label="问题类型"
            width="600">
          </el-table-column>
          <el-table-column
            prop="date"
            label="关联问题"
            fixed="right"
            :show-overflow-tooltip='true'
            width="auto">
            <template slot-scope="scope">
              <el-select v-model="value" placeholder="请选择问题" style="width: 95%;">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!--    提交返回-->
      <div class="ui_tj">
        <el-row>
          <el-col :span="24">
            <ul class="ui_search_right">
              <li>
                <span>草稿</span>
              </li>
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
    <div v-if="current != 0">

    </div>
  </div>
</template>


<script>


  export default {
    name: 'RelevanceProblem',
    data() {
      return {
        current:0,
        tabArr:[{
          name:'固有风险指标',
          class:'active_color'
        },{
          name:'控制有效性指标',
          class:''
        }],
        active: 0,
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
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }]
      }
    },
    components: {},
    mounted() {
      document.getElementById('bg_color').style.display = 'none'
    },
    methods: {
      ToClick(item){
        this.tabArr[0].class = '';
        this.tabArr[1].class = '';
        this.current = item;
        this.tabArr[item].class = 'active_color';
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

    li {
      span {
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

    li:nth-child(3) {
      margin-right: 40px;
    }

  }

  .ui_tj {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  .ui_step_box {
    margin-top: 16px;
  }

  .ui_table_box {
    position: relative;
    top: -25px;
  }
  .ui_ul_t{
    float: left;
    margin-left: 30px;
    li{
      float: left;
      font-size: 14px;
      color: #a2a2a2;

      cursor: pointer;
      line-height: 22px;
      margin-top: 12px;
    }
    li:nth-child(2){
      margin-left: 38px;
    }
  }
  .active_color{
    border-bottom: 2px solid $navHoverBg;
    color: $navHoverBg!important;
  }
</style>

