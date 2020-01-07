<template>
  <div class="ui_second_mt50">
    <!--    管理评估计划-->
    <div class="ui_search_result">
      <el-row style="background: #fafafa;">
        <el-col :span="24">
          <span></span>汇总因子权重
        </el-col>
      </el-row>
    </div>
    <!--    表格-->
    <div class="ui_table_box ui_cust ui_height">
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#f5f6f8',height:'45px',paddingLeft:'40px!important'}"
        stripe
        style="width: 100%">
        <el-table-column
          fixed
          prop="address"
          label="指标名称"
          :show-overflow-tooltip='true'
          width="760">
        </el-table-column>
        <el-table-column
          label="操作"
          fixed
          width="auto">
          <template slot-scope="scope">
            <div style="padding-left: 28px;">操作</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'AggregationFactorWeight',
    data () {
      return {
        input:'',
        tableData: [{
          address: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX评估单元名称'
        }, {
          address: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX评估单元名称'
        }, {
          address: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX评估单元名称'
        }, {
          address: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX评估单元名称'
        }, {
          address: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX评估单元名称'
        }, {
          address: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX评估单元名称'
        }, {
          address: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX评估单元名称'
        }, {
          address: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX评估单元名称'
        }, {
          address: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX评估单元名称'
        }, {
          address: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX评估单元名称'
        }]
      }
    },
    components: {

    },
    mounted () {

    },
    methods: {}
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/common.scss";
  .ui_table_box{
    margin: 0 40px;
    margin-top: 26px;
  }
  .ui_search_result {
    line-height: 46px;
    height: 46px;
    background: #fafafa;
    font-size: 18px;
    font-weight: 500;

    span {
      width: 12px;
      height: 27px;
      display: inline-block;
      background: $navHoverBg;
      margin-left: 24px;
      position: relative;
      top: 6px;
      margin-right: 8px;
    }
  }
</style>
