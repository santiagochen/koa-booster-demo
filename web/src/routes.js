import About from './pages/about/index';
import Welcome from './pages/welcome/index';
import Dashboard from './pages/dashboard/index';
import Setting from './pages/setting/index';

const routes = [
  { path:'/', name:'欢迎', comp:<Welcome/> },
  { path:'/dashboard', name:'控制台', comp:<Dashboard/> },
  { path:'/about', name:'关于', comp:<About/> },
  { path:'/setting', name:'设置', comp:<Setting/> }
]

export default routes