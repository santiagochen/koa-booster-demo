import React from 'react';
import {  } from 'antd';
import PageTitle from '../../components/page_title/index';
import MdFile from '../../components/md_file'
import source from './index.md';
import './index.less'

const Intro = ({location})=>{

  return (
    <>
      <PageTitle location={location}/>
      <div style={{padding:'0 24px'}}>
        <MdFile file={source}/>
      </div>
    </>
  )
  

}

export default Intro;