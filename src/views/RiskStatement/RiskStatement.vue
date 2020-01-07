<template>
  <div class="RiskStatement">
    <div class="ui_management_evaluation_plan">
      <!--    管理评估计划-->
      <div class="ui_search_result ui_rating">
        <el-row style="background: #fafafa;">
          <el-col :span="24">
            <span></span>生成比较报告
          </el-col>
        </el-row>
      </div>

      <div class="RiskStatement_cont">
        <!--    筛选-->
        <div class="ui_searchCon">
          <el-row>
            <el-col :span="24">
              <div class="fn-left ui_search_label">
                筛选方式：
              </div>
              <div class="fn-left">
                <div class="fn-left ui_search_select">
                  <el-select v-model="value" placeholder="客户类型">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="fn-left ui_search_select">
                  <el-select v-model="value" placeholder="产品类型">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="fn-left ui_search_select">
                  <el-select v-model="value" placeholder="渠道类型">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="fn-left ui_search_select">
                  <el-select v-model="value" placeholder="控制类型">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="fn-left ui_search_select">
                  <el-select v-model="value" placeholder="业务属性">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="fn-left ui_search_btn">
                <el-button>查询</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--    树-->
        <div class="ui_treeCon">
          <el-row>
            <el-col :xs="24" :sm="24" :md="18" :lg="9" :xl="6" class="ui_tree_gutter">
              <div class="ui_tree_title">
                <span>定制展示单元</span>
              </div>
              <el-row>
                <el-col :span="24">
                  <el-tree
                    :props="props"
                    :load="loadNode"
                    lazy
                    show-checkbox>
                  </el-tree>
                </el-col>
              </el-row>
            </el-col>
            <el-col :xs="24" :sm="24" :md="18" :lg="9" :xl="6" class="ui_tree_gutter">
              <div class="ui_tree_title">
                <span>定制展示指标</span>
              </div>
              <el-row class="ui_checkAll">
                <el-col :span="24">
                  <el-checkbox :indeterminate="indeterminate" v-model="checkAll" @change="handleCheckAllChange">
                    全选
                  </el-checkbox>
                </el-col>
              </el-row>
              <el-row class="ui_classify">
                <el-col :span="24">
                  <el-tree
                    :props="props"
                    :load="loadNode1"
                    lazy
                    show-checkbox>
                  </el-tree>
                </el-col>
              </el-row>
              <el-row class="ui_classify">
                <el-col :span="24">
                  <el-tree
                    :props="props"
                    :load="loadNode2"
                    lazy
                    show-checkbox>
                  </el-tree>
                </el-col>
              </el-row>
              <el-row class="ui_classify">
                <el-col :span="24">
                  <el-tree
                    :props="props"
                    :load="loadNode3"
                    lazy
                    show-checkbox>
                  </el-tree>
                </el-col>
              </el-row>
            </el-col>
            <el-col :xs="24" :sm="24" :md="18" :lg="9" :xl="6" class="ui_tree_gutter">
              <div class="ui_tree_title">
                <span>定制展示内容</span>
              </div>
              <div v-for="(item, index) in contData" :key="index">
                <el-row>
                  <el-col :span="24">
                    <div class="ui_radio_title" v-text="item.title"></div>
                    <el-row class="ui_radio" v-for="(val,i) in item.children" :key="i">
                      <el-col :span="24">
                        <el-checkbox-group v-model="checkList" @change="handleCheckedChange">
                          <el-checkbox :label="val.id">{{val.title}}</el-checkbox>
                        </el-checkbox-group>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--    下载报告-->
      <div class="ui_download">
        <el-row>
          <el-col :span="21">
            <el-button class="fn-right ui_download_btn">下载报告</el-button>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'RiskStatement',
    data() {
      return {
        value: '',
        options: [],
        props: {
          label: 'label',
          children: 'children',
          isLeaf: 'isLeaf',
        },
        checkAll: false,
        indeterminate: false,
        contData: [{
          title: '评估结果信息',
          children: [{
            title: '展示风险评级（热图）',
            id: 1
          }, {
            title: '展示风险评分（色阶）',
            id: 2
          }, {
            title: '展示风险数据',
            id: 3
          }]
        }, {
          title: '指标信息',
          children: [{
            title: '展示指标名称',
            id: 4
          }, {
            title: '展示指标计算方法',
            id: 5
          }, {
            title: '展示指标权重',
            id: 6
          }]
        }, {
          title: '单元信息',
          children: [{
            title: '展示单元名称',
            id: 7
          }, {
            title: '展示单元属性',
            id: 8
          }, {
            title: '展示上级单元',
            id: 9
          }]
        }],
        checkList: [],

      }
    },
    components: {},
    mounted() {
      console.log()
    },
    methods: {
      /**
       * 定制展示单元
       * @param
       * @returns {Promise}
       * @Author
       * */
      loadNode(node, resolve) {
        if (node.level === 0) {
          let treeData = [{
            label: '总部机构',
            leave: 1
          }]
          return resolve(treeData);
        }
        if (node.level == 1) {
          let treeData = [{
            label: '汇总单元1',
            leave: 2
          }, {
            label: '汇总单元2',
            leave: 2
          }, {
            label: '汇总单元3',
            leave: 2
          }, {
            label: '汇总单元4',
            leave: 2
          }, {
            label: '汇总单元5',
            leave: 2
          }, {
            label: '汇总单元6',
            leave: 2
          }, {
            label: '汇总单元7',
            leave: 2
          }, {
            label: '汇总单元8',
            leave: 2
          }]
          return resolve(treeData);
        }
        if (node.level == 2) {
          let treeData = [{
            label: '评估单元1',
            leave: 3
          }, {
            label: '评估单元2',
            leave: 3
          }, {
            label: '评估单元3',
            leave: 3
          }, {
            label: '评估单元4',
            leave: 3
          }, {
            label: '评估单元5',
            leave: 3
          }, {
            label: '评估单元6',
            leave: 3
          }, {
            label: '评估单元7',
            leave: 3
          }, {
            label: '评估单元8',
            leave: 3
          }]
          return resolve(treeData);
        }
        if (node.level > 2) {
          return resolve([]);
        }
      },
      /**
       * 定制展示指标
       * @param
       * @returns {Promise}
       * @Author
       * */
      loadNode1(node, resolve) {
        if (node.level === 0) {
          let treeData = [{
            label: '固有风险',
            leave: 1
          }]
          return resolve(treeData);
        }
        if (node.level == 1) {
          let treeData = [{
            label: '客户风险',
            leave: 2
          }, {
            label: '产品风险',
            leave: 2
          }, {
            label: '地域风险',
            leave: 2
          }, {
            label: '渠道风险',
            leave: 2
          }, {
            label: '战略风险',
            leave: 2
          }]
          return resolve(treeData);
        }
        if (node.level >= 2) {
          return resolve([]);
        }
      },
      loadNode2(node, resolve) {
        if (node.level === 0) {
          let treeData = [{
            label: '控制有效性',
            leave: 1
          }]
          return resolve(treeData);
        }
        if (node.level == 1) {
          let treeData = [{
            label: '治理',
            leave: 2
          }, {
            label: '客户尽职调查',
            leave: 2
          }, {
            label: '交易监控',
            leave: 2
          }, {
            label: '制裁筛选',
            leave: 2
          }, {
            label: '培训',
            leave: 2
          }, {
            label: '信息共享',
            leave: 2
          }]
          return resolve(treeData);
        }
        if (node.level >= 2) {
          return resolve([]);
        }
      },
      loadNode3(node, resolve) {
        if (node.level === 0) {
          let treeData = [{
            label: '剩余风险',
            leave: 1
          }]
          return resolve(treeData);
        }
        if (node.level >= 1) {
          return resolve([]);
        }
      },
      handleCheckAllChange(val) {
        console.log(val)
        // this.checkedCities = val ? cityOptions : [];
        // this.isIndeterminate = false
      },
      handleCheckedChange(val) {
        if (this.checkList.length > 1) {
          this.checkList.shift()
        }
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/commonSass/ManagerCommonSass";

  .RiskStatement {
    margin-top: 50px;

    .RiskStatement_cont {
      margin: 0 125px;
      /*筛选*/
      .ui_searchCon {
        .ui_search_label {
          margin-top: 20px;
          width: 80px;
          line-height: 40px;
          color: #ccc;
          font-size: 16px;
          font-weight: 400;
          margin-right: 15px;
        }
        .ui_search_select {
          margin-top: 20px;
          width: 160px;
          margin-right: 20px;
        }

        .ui_search_btn {
          margin-top: 25px;
          button {
            width: 90px;
            height: 30px;
            line-height: 30px;
            padding: 0 0;
            text-align: center;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 400;
            color: #fff;
            border: 1px solid #bf7709;
            background: #bf7709;
          }
        }
      }

      /*树*/
      .ui_treeCon {
        margin-top: 20px;
        .ui_tree_gutter {
          margin-left: 90px;
          .ui_tree_title {
            font-size: 16px;
            font-weight: 400;
            padding: 0 0 10px 30px;
          }
          .ui_checkAll {
            height: 25px;
          }
          .ui_classify {
            margin-bottom: 20px;
          }
        }
        .ui_tree_gutter:nth-child(3) {
          .ui_tree_title {
            padding: 0 0 10px 0;
          }
          .ui_radio_title {
            font-size: 16px;
            font-weight: 400;
          }
          .ui_radio {
            margin: 5px 0;
          }
        }
      }
    }

    @media (max-width: 780px) {
      .RiskStatement_cont {
        margin: 0 20px;
      }
    }
    @media (max-width: 1250px) {
      .ui_tree_gutter {
        margin: 0 90px 20px 0 !important;
      }
    }

    /*下载报告*/
    .ui_download {
      margin-top: 100px;
      .ui_download_btn {
        width: 110px;
        height: 30px;
        line-height: 30px;
        padding: 0 0;
        text-align: center;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        border: 1px solid #bf7709;
        background: #bf7709;
      }
    }
  }
</style>

<style lang="scss" type="text/scss">
  .RiskStatement {
    .RiskStatement_cont {
      .ui_search_select {
        i {
          font-size: 24px;
        }
        .el-icon-arrow-up:before {
          content: "\e78f";
        }
      }
      .ui_treeCon {
        .el-icon-caret-right:before {
          content: "\e6d9";
        }
        .expanded.el-icon-caret-right {
          transform: rotate(180deg);
        }
        .expanded.el-icon-caret-right:before {
          content: "\e6d8";
        }
        .ui_tree_gutter:nth-child(1),
        .ui_tree_gutter:nth-child(2) {
          .el-checkbox {
            position: absolute;
            right: 0;
          }
        }
        .ui_tree_gutter:nth-child(2) {
          .ui_checkAll {
            .el-checkbox {
              margin-right: 8px;
            }
            .el-checkbox__label {
              float: left;
              font-weight: 400;
              font-size: 16px;
              margin-right: 10px;
              color: #000;
            }
          }
        }
        .el-tree-node__content,
        .el-tree-node {
            background: #eee;
        }
        .el-tree-node__label {
          font-weight: 400;
          font-size: 16px;
        }
        .el-checkbox__inner,
        .el-checkbox__input.is-checked .el-checkbox__inner {
          width: 20px;
          height: 20px;
          border-radius: 5px;
        }
        .el-checkbox__input.is-checked .el-checkbox__inner::after {
          width: 6px;
          height: 10px;
        }
        .el-checkbox__inner::after {
          left: 6px;
        }
      }
    }
  }
</style>
