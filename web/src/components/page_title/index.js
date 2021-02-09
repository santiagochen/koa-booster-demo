import React from 'react';
import { PageHeader } from 'antd';

const PageTitle = ({pathname})=>{
  
  const routes = pathname.split('/').map(item=>({
    path: item,
    breadcrumbName: item
  }))

  return  (
    <>
      <PageHeader
        className="site-page-header"
        // title={pathname}
        breadcrumb={{ routes }}
        // subTitle={"This is a subtitle - "+pathname }
      />
    </>
  )
}

export default PageTitle