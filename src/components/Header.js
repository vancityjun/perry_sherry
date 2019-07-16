import React, {Component} from 'react';

class Header extends Component{

  render(){
    return(
    		<div className={this.props.title + " header"}>
   		   		<h1 className="title">{this.props.title}</h1>
    		</div>
      );
  }
}

export default Header;
