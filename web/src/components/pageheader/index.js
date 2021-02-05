import React from 'react';
import { Row, Col, Avatar, Image, Menu } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

class PageBoard extends React.Component {
  
  render(){
    return (
      <>
        <Row>
          <Col flex="100px"><Avatar icon={<UserOutlined />} /></Col>
          <Col flex="auto">

          <Menu mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>
          </Menu>

          </Col>
          <Col flex="100px"><Avatar icon={<UserOutlined />} /></Col>
        </Row>
      </>
    )
  }

}

export default PageBoard;