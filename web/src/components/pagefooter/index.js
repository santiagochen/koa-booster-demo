import React from 'react';
import './index.less'
const footerText = 'Vapour ©2021 Created by Appolo'

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