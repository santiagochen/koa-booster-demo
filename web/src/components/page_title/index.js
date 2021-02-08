import React from 'react';
import { PageHeader } from 'antd';
import { useLocation } from 'react-router-dom';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

class PageTitle extends React.Component {

  

  render() {
    return (
      <>
        <PageHeader
          className="site-page-header"
          title={ JSON.stringify(this.props) + ' :: '}
          breadcrumb={{ routes }}
          subTitle="This is a subtitle"
        />
      </>
    )
  }
}

export default PageTitle;

