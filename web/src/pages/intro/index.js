import React from 'react';
import {  } from 'antd';
import PageTitle from '../../components/page_title/index';
import './index.less'
import ReactMarkdown from 'react-markdown'

const Intro = ({location})=>{
  
  return (
    <>
    <PageTitle location={location}/>
    <div style={{padding:'0 24px'}}>
      intro
      <ReactMarkdown>
        # Hello, *world*!
        #### GOOD Start
        - ddd
          - 1d
          - 2d
      </ReactMarkdown>
    </div>
    </>
  )
  

}

export default Intro;