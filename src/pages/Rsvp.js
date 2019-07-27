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
			firstname:'',
			lastname:'',
			regdate:'',
			mode:'rsvp',
			rsvps: []
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	componentWillMount(){
/*
    firebase.database().ref().child('rsvps').on('child_added', snap => {
        // console.log(snap.toJSON());
        // console.log(snap.val().firstname);
        var list = [];
        snap.forEach(function(childSnapshot){
        	var item = childSnapshot.val();

        	list.push(item);
        });
        // console.log(list);
        this.setState({
        	rsvps: list
        });
        console.log(this.state.rsvps);
    });
    */
    const rsvpsRef = db.collection('rsvps');
	let allRsvps = rsvpsRef.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
	    // console.log(this.state.rsvps);
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
  }

  	componentDidMount(){

  	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}
	onSubmit(e){
		e.preventDefault();
		db.collection("rsvps").doc().set({
	        firstname: this.state.firstname,
	        lastname: this.state.lastname,
	        regdate: new Date(),
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});
	}
	submit(){
	}

  render(){

  	let rsvps = this.state.rsvps.map(guest => {
  		return(
  			<div key="{i}" className="lists">
  				<span>{guest.firstname}</span>
  				<span>{guest.lastname}</span>
  			</div>  		
  			);
  		});
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
	      	<input type="text" name="firstname" placeholder="first name" value={this.state.firstname} onChange={this.onChange}/>
	      	<br/>
	      	<input type="text" name="lastname" placeholder="last name" value={this.state.lastname} onChange={this.onChange}/>
	      	<br/>
	      	<button type="submit">Submit</button>
	      </form>
    	</div>
    	<span>{rsvps}</span>
    	</section>
      );
  }
}

export default Rsvp;
