import React, {Component} from 'react';
import Header from '../components/Header';
import Countdown from "react-countdown-now";
import firebase from 'firebase';
import { render } from "react-dom";
import db from "../firebase/config.js"
import ReactDom from 'react-dom';
import Popup from 'react-popup';


class Rsvp extends Component{
	constructor(props){
		super(props);
		this.state = {
			fullname:'',
			phone:'',
			email:'',
			regdate:'',
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
		this.setState({[e.target.name]: e.target.value});
	}
	onSubmit(e){
		e.preventDefault();
		db.collection("rsvps").doc().set({
	        fullname: this.state.fullname,
	        phone: this.state.phone,
	        email: this.state.email,
	        regdate: new Date(),
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
					<input type="checkbox" id="agree" name="agree" />
					<label for="agree">agree</label>
	      		</span>
	      	</div>
	      	<div className="cf">
		      	<span className="fl">How many friends with you?</span>
			      	<span className="fr">
				      	<select name="extra" id="extra" className="">
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
				      	</select>
			      	</span>
			      	</div>
	      	<button type="submit">Submit</button>
	      </form>
    	</div>
    	</section>
      );
  }
}

export default Rsvp;
