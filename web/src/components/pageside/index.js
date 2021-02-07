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
  SettingOutlined
} from '@ant-design/icons';
import './index.less'

const { SubMenu } = Menu;

class PageSide extends React.Component {

  render() {
    
    return (
      <div style={{ width: '150' }}>
        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button> */}
        
        <Menu
          defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <Menu.Item key="1" icon={<LayoutOutlined /> }>
            <Link to="/">活动页面</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined /> }>
            <Link to="/dashboard">活动组件</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            <Link to="/setting">全局设置</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            <Link to="/about">关于</Link>
          </Menu.Item>
          {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
        
      </div>
    );
  }
}

export default PageSide;