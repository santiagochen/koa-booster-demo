import React from 'react';
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

  return (
    <div style={{ width: '150' }}>
      <div> match: {JSON.stringify( location )} </div>
      <Menu
        defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1" icon={<LayoutOutlined /> }>
          <Link to="/">活动页面</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreAddOutlined /> }>
          <Link to="/segment">活动组件</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ControlOutlined />}>
          <Link to="/rule">活动规则</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<PieChartOutlined />}>
          <Link to="/statics">活动统计</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<HistoryOutlined />}>
          <Link to="/log">活动日志</Link>
        </Menu.Item>
        
      </Menu>
      
    </div>
  );
  
}

export default PageSide;