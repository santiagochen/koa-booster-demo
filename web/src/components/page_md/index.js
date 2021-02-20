import React from 'react';
import './index.less'
const footerText = 'Vapour ©2021 Created by Appolo'

class PageFooter extends React.Component {
  
  render(){
    let markdown = markdown.parse(this.props.markdown);
    return <div dangerouslySetInnerHTML={{__html:markdown}} />;
  }

}

export default PageFooter;