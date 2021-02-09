import React from 'react';
import {  } from 'antd';
import PageTitle from '../../components/page_title/index';
import './index.less'

const Rule = ({location})=>{
  
  return (
    <>
    <PageTitle pathname={location.pathname}/> 
    <div style={{padding:'0 24px'}}>
    Rule
    </div>
    </>
  )
  

}

export default Rule;