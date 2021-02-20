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

import routes from './config/routes'
import { AppContext } from './hooks/context'

import './App.less';

function App() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <AppContext.Provider value={{routes, 'theme':'light'}}>
    <Router>
    
    <Layout style={{ height: '100%' }} >
      
      <Layout>
        <Affix style={{backgroundColor:'#ffffff'}}>
          <Sider theme='light' collapsible >
            <Switch>
              <PageSide/>
            </Switch>
          </Sider>
        </Affix>
        <Layout>
          <Content>
          <Switch>
            
            { routes.map((item)=>(
              <Route 
                exact 
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
