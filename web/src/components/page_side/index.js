import React, {useContext} from 'react';
import { AppContext } from '../../hooks/context'
import {
  Link
} from "react-router-dom";
import { Menu, Button, Affix } from 'antd';
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
} from '@ant-design/icons';
import './index.less'

const { SubMenu } = Menu;

const PageSide = ({location})=>{
  const appCxt = useContext(AppContext);
  return (
    <div style={{ width: '150' }}>
      <div>SS: {JSON.stringify( appCxt )}</div>
      <Menu
        defaultSelectedKeys={[location.pathname]}
        // defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="/" icon={<LayoutOutlined /> }>
          <Link to="/">活动页面</Link>
        </Menu.Item>
        <Menu.Item key="/segment" icon={<AppstoreAddOutlined /> }>
          <Link to="/segment">活动组件</Link>
        </Menu.Item>
        <Menu.Item key="/rule" icon={<ControlOutlined />}>
          <Link to="/rule">活动规则</Link>
        </Menu.Item>
        <Menu.Item key="/statics" icon={<PieChartOutlined />}>
          <Link to="/statics">活动统计</Link>
        </Menu.Item>
        <Menu.Item key="/log" icon={<HistoryOutlined />}>
          <Link to="/log">活动日志</Link>
        </Menu.Item>
        
      </Menu>
      
    </div>
  );
  
}

export default PageSide;