<template>
  <div class="ui_management_evaluation_plan">
    <!--    管理汇总路线-->
    <div class="ui_search_result">
      <el-row style="background: #fafafa;">
        <el-col :span="24">
          <span></span>管理指标-XXXXXXXXXX评估计划名
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="3">
          <el-steps :active="1" align-center class="ui_step_box">
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
            <li v-for="(item,index) in tabArr" :key="index" :class="{'active_color':item.class}"
                @click="ToClick(index)">{{item.name}}
            </li>
          </ul>
          <ul class="fn-right ui_li_fl" style="margin-right: 70px">
            <li>
              <el-button size="mini">批量导入</el-button>
            </li>
            <li>
              <el-button size="mini">模板下载</el-button>
            </li>
            <li>
              <el-button size="mini">下载</el-button>
            </li>
            <li>
              <el-button size="mini">导入历史指标</el-button>
            </li>
            <li>
              <el-button size="mini">指标结构图</el-button>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <!--title-->
    <div class="ui_title"><span>指标名称</span></div>
    <!--    表格-->
    <div class="ui_table_box ui_move_border_box">
      <div>
        <div v-for="(item,index) in demoData" :key="index">
          <span class="el-icon-caret-right" @click="ToShow(index)"></span>{{item.name}}
          <div style="margin-left: 12px;" v-if="item.show" v-for="(itemchild,idx) in item.children" :key="idx">
            <span class="el-icon-caret-right" @click="ToShowItem(index,idx)"></span>{{itemchild.name}}
            <div style="margin-left: 12px;" v-if="itemchild.show" v-for="(itemChildrenC,idxx) in itemchild.children" :key="idxx">
              <span class="el-icon-caret-right" @click="ToShowTable(index,idx,idxx)"></span>{{itemChildrenC.name}}
              <div class="ui_table" v-if="itemChildrenC.tableShow">
                  <ul>
                    <li class="ui_w20">问题描述</li>
                    <li class="ui_w20">答复指引</li>
                    <li class="ui_w10">问题级别</li>
                    <li class="ui_w10">条件设置</li>
                    <li class="ui_w10">回复格式</li>
                    <li class="ui_w30">操作</li>
                  </ul>
                  <div>
                    <ul>
                      <li></li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
</template>


<script>


  export default {
    name: 'ManagementProblem',
    data() {
      return {
        demoData:[{
          name:'固有风险1',
          show:false,
          children:[{
            name:'客户风险1',
            show:false,
            children:[{
              name:'高风险客户占比1',
              show:false,
              tableShow:false
            }]
          }]
        },{
          name:'固有风险2',
          show:false,
          children:[{
            name:'客户风险2',
            show:false,
            children:[{
              name:'高风险客户占比2',
              show:false,
              tableShow:false
            }]
          }]
        }],
        checked: false,
        current: 0,
        tabArr: [{
          name: '固有风险指标',
          class: 'active_color'
        }, {
          name: '控制有效性指标',
          class: ''
        }],
        active: 0,
        currentPage3: 1,
        value: '',
        input: '固有风险',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
      }
    },
    components: {},
    mounted() {
      document.getElementById('bg_color').style.display = 'none';
    },
    methods: {
      /**
       * 选择风险类型
       * @param
       * @returns {Promise}
       * @Author
       * */
      ToClick(item) {
        this.tabArr[0].class = '';
        this.tabArr[1].class = '';
        this.current = item;
        this.tabArr[item].class = 'active_color';
      },
      /**
       * 展开列表节点
       * @param
       * @returns {Promise}
       * @Author
       * */
      ToShow(item){
        this.demoData[item].show = !this.demoData[item].show;
      },
      ToShowItem(item,chitem){
        this.demoData[item].children[chitem].show = !this.demoData[item].children[chitem].show;
      },
      ToShowTable(item,chitem,chitemc){
        this.demoData[item].children[chitem].children[chitemc].tableShow = !this.demoData[item].children[chitem].children[chitemc].tableShow;
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
    width: 98%;
    display: inline-block;
    position: relative;
    margin: 0;
    margin-left: 1%;
  }

  .ui_ul_t {
    float: left;
    margin-left: 30px;

    li {
      float: left;
      font-size: 14px;
      color: #a2a2a2;

      cursor: pointer;
      line-height: 22px;
      margin-top: 12px;
    }

    li:nth-child(2) {
      margin-left: 38px;
    }
  }

  .active_color {
    border-bottom: 2px solid $navHoverBg;
    color: $navHoverBg !important;
  }

  .ui_li_fl {
    li {
      float: left;
      margin-right: 15px;
    }
  }

  .ui_title {
    width: 98%;
    height: 57px;
    line-height: 57px;
    background: #f5f6f8;
    color: #696969;
    font-size: 18px;
    margin: 0 1%;
    overflow: hidden;
    span {
      padding-left: 28px;
    }
  }

  .ui_table{
    margin-left: -15px;
    ul{
      width: 100%;
      display: inline-block;
      background: #CCCCCC;
      li{
        float: left;
      }
    }
  }

  .ui_w20{
    width: 20%;
  }
  .ui_w10{
    width: 10%;
  }
  .ui_w30{
    width: 10%;
  }
</style>

