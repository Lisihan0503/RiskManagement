<template>
  <div class="ui_organization_box">
    <!--    管理机构title-->
    <div class="ui_organization_title">
      <el-row>
        <el-col :span="24"><span></span>管理机构</el-col>
      </el-row>
    </div>
    <!--    管理机构 筛选条件-->
    <div class="ui_organization_condition">
      <el-row>
        <el-col :span="24">
          <el-form class="w_160">
            <el-form-item label="筛选方式：" class="fn-left" label-width="100px">
              <div class="block">
                <el-select v-model="value1" placeholder="国家">
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-form>
          <el-form class="w_160">
            <el-form-item label="" class="fn-left" label-width="20px">
              <div class="block">
                <el-select v-model="value2" placeholder="上级机构">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-form>
          <el-form class="w_160">
            <el-form-item label="" class="fn-left" label-width="20px">
              <div class="block">
                <el-select v-model="value3" placeholder="机构属性">
                  <el-option
                    v-for="item in options3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-form>
          <el-form class="w_370">
            <el-form-item label="搜索：" class="fn-left" label-width="70px" style="width: 140%">
              <div class="block">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </el-form-item>
          </el-form>
          <el-form>
            <el-form-item label="" class="fn-left" label-width="28px">
              <div class="block ui_small_button">
                <el-button type="primary">查询</el-button>
              </div>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <!--    搜索结果-->
    <div class="ui_search_result">
      <el-row>
        <el-col :span="24">
          <span></span>搜索结果
          <ul class="ui_search_right">
            <li>
              <el-button size="small">新增机构</el-button>
            </li>
            <li>
              <el-button size="small">批量导入</el-button>
            </li>
            <li>
              <el-button size="small">下载模板</el-button>
            </li>
            <li>
              <el-button size="small">下载</el-button>
            </li>
            <li>
              <el-button size="small">删除</el-button>
            </li>
            <li>
              <el-button size="small">股权结构图</el-button>
            </li>
          </ul>
        </el-col>

      </el-row>
    </div>
    <!--    表格-->
    <div class="ui_table_box">
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#f5f6f8',height:'45px'}"
        stripe
        style="width: 100%">
        <el-table-column
          type="selection"
          fixed
          width="55">
        </el-table-column>
        <el-table-column
          fixed
          prop="date"
          label="机构id"
          :show-overflow-tooltip='true'
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          :show-overflow-tooltip='true'
          label="机构名称"
          width="250">
        </el-table-column>
        <el-table-column
          prop="date"
          label="机构属性"
          :show-overflow-tooltip='true'
          width="400">
        </el-table-column>
        <el-table-column
          prop="date"
          label="所在国家"
          :show-overflow-tooltip='true'
          width="auto">
        </el-table-column>
        <el-table-column
          prop="date"
          label="所在城市"
          :show-overflow-tooltip='true'
          width="240">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="350">
          <template slot-scope="scope">
            <el-button type="primary" size="small" icon="el-icon-search"></el-button>
            <el-button type="primary" size="small" icon="el-icon-edit"></el-button>
            <el-button type="primary" size="small" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--    分页-->
    <div class="ui_pagination_box">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'ManagementOrganization',
    data() {
      return {
        currentPage3:1,
        options1: [{
          value: '选项1',
          label: '汇总单元'
        }, {
          value: '选项2',
          label: '评估单元'
        }, {
          value: '选项3',
          label: '一般单元'
        }],
        options2: [{
          value: '选项1',
          label: '汇总单元'
        }, {
          value: '选项2',
          label: '评估单元'
        }, {
          value: '选项3',
          label: '一般单元'
        }],
        options3: [{
          value: '选项1',
          label: '汇总单元'
        }, {
          value: '选项2',
          label: '评估单元'
        }, {
          value: '选项3',
          label: '一般单元'
        }],
        value1: '',
        value2: '',
        value3: '',
        input: '',
        tableData: [{
          id: 'M1222152',
          date: '2016-05-02',
          type: '评估单元',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          id: 'M1222153',
          date: '2016-05-04',
          type: '评估单元',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1517 弄'
        }, {
          id: 'M1222154',
          date: '2016-05-01',
          type: '汇总单元',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1519 弄'
        }, {
          id: 'M1222155',
          date: '2016-05-02',
          type: '汇总单元',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        },{
          id: 'M1222158',
          date: '2016-05-02',
          type: '评估单元',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        },{
          id: 'M1222161',
          date: '2016-05-02',
          type: '汇总单元',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        },{
          id: 'M1222162',
          date: '2016-05-02',
          type: '评估单元',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        },{
          id: 'M1222163',
          date: '2016-05-02',
          type: '汇总单元',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        },{
          id: 'M1222164',
          date: '2016-05-02',
          type: '一般单元',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        },{
          id: 'M1222165',
          date: '2016-05-03',
          type: '一般单元',
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
</style>
