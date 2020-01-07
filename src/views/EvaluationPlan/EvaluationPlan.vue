<template>
  <div class="">
    评估计划
    <div class="ui_box_matrix">
      <div class="ui_li_top">
        <div class="ui_li_top_left"></div>
        <div class="ui_li_top_right">
          <div class="ui_li_top_right_title">控制有效性</div>
          <div class="ui_li_top_right_list">
            <ul>
              <li class="ui_excellent">优秀</li>
              <li class="ui_good">良好</li>
              <li class="ui_commonly">一般</li>
              <li class="ui_improvement">需改进</li>
              <li style="width: 175px;" class="ui_defect">缺陷</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="ui_li_bottom_left">
        <div class="ui_li_bottom_left_list"><span>固有风险</span></div>
        <ul class="ui_list">
          <li class="ui_excellent">低</li>
          <li class="ui_good">中低</li>
          <li class="ui_commonly">中</li>
          <li class="ui_improvement">中高</li>
          <li class="ui_defect">高</li>
        </ul>
      </div>
      <div class="ui_li_bottom_right">
        <ul>
          <li class="ui_excellent border0_right" :class="inputBg">
            <el-select v-model="value" placeholder="请选择" @change="ToChangeType">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li class="ui_excellent border0_right">低</li>
          <li class="ui_excellent border0_right">低</li>
          <li class="ui_good border0_right">中低</li>
          <li style="width: 175px;" class="ui_commonly">中</li>
        </ul>
        <ul>
          <li class="ui_excellent border0_right border0_top">低</li>
          <li class="ui_excellent border0_right border0_top">低</li>
          <li class="ui_good border0_right border0_top">中低</li>
          <li class="ui_commonly border0_right border0_top">中</li>
          <li style="width: 175px;" class="ui_improvement border0_top">中1高</li>
        </ul>
        <ul>
          <li class="ui_excellent border0_right border0_top">低</li>
          <li class="ui_good border0_right border0_top">中低</li>
          <li class="ui_commonly border0_right border0_top">中</li>
          <li class="ui_improvement border0_right border0_top">中高</li>
          <li style="width: 175px;" class="ui_defect border0_top">高</li>
        </ul>
        <ul>
          <li class="ui_good border0_right border0_top">中低</li>
          <li class="ui_commonly border0_right border0_top">中</li>
          <li class="ui_improvement border0_right border0_top">中高</li>
          <li class="ui_defect border0_top border0_right">高</li>
          <li style="width: 175px;" class="ui_excellent  ui_defect border0_top">高</li>
        </ul>
        <ul>
          <li class="ui_commonly border0_right border0_top">中</li>
          <li class="ui_improvement border0_right border0_top">中高</li>
          <li class="ui_defect border0_top border0_right">高</li>
          <li class="ui_defect border0_top border0_right">高</li>
          <li style="width: 175px;" class="ui_excellent  ui_defect border0_top">高</li>
        </ul>
        <div class="ui_last_stats">剩余风险</div>
      </div>

    </div>
  </div>
</template>

<script>


  export default {
    name: '',
    data() {
      return {
        inputBg:'',
        options: [{
          value: '1',
          label: '低',
          inputBgColor:'ui_di'
        },{
          value: '2',
          label: '中低',
          inputBgColor:'ui_z_di'
        },{
          value: '3',
          label: '中',
          inputBgColor:'ui_z'
        },{
          value: '4',
          label: '中高',
          inputBgColor:'ui_zg'
        },{
          value: '5',
          label: '高',
          inputBgColor:'ui_height'
        }],
        value: '低'
      }
    },
    components: {},
    mounted() {

    },
    methods: {
      /**
       *  选中后添加相应的class名字  覆盖插件中input 的背景色 以及字体颜色
       * @param url
       * @param data
       * @returns {Promise}
       * @Author 陈成
       * */
      ToChangeType(val){
        console.log(val)
        for(let i=0,j=this.options.length;i<j;i++){
          if(val == this.options[i].value){
            this.inputBg = this.options[i].inputBgColor
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/common.scss";

  .ui_box_matrix {
    width: 1124px;
    height: 474px;
    margin: 0 auto;
    margin-top: 50px;

    .ui_li_top {
      width: 100%;
      height: 119px;

      .ui_li_top_left {
        width: 237px;
        height: 100%;
        float: left;
      }

      .ui_li_top_right {
        width: 887px;
        height: 100%;
        background: $navA0a0a0;
        float: left;

        .ui_li_top_right_title {
          line-height: 59px;
          text-align: center;
          font-size: $fontsize20;
          color: $white;
        }

        .ui_li_top_right_list {
          ul {
            display: inline-block;

            li {
              float: left;
              font-weight: $fontweight500;
              line-height: 60px;
              text-align: center;
              color: $white;
              width: 178px;
              font-size: $fontsize18;
            }
          }
        }
      }
    }

    .ui_li_bottom_left {
      width: 237px;
      height: 355px;
      float: left;
      .ui_li_bottom_left_list{
        width: 60px;
        height: 300px;
        background: $navA0a0a0;
        float: left;
        font-weight: 500;
        color: #fff;
        font-size: 18px;
        writing-mode: tb-rl;
        text-align: center;
        span{
          position: relative;
          left: -16px;
        }
      }
      .ui_list{
        li{
          width: 100%;
          line-height: 60px;
          text-align: center;
          font-weight: 500;
          color: #fff;
          font-size: 18px;
        }
      }
    }

    .ui_li_bottom_right{
      width: 887px;
      height: 355px;
      background: $navA0a0a0;
      float: left;
      ul{
        li{
          line-height: 57px;
          text-align: center;
          font-weight: 500;
          color: #fff;
          font-size: 18px;
          float: left;
          width: 175px;
          border: 2px solid #ffffff;
        }
      }
    }
  }



  /*优秀*/
  .ui_excellent {
    background: #207639;
  }

  /*良好*/
  .ui_good {
    background: #41d36e;
  }

  /*一般*/
  .ui_commonly {
    background: #fff45c;
    color: black !important;
  }

  /*需改进*/
  .ui_improvement {
    background: #f9b552;
    color: black !important;
  }

  /*缺陷*/
  .ui_defect {
    background: #e70012;
    color: black !important;
  }

  .border0_right{
    border-right: none!important;
  }
  .border0_top{
    border-top: none!important;
  }
  .ui_last_stats{
    line-height: 50px;
    text-align: center;
    font-weight: 500;
    color: #fff;
    font-size: 18px;
  }
</style>
