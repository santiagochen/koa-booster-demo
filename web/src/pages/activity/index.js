import React from 'react';
import { Layout, Row, Col, List } from 'antd';
import SegmentActivityCard from '../../components/segment_activity_card/index'
import PageTitle from '../../components/page_title/index';

const Activity = ({location})=>{
  const data = [
    {title: 'Title 1',},{title: 'Title 1',},{title: 'Title 1',},{title: 'Title 1',},{title: 'Title 1',}
  ];
  return (
    <>
    <PageTitle pathname={location.pathname}/> 
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
    </>
  )
  

}

export default Activity;