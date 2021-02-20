import React from 'react';
import { Space, Row, Col, Avatar, Image, Menu, Dropdown, Button, Typography} from 'antd';
import { UserOutlined, MailOutlined, DownOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import vapourLogo from '../../assets/vapour.png';
import './index.less';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
const PageBoard = ({location})=> {
  
  return (
    <>
      <Row>
        <Col flex="120px" style={{textAlign:"center"}}>
          <Space>
          <Avatar src={vapourLogo} /> 
          <Typography.Text type="primary">Vapour</Typography.Text>
          </Space>
        </Col>
        
        <Col flex="auto">

        {/* <Menu mode="horizontal" style={{textAlign:'right'}}>
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key="mail2" icon={<MailOutlined />}>
            Navigation Two
          </Menu.Item>
          <Menu.Item key="mail3" icon={<MailOutlined />}>
            Navigation Three
          </Menu.Item>
        </Menu> */}

        </Col>
        <Col flex="160px" style={{textAlign:"center"}}>
        <Dropdown overlay={menu} >
          <a style={{color:'#000'}} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Space value="middle"><Avatar src={vapourLogo} />[用户名称]<DownOutlined /></Space>
          </a>
        </Dropdown>
        </Col>
      </Row>
    </>
  )

}

export default PageBoard;