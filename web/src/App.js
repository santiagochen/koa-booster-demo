import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { Layout, Affix } from 'antd';
import PageHeader from './components/page_header/index';
import PageSide from './components/page_side/index';
import PageBoard from './components/page_board/index';
import PageFooter from './components/page_footer/index';
import routes from './routes'

import './App.less';

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  // let location = useLocation();
  // console.log( 'location : ', useLocation() )
  // let [pageSideCollapsed, setPageSideCollapsed] = useState(false)
  // let onCollapse = collapsed => {
  //   setPageSideCollapsed( collapsed )
  // };

  return (
    <Router><Switch>
    <Layout style={{ height: '100%' }} >
      <Affix offsetTop={0}>
      <Header style={{ padding:'0px'}}>
        <PageHeader />
      </Header>
      </Affix>
      <Layout>
        <Affix offsetTop={64} style={{backgroundColor:'#ffffff'}}>
          <Sider theme='light' collapsible ><PageSide/></Sider>
        </Affix>
        <Layout>
          <Content>
            <PageBoard>
              
              { routes.map((item,index)=>(
                <Route key={index} exact path={item.path}>
                  {item.comp}
                </Route>
              )) }
              
            </PageBoard>
          </Content>
          {/* <Footer><PageFooter/></Footer> */}
        </Layout>
      </Layout>
    </Layout>
    </Switch></Router>  
  );
}

export default App;
