import Rule from './pages/rule/index';
import Segment from './pages/segment/index';
import Activity from './pages/activity/index';
import Log from './pages/log/index';
import Statics from './pages/statics/index';

export default [
  { path:'/', name:'活动页面', comp:<Activity/>, alias:'activity' },
  { path:'/segment', name:'活动组件', comp:<Segment/> },
  { path:'/rule', name:'活动规则', comp:<Rule/> },
  { path:'/statics', name:'活动统计', comp:<Statics/> },
  { path:'/log', name:'活动日志', comp:<Log/> }
]