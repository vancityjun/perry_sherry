import React, {Component} from 'react';
import Header from '../components/Header';

class Ourstory extends Component{
	constructor(props){
		super(props);
		this.state = {
			mode:'ourstory'
		}
	}
  render(){
    return(
    	<section className={this.state.mode + ' content'}>
    	<Header title={this.state.mode}/>
      </section>
      );
  }
}

export default Ourstory;
