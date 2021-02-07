import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Layout, Affix } from 'antd';
import PageHeader from './components/pageheader/index';
import PageSide from './components/pageside/index';
import PageBoard from './components/pageboard/index';
import PageFooter from './components/pagefooter/index';
import routes from './routes'

import './App.less';

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  
  let [pageSideCollapsed, setPageSideCollapsed] = useState(false)
  let onCollapse = collapsed => {
    setPageSideCollapsed( collapsed )
  };
  
  return (
    <Router>
    <Layout style={{ height: '100%' }} >
      <Affix offsetTop={0}>
      <Header style={{ padding:'0px'}}>
        <PageHeader />
      </Header>
      </Affix>
      <Layout>
        <Affix offsetTop={64} style={{backgroundColor:'#ffffff'}}>
          <Sider theme='light' collapsible collapsed={pageSideCollapsed} onCollapse={onCollapse}><PageSide/></Sider>
        </Affix>
        <Layout>
          <Content>
            <PageBoard>
              <Switch>
                { routes.map(item=>(
                  <Route exact path={item.path}>
                    {item.comp}
                  </Route>
                )) }
              </Switch>
            </PageBoard>
          </Content>
          {/* <Footer><PageFooter/></Footer> */}
        </Layout>
      </Layout>
    </Layout>
    </Router>  
  );
}

export default App;
