import React, {Component} from 'react';
import Header from '../components/Header';
import Countdown from "react-countdown-now";
import firebase from 'firebase';
import { render } from "react-dom";
import db from "../firebase/config.js"
import ReactDom from 'react-dom';
import Popup from 'react-popup';
import Select from 'react-select';


class Rsvp extends Component{
	constructor(props){
		super(props);
		this.state = {
			fullname:'',
			phone:'',
			email:'',
			regdate:'',
			agree:false,
			extras:0,
			address:'',
			extraN:[],
			mode:'rsvp',
			rsvps: [],
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	componentWillMount(){
	}

  	componentDidMount(){

  	}

	onChange(e){
		const target = e.target;
    	const value = target.type === 'checkbox' ? target.checked : target.type === 'number' ? Number(target.value) : target.value;  

    	const name = target.name;
		this.setState({
      		[name]: value
    	});
	}
	onSubmit(e){
		e.preventDefault();
		db.collection("rsvps").doc().set({
	        fullname: this.state.fullname,
	        phone: this.state.phone,
	        email: this.state.email,
	        agree: this.state.agree,
	        address: this.state.address,
	        regdate: new Date(),
	        extras: this.state.extras,
		})
		.then(function() {
		    alert("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

	}

	createInput = () => {
	let guests = []
	for (let i = 0; i < this.state.extras; ++i) {
		guests.push(
			<form action={this.onSubmit}>
				<input type="text" name={'extra' + i} id={'extra' + i} value={this.state.extra$i} onChange={this.onChange} key={i} placeholder="Full Name" />
				<button type="add">+</button>
			</form>

			);
	}
	return guests
	}
	submit(){
	}

  render(){
    const address = this.state.agree 
	? <input type="text" name="address" value={this.state.address} onChange={this.onChange} placeholder="Your Address"/>: null;

    return(
    	      <section className={this.state.mode + ' content'}>
    	<Header title={this.state.mode}/>
    	<div className="formWrap">
          <Countdown
            date={new Date("October 05, 2019 16:00:00")}
            renderer={({ days, hours, minutes, seconds }) => (
              <h3 className="countdown">
                {days} days {hours} hours {minutes} mins {seconds} secs
              </h3>
            )}
          />
	    	<h2>We can't wait to celebrate with you!</h2>

	      <form onSubmit={this.onSubmit}>
	      	<input type="text" name="fullname" placeholder="full name" value={this.state.fullname} onChange={this.onChange}/>
	      	<br/>
	      	<input type="tel" name="phone" placeholder="phone number" value={this.state.phone} onChange={this.onChange}/>
	      	<br/>
	      	<input type="email" name="email" placeholder="email address" value={this.state.email} onChange={this.onChange}/>
	      	<br/>
	      	<div className="question cf">
	      		<span className="fl">Do you want to receive our invitation card?</span>
	      		<span className="fc fr">
					<input type="checkbox" id="agree" name="agree" checked={this.state.agree} onChange={this.onChange} />
					<label for="agree">agree</label>
	      		</span>
	      	</div>
					{address}
	      	<div className="question cf">
		      	<span className="fl">How many friends with you?</span>
		      	<input className="fr" type="number" id="extras" name="extras" value={this.state.extras} onChange={this.onChange} min="0" max="10" />
	      	</div>
	      	<div>
	      	{this.createInput()}
	      	</div>
	      	<button type="submit">Submit</button>
	      </form>
    	</div>
    	</section>
      );
  }
}

export default Rsvp;
