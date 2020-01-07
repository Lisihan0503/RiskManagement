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
    <div v-if="current == 0">
      <!--    表格-->
      <div class="ui_table_box ui_tree_box">
        <!--表头-->
        <div class="ui_table_header">
          <ul>
            <li class="ui_w30">
              <el-checkbox class="ui_ml10" v-model="checked"></el-checkbox>
              指标名称
            </li>
            <li class="ui_w30">指标类型</li>
            <li class="ui_w10">计算方法</li>
            <li class="ui_w10">权重</li>
            <li class="ui_w20">操作</li>
          </ul>
        </div>
        <!--循环子集-->
        <div class="ui_tree_list" style="width: 100%;display: inline-block;">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            draggable
            default-expand-all
            :expand-on-click-node="false">
              <span class="custom-tree-node" slot-scope="{ node, data }">
                <span><el-input v-model="node.label" placeholder="请输入内容" class="ui_width_500_max"></el-input></span>
                <div class="fn-right ui_li_left">
                   <ul style="width: 100%;display: inline-block;">
                     <li>
                       <el-select v-model="value" placeholder="请选择" style="width: 130px;">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                     </li>
                      <li>
                       <el-select v-model="value" placeholder="请选择" style="width: 130px;">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                     </li>
                     <li>
                        <el-input v-model="node.label" placeholder="请输入内容" style="width: 130px;"></el-input>
                     </li>
                     <li><el-checkbox v-model="checked">允许手工调整</el-checkbox></li>
                     <li class="ui_size_17">计算公式</li>
                      <li class="ui_size_17" @click="() => ToAppend(data)">新建下级</li>
                     <li class="ui_size_17" @click="() => ToRemove(node, data)">删除</li>
                   </ul>
                </div>
              </span>
          </el-tree>
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
              <li @click="ToNext()">
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
    name: 'InherentRiskIndicators',
    data() {
      return {
        checked: false,
        data: [{
          id: 1,
          inputvalue: '固有风险',
          label: '一级 1',
          children: [{
            id: 4,
            inputvalue: '客户风险',
            label: '二级 1-1',
            children: [{
              id: 9,
              inputvalue: '高风险客户占比',
              label: '三级 1-1-1'
            }, {
              id: 10,
              inputvalue: '客户总数',
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          inputvalue: '固有风险',
          label: '一级 2',
          children: [{
            id: 5,
            inputvalue: '客户风险',
            label: '二级 2-1'
          }, {
            id: 6,
            inputvalue: '高风险客户占比',
            label: '二级 2-2'
          }]
        }],
        tableData: [{
          id: '1',
          date: '第一层级',
          name: '王小虎1',
          address: ' 1519 弄',
          children: [{
            id: '1-1',
            date: '第二层级',
            name: '王小虎2-1',
            address: ' 1519 弄',
            children: [{
              id: '1-1-1',
              date: '第三层级',
              name: '王小虎3',
              address: ' 1519 弄',
              children: [{
                id: '1-1-1-1',
                date: '第四层级',
                name: '王小虎3',
                address: ' 1519 弄',
                children: [{
                  id: '1-1-1-1-1',
                  date: '第五层级',
                  name: '王小虎3',
                  address: ' 1519 弄',
                  children: [{
                    id: '1-1-1-1-1-1',
                    date: '第六层级',
                    name: '王小虎3',
                    address: ' 1519 弄',
                    children: [{
                      id: '1-1-1-1-1-1-1',
                      date: '第七层级',
                      name: '王小虎3',
                      address: ' 1519 弄',
                      children: [{
                        id: '1-1-1-1-1-1-1-1',
                        date: '第八层级',
                        name: '王小虎3',
                        address: ' 1519 弄',
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }, {
            id: '1-2',
            date: '第二层级',
            name: '王小虎2-2',
            address: ' 1519 弄',
            children: [{
              id: '1-2-1',
              date: '第三层级',
              name: '王小虎3',
              address: ' 1519 弄',
              children: [{
                id: '1-2-1-1',
                date: '第四层级',
                name: '王小虎3',
                address: ' 1519 弄',
                children: [{
                  id: '1-2-1-1-1',
                  date: '第五层级',
                  name: '王小虎3',
                  address: ' 1519 弄',
                  children: [{
                    id: '1-2-1-1-1-1',
                    date: '第六层级',
                    name: '王小虎3',
                    address: ' 1519 弄',
                    children: [{
                      id: '1-2-1-1-1-1-1',
                      date: '第七层级',
                      name: '王小虎3',
                      address: ' 1519 弄',
                      children: [{
                        id: '1-2-1-1-1-1-1-1',
                        date: '第八层级',
                        name: '王小虎3',
                        address: ' 1519 弄',
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }],
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
        input: '固有风险1',
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
      }
    },
    components: {},
    mounted() {
      document.getElementById('bg_color').style.display = 'none';


    },
    methods: {
      ToAppend(data){
        let newChild = { id: 111,   inputvalue: '',label: '', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },
      ToRemove(node, data){
        console.log(node)
        console.log(data)
        if(node.childNodes.length!=0){
          node.data.label = ''
        }else{
          let parent = node.parent;
          let children = parent.data.children || parent.data;
          let index = children.findIndex(d => d.id === data.id);
          children.splice(index, 1);
        }

      },
      ToNext() {
        console.log(this.data)
      },
      ToClick(item) {
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

  .ui_table_header {
    width: 100%;
    height: 56px;
    line-height: 56px;
    background: #f5f6f8;
    color: #686868;
    font-size: 17px;
    ul {
      li {
        float: left;
      }
    }
  }

  .ui_w30 {
    width: 30%;
  }

  .ui_w10 {
    width: 10%;
  }

  .ui_w20 {
    width: 20%;
  }

  .ui_ml10 {
    margin-left: 10px;
    margin-right: 10px;
  }

  .ui_width_500_max{
    width: 600px;
  }

  .ui_size_17{
    font-size: 18px;
    color: #68686a;
    font-weight: 400;
  }

  .ui_li_left {
    position: relative;
    top: -5px;
    ul {
      li {
        float: left;
        height: 56px;
        line-height: 56px;
        margin-left: 51px;
      }
    }
  }

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
    width: 96%;
    display: inline-block;
    position: relative;
    top: -25px;
    margin: 0;
    margin-left: 2%;
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

  .ui_ul_li_li {
    li {
      float: left;
      margin-left: 19px;
      font-size: 16px;
      cursor: pointer;
    }
  }


</style>

