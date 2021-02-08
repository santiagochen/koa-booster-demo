import React from 'react';
import { Layout, Row, Col, List } from 'antd';
import SegmentActivityCard from '../../components/segment_activity_card/index'
const { Header, Content } = Layout;
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

class Activity extends React.Component {
  
  render(){
    return (
      <div style={{padding:'0 24px'}}>

        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 5,
            xxl:5,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <SegmentActivityCard title={item.title}/>
            </List.Item>
          )}
        />
        
      </div>
    )
  }

}

export default Activity;