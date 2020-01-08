<template>
  <div class="ui_content_tab" :style="bg2">
    <el-row @mouseout.native="MouseOutRow()">
      <el-col :span="3" v-for="(item,index) in navArr" :key="index" @mouseover.native="FirstMouseOver(index)" @click.native="FirstClick(index)">
        <div class="ui_nav_style ellipsis"
             :style="{'background':item.activeBgColor}"
             :title="item.name">{{item.name}}
          <!--    二级菜单-->
          <el-row class="ui_second_row_nav" :class="{'activeBlock': current === index}" @mouseout.native="SecondRowMouseOut()">
            <el-col :span="3" v-for="(ite,idx) in item.children" :key="idx" @click.native="SecondClick(idx)" @mouseover.native="SecondMouseOver(idx)">
              <div class="ui_nav_style ellipsis" :class="{'childActive':ite.activeBgColor}">{{ite.name}}</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  export default {
    name: '',
    props: ['changeBgColor2', 'changeBgColor3', 'changeBgColor4', 'changeBgColor5'],
    data() {
      return {
        show: false,
        current: 0,
        childrenArr: [],
        navArr: [{
          name: '用户管理',
          active: false,
          path: '',
          activeBgColor: '#BF7709',
          show:false,
          children: [{
            name: '管理用户',
            active: false,
            path: 'UserManagement',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '配置权限',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '设置邮箱',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }]
        }, {
          name: '评估单元映射',
          active: false,
          path: 'EvaluationUnitMapping',
          activeBgColor: '',
          show:false,
          children: [{
            name: '管理机构',
            active: false,
            path: 'ManagementOrganization',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '管理业务',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '管理业务属性',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '管理客户类型',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '管理产品类型',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '管理渠道类型',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '管理控制类型',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '管理单元',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }]
        }, {
          name: '评估计划',
          active: false,
          path: '',
          activeBgColor: '',
          show:false,
          children: [{
            name: '管理评估计划',
            active: false,
            path: 'ManagementEvaluationPlan',
            activeBgChild:'',
            activeBgColor: '',
          }]
        }, {
          name: '线上培训',
          active: false,
          path: '',
          activeBgColor: '',
          show:false,
          children: [{
            name: '管理培训',
            active: false,
            path: 'ManagementTraining',
            activeBgChild:'',
            activeBgColor: '',
          },{
            name: '用户培训汇总',
            active: false,
            path: 'UserTraining',
            activeBgChild:'',
            activeBgColor: '',
          }]
        },{
          name: '风险评估',
          active: false,
          path: 'RiskAssessment',
          activeBgColor: '',
          show:false,
          children: [{
            name: '分发问卷',
            active: false,
            path: 'DistributeQuestionnaire',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '经办问卷',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '自审核问卷',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '问卷监控',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '问卷审批',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '单元评级试算',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '管理整体评级',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }]
        }, {
          name: '风险报表',
          active: false,
          path: 5,
          activeBgColor: '',
          show:false,
          children: [{
            name: '评估单元综述',
            active: false,
            path: 'RiskStatement',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '汇总报告',
            active: false,
            path: '',
            activeBgColor: '',
          }, {
            name: '比较报告',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '单元排序',
            active: false,
            path: '',
            path: 'ManagementTraining',
            activeBgChild:'',
            activeBgColor: '',
          }, {
            name: '评级结构',
            active: false,
            path: 'UserTraining',
            activeBgChild:'',
            activeBgColor: '',
          }]
        }, {
          name: '审计痕迹',
          active: false,
          path: 7,
          activeBgColor: '',
          children: [{
            name: '管理审计痕迹',
            active: false,
            path: '',
            activeBgChild:'',
            activeBgColor: '',
          }]
        }],
        bg2: this.changeBgColor2,
        bg3: '#BF7709',
        activeColor: '#BF7709',
        bgWhite: '#ffffff'
      }
    },
    components: {},
    watch: {
      changeBgColor2(val) {
        this.bg2 = 'background:' + val
      },
      changeBgColor3(val) {
        this.bg3 = val;
        //监测背景色实时变化
        for (let i = 0, j = this.navArr.length; i < j; i++) {
          if (this.navArr[i].activeBgColor != '') {
            this.navArr[i].activeBgColor = val
          }
        }
      },
    },
    mounted() {
      this.init()
    },
    methods: {
      /**
       * 首页菜单点击  点击首页
       * @param
       * @returns {Promise}
       * @Author 陈成
       * */
      FirstClick(index){
        if(index == 0){
          let _clickItem = parseInt(window.sessionStorage.getItem('firstShowItem'));
          let _clickSecondItem = parseInt(window.sessionStorage.getItem('secondShowItem'));
          this.navArr[0].activeBgColor = this.activeColor;
          this.navArr[_clickItem].children[_clickSecondItem].activeBgColor = '';
          window.sessionStorage.removeItem('secondShowItem');
          window.sessionStorage.removeItem('firstShowItem');

        }
      },
      /**
       * 初始化加载菜单导航z
       * @param
       * @returns {Promise}
       * @Author 陈成
       * */
      init(){
        if(window.sessionStorage.getItem('secondShowItem')){
          this.navArr[0].activeBgColor = '';
          let _clickItem = parseInt(window.sessionStorage.getItem('firstShowItem'));
          let _clickSecondItem = parseInt(window.sessionStorage.getItem('secondShowItem'));
          this.navArr[_clickItem].activeBgColor = this.activeColor;
          this.navArr[_clickItem].children[_clickSecondItem].activeBgColor = this.activeColor;
          this.current = _clickItem;
        }else{
          this.navArr[0].activeBgColor = this.activeColor;
          this.$goRoute('/')
        }
      },
      /**
       * 滑出二级菜单
       * @param
       * @returns {Promise}
       * @Author 陈成
       * */
      SecondRowMouseOut(){
        this.init()
      },
      /**
       * 滑入二级菜单每个item
       * @param
       * @returns {Promise}
       * @Author 陈成
       * */
      SecondMouseOver(index){
        let _children = this.navArr[this.current].children;
        for(let i=0,j=_children.length;i<j;i++){
          _children[i].activeBgColor = '';
        }
      },
      /**
       * 选中二级菜单
       * @param
       * @returns {Promise}
       * @Author 陈成
       * */
      SecondClick(index){
        window.sessionStorage.setItem('firstShowItem',this.current);
        window.sessionStorage.setItem('secondShowItem',index);
        this.navArr[this.current].children[index].activeBgColor = this.activeColor;
        //选中二级菜单进行路由跳转
        if(index && index != undefined){
          let path = this.navArr[this.current].children[index].path;
          this.$goRoute(path)
        }else{
          this.$goRoute('')
        }
      },
      /**
       * 划过一级菜单
       * @param
       * @returns {Promise}
       * @Author 陈成
       * */
      FirstMouseOver(index){
        this.current = index;
        for(let i=0,j=this.navArr.length;i<j;i++){
          this.navArr[i].activeBgColor = '';
        }
        this.navArr[index].activeBgColor = this.activeColor;
      },
      /**
       * 滑出一级菜单整体
       * @param
       * @returns {Promise}
       * @Author 陈成
       * */
      MouseOutRow(){
        this.current = 0;
        for(let i=0,j=this.navArr.length;i<j;i++){
          this.navArr[i].activeBgColor = '';
        }
        if(window.sessionStorage.getItem('firstShowItem')){
          let _clickItem = parseInt(window.sessionStorage.getItem('firstShowItem'));
          this.navArr[_clickItem].activeBgColor = this.activeColor;
          this.current = _clickItem;
        }else{
          this.navArr[0].activeBgColor = this.activeColor;
        }
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/common.scss";

  .ui_content_tab {
    background: $navBgColor;
    width: 100%;
    height: 74px;

  }

  .ui_nav_style {
    font-size: $fontsize18;
    color: $white;
    text-align: center;
    line-height: 74px;
    cursor: pointer;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .active {
    background: $navHoverBg;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .ui_second_row_nav {
    display: none;
    background: $navHoverBg;
    position: absolute;
    width: 100%;
    top: 74px;
    z-index: 999;
    left: 0;
    .ui_nav_style {
      height: 50px !important;
      line-height: 50px !important;
    }
    .ui_nav_style:hover {
      background: white !important;
      color: $navHoverBg !important;
    }
  }


  .activeBlock{
    display: block;
  }

  .childActive{
    background: white !important;
    color: $navHoverBg !important;
  }
</style>
