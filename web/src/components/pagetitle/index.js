import React from 'react';
import { PageHeader } from 'antd';
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
          title="Title"
          breadcrumb={{ routes }}
          subTitle="This is a subtitle"
        />
      </>
    )
  }
}

export default PageTitle;

