import React, {Component} from 'react';
import Header from '../components/Header';


class Rsvp extends Component{
	constructor(props){
		super(props);
		this.state = {
			name:'',
			mode:'rsvp'
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}
	onSubmit(e){
		e.preventDefault();

		const post = {
			name: this.state.name
		}
		
	}
  render(){
    return(
    	      <section className={this.state.mode + ' content'}>
    	<Header title={this.state.mode}/>
    	<div className="formWrap">
	    	<h2>We can't wait to celebrate with you!</h2>
	      <form onSubmit={this.onSubmit} >
	      	<input type="text" name="firstName" placeholder="first name" value={this.state.firstName} onChange={this.onChange}/>
	      	<br/>
	      	<input type="text" name="lastName" placeholder="last name" value={this.state.lastName} onChange={this.onChange}/>
	      	<br/>
	      	<button type="submit">Submit</button>
	      </form>
    	</div>
    	</section>
      );
  }
}

export default Rsvp;
