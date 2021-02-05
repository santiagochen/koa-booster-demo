import React from 'react';
import './index.less'
const footerText = 'Ant Design ©2018 Created by Ant UED'

class PageFooter extends React.Component {
  
  render(){
    return (
      <div className="page-footer">
        {this.props.footerText ? this.props.footerText : footerText}
      </div>
    )
  }

}

export default PageFooter;