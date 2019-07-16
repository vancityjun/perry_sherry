import React, {Component} from 'react';
import Header from '../components/Header';

class After extends Component{
		constructor(props){
		super(props);
		this.state = {
			mode:'after wedding'
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

export default After;
