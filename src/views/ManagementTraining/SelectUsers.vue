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
        <el-select v-model="form.distribution" placeholder="总部分布">
          <el-option label="xxx分布" value="1"></el-option>
        </el-select>
        <el-select v-model="form.mechanism" placeholder="所在机构">
          <el-option label="xxx机构" value="1"></el-option>
        </el-select>
        <el-select v-model="form.Contry" placeholder="所在国家">
          <el-option label="中国" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="搜索：" class="search">
        <el-input v-model="form.name" style="width:320px"></el-input>
        <div class="fn-left ui_btn selectTraining" @click="selectTraining" style="float: none;">查询</div>
      </el-form-item>
    </el-form>

    <div class="ui_search_result">
      <el-row style="background: #fafafa;">
        <el-col :span="24">
          <span></span>搜索结果
        </el-col>
        <div class="fn-right">
          <div class="fn-left ui_btn" @click="Choose">选择</div>
        </div>
      </el-row>
    </div>
    <!-- 表格 -->
    <div class="ui_table_box">
      <el-table
        ref="multipleTable"
        :data="tableData"
        :header-cell-style="{background:'#f5f6f8',height:'45px'}"
        :default-sort="{prop: 'date', order: 'descending'}"
        tooltip-effect="dark"
        stripe
        style="width: 100%">
        <!--        @selection-change="handleSelectionChange"-->
        <el-table-column
          type="selection"
          width="60"
          hight="45px">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="200">
        </el-table-column>
        <el-table-column
          prop="Country"
          label="所在国家"
          sortable
          width="350">
        </el-table-column>
        <el-table-column
          prop="Institution"
          label="所在机构"
          sortable
          width="450">
        </el-table-column>
        <el-table-column
          prop="Department"
          label="部门"
          sortable
          show-overflow-tooltip
          width="450">
        </el-table-column>
        <el-table-column
          prop="Office"
          label="处室"
          sortable
          show-overflow-tooltip
          width="330">
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="ui_pagination_box">
      <div class="fn-left ui_total_num">
        本页10条目，共计40条目
      </div>

      <!--        :current-page.sync="currentPage3" -->

      <el-pagination
        class="fn-left"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>

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
          name: '用户姓名001',
          Country: '中国',
          Institution: 'xxxxxxxxxxxxxxxxxxxxx',
          Department: 'xxxxxxx部门',
          Office: 'xxxxxxx处室'
        }, {
          name: '用户姓名002',
          Country: '中国',
          Institution: 'xxxxxxxxxxxxxxxxxxxxx',
          Department: 'xxxxxxx部门',
          Office: 'xxxxxxx处室'
        }, {
          name: '用户姓名003',
          Country: '中国',
          Institution: 'xxxxxxxxxxxxxxxxxxxxx',
          Department: 'xxxxxxx部门',
          Office: 'xxxxxxx处室'
        }, {
          name: '用户姓名004',
          Country: '中国',
          Institution: 'xxxxxxxxxxxxxxxxxxxxx',
          Department: 'xxxxxxx部门',
          Office: 'xxxxxxx处室'
        }, {
          name: '用户姓名005',
          Country: '中国',
          Institution: 'xxxxxxxxxxxxxxxxxxxxx',
          Department: 'xxxxxxx部门',
          Office: 'xxxxxxx处室'
        }, {
          name: '用户姓名006',
          Country: '中国',
          Institution: 'xxxxxxxxxxxxxxxxxxxxx',
          Department: 'xxxxxxx部门',
          Office: 'xxxxxxx处室'
        }, {
          name: '用户姓名007',
          Country: '中国',
          Institution: 'xxxxxxxxxxxxxxxxxxxxx',
          Department: 'xxxxxxx部门',
          Office: 'xxxxxxx处室'
        }, {
          name: '用户姓名008',
          Country: '中国',
          Institution: 'xxxxxxxxxxxxxxxxxxxxx',
          Department: 'xxxxxxx部门',
          Office: 'xxxxxxx处室'
        }, {
          name: '用户姓名009',
          Country: '中国',
          Institution: 'xxxxxxxxxxxxxxxxxxxxx',
          Department: 'xxxxxxx部门',
          Office: 'xxxxxxx处室'
        }, {
          name: '用户姓名010',
          Country: '中国',
          Institution: 'xxxxxxxxxxxxxxxxxxxxx',
          Department: 'xxxxxxx部门',
          Office: 'xxxxxxx处室'
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
      selectTraining() {

      },
      Choose() {
        if(val == '' || val == null || val == undifind){
          this.$goRoute('/TrainingModify',{ id: 123})
        } else {
          console.log('传输参数回上一页');
        }
      },
      /**
       * 分页
       * @param val
       * @returns {Promise}
       * @Author 李思晗
       */
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

  .selectTraining {
    display: inline-block;
    margin: 0 0 0 30px;
    padding: 0;
    width: 72px;
    height: 30px;
    line-height: 30px;
  }

  .el-col-24 {
    width: 15%;
  }

</style>
