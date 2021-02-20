import React, {useContext} from 'react'
import routesArr from '../../config/routes'
import _ from 'lodash'
import { AppContext } from '../../hooks/context'
import {
  Link
} from "react-router-dom";
import { Menu, Button, Affix } from 'antd'

import './index.less'

const { SubMenu } = Menu;

const PageSide = ({location})=>{
  
  return (
    <div style={{ width: '150' }}>
      <Menu
        defaultSelectedKeys={[location.pathname]}
        // defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {
        routesArr.filter(i=>!i.hidden).map(item=>(
          <Menu.Item key={item.path}  >
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>
        ))
        }
        
      </Menu>
      
    </div>
  );
  
}

export default PageSide;