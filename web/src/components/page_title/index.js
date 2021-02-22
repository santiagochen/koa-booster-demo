import React, {useContext, useState} from 'react';
import { PageHeader } from 'antd';
import _ from 'lodash'
import { AppContext } from '../../hooks/context'

const PageTitle = ({location})=>{
  
  const appCtx =  useContext(AppContext);

  const routes = ('/#'+location.pathname).substring(1).split('/').map(item=>({
    path: item,
    breadcrumbName: _.find( appCtx.routes, (o)=>{ return o.path == `/${item}` } ) ? (_.find( appCtx.routes, (o)=>{ return o.path == `/${item}` } )).name : ' '
  }))
  const matchedRoute = _.find( appCtx.routes, (o)=>{ return o.path == `/${location.pathname.substring(1) }` } )

  return  (
    <>
      <PageHeader
        className="site-page-header"
        title={ matchedRoute.name }
        breadcrumb={{ routes }}
        subTitle={ matchedRoute.subtitle }
      />
    </>
  )
}

export default PageTitle