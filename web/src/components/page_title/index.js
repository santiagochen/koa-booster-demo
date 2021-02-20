import React, {useContext, useState} from 'react';
import { PageHeader } from 'antd';
import _ from 'lodash'
import { AppContext } from '../../hooks/context'

const PageTitle = ({location})=>{
  console.log("location " , location.pathname)
  const appCtx =  useContext(AppContext);

  const [routes, setRoutes] = useState(function(){
    return location.pathname.substring(1).split('/').map(item=>({
      path: item,
      breadcrumbName: (_.find( appCtx.routes, (o)=>{ return o.path == `/${item}` } )).name
    }))
  }) 

  // const matchedRoute = _.find(appCtx.routes, (o)=>{ return o.path===location.pathname })
  // console.log( 'matchedRoute : ', matchedRoute )
  // const routes = {
  //   path : matchedRoute.path,
  //   breadcrumbName : matchedRoute.name
  // }
  

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