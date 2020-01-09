import Vue from 'vue';
import Router from 'vue-router';
// 首页
import Home from '@/views/Home/Home';
//index页面
import Index from '@/views/Index/Index';
//用户管理
import UserManagement from '@/views/UserManagement/UserManagement';
//评估单元映射
import EvaluationUnitMapping from '@/views/EvaluationUnitMapping/EvaluationUnitMapping';
//评估计划
import EvaluationPlan from '@/views/EvaluationPlan/EvaluationPlan';
//风险评估
import RiskAssessment from '@/views/RiskAssessment/RiskAssessment';
//查看子问卷
import SeeVolume from '@/views/RiskAssessment/SeeVolume';
//分发问卷
import DistributeQuestionnaire from '@/views/DistributeQuestionnaire/DistributeQuestionnaire';
//风险报表
import RiskStatement from '@/views/RiskStatement/RiskStatement';
//管理机构
import ManagementOrganization from '@/views/ManagementOrganization/ManagementOrganization';
//管理评估计划
import ManagementEvaluationPlan from '@/views/ManagementEvaluationPlan/ManagementEvaluationPlan';
//管理汇总路线
import ManageSummaryRoutes from '@/views/ManageSummaryRoutes/ManageSummaryRoutes';
//自定义权重
import CustomWeight from '@/views/CustomWeight/CustomWeight';
//汇总因子权重
import AggregationFactorWeight from '@/views/AggregationFactorWeight/AggregationFactorWeight';
//评级结构
import RatingStructure from '@/views/RatingStructure/RatingStructure';
//关联问题
import RelevanceProblem from '@/views/RelevanceProblem/RelevanceProblem';
//固有风险指标
import InherentRiskIndicators from '@/views/InherentRiskIndicators/InherentRiskIndicators';
//管理问题
import ManagementProblem from '@/views/ManagementProblem/ManagementProblem';
//管理培训
import ManagementTraining from '@/views/ManagementTraining/ManagementTraining';
//创建培训
import TrainingModify from '@/views/ManagementTraining/TrainingModify';
//创建考题
import QuestionsModify from '@/views/ManagementTraining/QuestionsModify';
//选择用户，受邀用户
import SelectUsers from '@/views/ManagementTraining/SelectUsers';
//选择考题
import SelectQuestions from '@/views/ManagementTraining/SelectQuestions';
//查看完成情况
import SeeSituation from '@/views/ManagementTraining/SeeSituation';
//用户培训汇总
import UserTraining from '@/views/UserTraining/UserTraining';
//培训主题名称
import TrainingName from '@/views/UserTraining/TrainingName';
//下载资源
import UploadResources  from '@/views/ManagementTraining/UploadResources';

Vue.use(Router);

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
};

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/DistributeQuestionnaire',
      children: [
        {
          path: '/Index',
          name: 'Index',
          component: Index
        },
        {
          path: '/UserManagement',
          name: 'UserManagement',
          component: UserManagement
        },
        {
          path: '/EvaluationPlan',
          name: 'EvaluationPlan',
          component: EvaluationPlan
        },
        {
          path: '/ManagementOrganization',
          name: 'ManagementOrganization',
          component: ManagementOrganization
        },
        {
          path: '/ManagementEvaluationPlan',
          name: 'ManagementEvaluationPlan',
          component: ManagementEvaluationPlan
        },
        {
          path: '/ManageSummaryRoutes',
          name: 'ManageSummaryRoutes',
          component: ManageSummaryRoutes
        },
        {
          path: '/EvaluationUnitMapping',
          name: 'EvaluationUnitMapping',
          component: EvaluationUnitMapping
        },
        {
          path: '/RiskAssessment',
          name: 'RiskAssessment',
          component: RiskAssessment
        },
        {
          path: '/SeeVolume',
          name: 'SeeVolume',
          component: SeeVolume
        },
        {
          path: '/DistributeQuestionnaire',
          name: 'DistributeQuestionnaire',
          component: DistributeQuestionnaire
        },
        {
          path: '/RiskStatement',
          name: 'RiskStatement',
          component: RiskStatement
        },
        {
          path: '/CustomWeight',
          name: 'CustomWeight',
          component: CustomWeight
        },
        {
          path: '/AggregationFactorWeight',
          name: 'AggregationFactorWeight',
          component: AggregationFactorWeight
        },
        {
          path: '/RatingStructure',
          name: 'RatingStructure',
          component: RatingStructure
        },
        {
          path: '/RelevanceProblem',
          name: 'RelevanceProblem',
          component: RelevanceProblem
        },
        {
          path: '/InherentRiskIndicators',
          name: 'InherentRiskIndicators',
          component: InherentRiskIndicators
        },
        {
          path: '/ManagementProblem',
          name: 'ManagementProblem',
          component: ManagementProblem
        },
        {
          path: '/ManagementTraining',
          name: 'ManagementTraining',
          component: ManagementTraining
        },
        {
          path: '/TrainingModify',
          name: 'TrainingModify',
          component: TrainingModify
        },
        {
          path: '/QuestionsModify',
          name: 'QuestionsModify',
          component: QuestionsModify
        },
        {
          path: '/SelectUsers',
          name: 'SelectUsers',
          component: SelectUsers
        },
        {
          path: '/SelectQuestions',
          name: 'SelectQuestions',
          component: SelectQuestions
        },
        {
          path: '/SeeSituation',
          name: 'SeeSituation',
          component: SeeSituation
        },
        {
          path: '/UserTraining',
          name: 'UserTraining',
          component: UserTraining
        },
        {
          path: '/TrainingName',
          name: 'TrainingName',
          component: TrainingName
        },
        {
          path: '/UploadResources',
          name: 'UploadResources',
          component: UploadResources
        }
      ]
    },
  ]
});
// 路由拦截
router.beforeEach((to, from, next) => {

  next()
});
export default router
