import React from 'react';
import { Layout } from 'antd';
import PageTitle from '../pagetitle/index';
const { Header, Content } = Layout;


class PageBoard extends React.Component {
  
  render(){
    return (
      <>
        <PageTitle/>
        <div>{this.props.children}</div>
      </>
    )
  }

}

export default PageBoard;