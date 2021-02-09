import React from 'react';
import {  } from 'antd';
import PageTitle from '../../components/page_title/index';
import './index.less'

const Segment = ({location})=>{
  
  return (
    <>
    <PageTitle pathname={location.pathname}/> 
    <div style={{padding:'0 24px'}}>
    Segment
    </div>
    </>
  )
  

}

export default Segment;