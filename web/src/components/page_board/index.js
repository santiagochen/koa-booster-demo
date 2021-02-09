import React from 'react';
import { Layout } from 'antd';
import PageTitle from '../page_title/index';
const { Header, Content } = Layout;
class PageBoard extends React.Component {

  render(){
    return (
      <>
        <PageTitle pathname={this.props.location.pathname}/> 
        <div style={{padding:'0 24px'}}>{this.props.children}</div>
      </>
    )
  }

}

export default PageBoard;