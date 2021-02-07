import React from 'react';
import { List, Typography, Divider, Pagination, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class Welcome extends React.Component {
  
  render(){
    return (
      <>
        
        <List
        header={<div>Welcome</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
        />
        
        <Pagination style={{padding:'20px 0 0 24px'}} defaultCurrent={6} total={500} />
        
      </>
    )
  }

}

export default Welcome;