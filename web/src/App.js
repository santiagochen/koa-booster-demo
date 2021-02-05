

import { Layout } from 'antd';
import PageHeader from './components/pageheader/index';
import PageSide from './components/pageside/index';
import PageBoard from './components/pageboard/index';
import PageFooter from './components/pagefooter/index';
import './App.less';

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (

    <Layout>
      <Header><PageHeader/></Header>
      <Layout>
        <Sider><PageSide/></Sider>
        <Layout>
          <Content><PageBoard/></Content>
          <Footer>
            <PageFooter footerText='Vapour ©2021 Created by Appolo'/>
          </Footer>
        </Layout>
      </Layout>
      
    </Layout>
      
  );
}

export default App;
