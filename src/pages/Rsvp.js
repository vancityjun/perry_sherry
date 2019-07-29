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
			mode:'rsvp',
			rsvps: []
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
	submit(){
	}
 options = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
];

  render(){
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
	      	<div className="cf">
	      		<span className="fl">Do you want to receive our invitation card?</span>
	      		<span className="fc fr">
					<input type="checkbox" id="agree" name="agree" checked={this.state.agree} onChange={this.onChange} />
					<label for="agree">agree</label>
	      		</span>
	      	</div>
	      	<div className="cf">
		      	<span className="fl">How many friends with you?</span>
			      	<input className="fr" type="number" id="extras" name="extras" value={this.state.extras} onChange={this.onChange} min="0" max="10" />
			      	</div>
	      	<button type="submit">Submit</button>
	      </form>
    	</div>
    	</section>
      );
  }
}

export default Rsvp;
