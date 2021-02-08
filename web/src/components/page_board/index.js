import React from 'react';
import { Layout } from 'antd';
import PageTitle from '../page_title/index';
const { Header, Content } = Layout;
class PageBoard extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      // navigated!
    }
  }

  render(){
    return (
      <>
        <PageTitle /> 
        <div>{this.props.children}</div>
      </>
    )
  }

}

export default PageBoard;