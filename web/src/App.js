import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Layout, Affix } from 'antd';
import PageHeader from './components/page_header/index';
import PageSide from './components/page_side/index';
import PageBoard from './components/page_board/index';
import PageFooter from './components/page_footer/index';

import Rule from './pages/rule/index';
import Segment from './pages/segment/index';
import Activity from './pages/activity/index';
import Log from './pages/log/index';
import Statics from './pages/statics/index';
import Page404 from './pages/page404/index';

import routes from './config/routes'
import { AppContext } from './hooks/context'

import './App.less';

function App() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <AppContext.Provider value={{routes, 'theme':'light'}}>
    <Router>
    
    <Layout style={{ height: '100%' }} >
      <Affix offsetTop={0}>
      <Header style={{ padding:'0px', 'borderBottom':'solid 1px #ddd' }}>
        <PageHeader />
      </Header>
      </Affix>
      <Layout>
        <Affix offsetTop={64} style={{backgroundColor:'#ffffff'}}>
          <Sider theme='light' collapsible >
            <Switch>
              <PageSide/>
            </Switch>
          </Sider>
        </Affix>
        <Layout>
          <Content>
          <Switch>
            
            { routes.map((item,index)=>(
              <Route 
                key={index} exact 
                path={item.path?item.path:undefined}
                component={item.comp} 
              />
            )) }
             
          </Switch>   
          </Content>
          
        </Layout>
      </Layout>
    </Layout>
    
    </Router>  
    </AppContext.Provider>
    
  );
}

export default App;
