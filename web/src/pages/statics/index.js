import React from 'react';
import {  } from 'antd';
import PageTitle from '../../components/page_title/index';
import './index.less'

const Statics = ({location})=>{
  
  return (
    <>
    <PageTitle pathname={location.pathname}/> 
    <div style={{padding:'0 24px'}}>
    Statics 
    </div>
    </>
  )
  

}

export default Statics;