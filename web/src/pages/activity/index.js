import React from 'react';
import { List } from 'antd';
import SegmentActivityCard from '../../components/segment_activity_card/index'
import PageTitle from '../../components/page_title/index';

const Activity = ({location})=>{
  const data = [
    {title: 'Title 1',},{title: 'Title 2',},{title: 'Title 3',},{title: 'Title 4',},{title: 'Title 5',}
  ];
  return (
    <>
      <PageTitle location={location}/> 
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
          renderItem={(item) => (
            <List.Item>
              {item.title}
              <SegmentActivityCard title={item.title}/>
            </List.Item>
          )}
        />
        
      </div>
    </>
  )
  

}

export default Activity;