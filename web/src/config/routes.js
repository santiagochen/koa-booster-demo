
import Intro from '../pages/intro/index';
import Page404 from '../pages/page404/index';

import {
  AppstoreAddOutlined,
  HomeOutlined,
  LayoutOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  ControlOutlined,
  PieChartOutlined,
  HistoryOutlined
} from '@ant-design/icons'

export default [
  { path:'/', name:'介绍', comp:Intro, icon:<LayoutOutlined/>   },
  { path:'/intro', name:'介绍', comp:Intro, hidden:true, icon:<LayoutOutlined/>   },
  { path:'/demo', name:'快速开始', comp:Intro, icon:<ControlOutlined/>   },
  { path:'/router', name:'路由', comp:Intro, icon:<AppstoreAddOutlined/>   },
  { path:'/controller', name:'控制器', comp:Intro, icon:<PieChartOutlined/>   },
  { path:'/service', name:'服务', comp:Intro, icon:<HistoryOutlined/>   },
  { path:'/middlewares', name:'中间件', comp:Intro, icon:<HistoryOutlined/>   },
  { path:'/utils', name:'工具', comp:Intro, icon:<HistoryOutlined/>   },
  { path:'/config', name:'配置', comp:Intro, icon:<HistoryOutlined/>   },
  { name:'404页面', comp:Page404, hidden:true },
]