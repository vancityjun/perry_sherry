import React, {Component} from 'react';
import Header from '../components/Header';
import Countdown from "react-countdown-now";
import firebase from 'firebase';
import { render } from "react-dom";

      const config = {
    apiKey: "AIzaSyDWCgs-GilUNpngWoee8NfKUqsnCvgNf3c",
    authDomain: "perrysherry-c6162.firebaseapp.com",
    databaseURL: "https://perrysherry-c6162.firebaseio.com",
    projectId: "perrysherry-c6162",
    storageBucket: "",
    messagingSenderId: "153288497020",
    appId: "1:153288497020:web:9f69c399456b5c2e"
    };
    firebase.initializeApp(config);

    const clist = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];

const ComplexList = () => (
  <ul>
    {clist.map(item => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
      </li>
    ))}
  </ul>
);
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
    
  }

  	componentDidMount(){

  	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}
	onSubmit(e){
		const Key = firebase.database().ref().child('posts').push().key;
		e.preventDefault();
		// console.log(this.state);
	    firebase.database().ref().child('rsvps').child(`${Key}`).set({
	        firstname: this.state.firstname,
	        lastname: this.state.lastname,
	        regdate: firebase.database.ServerValue.TIMESTAMP,
	    }).then(() => {
	      console.log('INSERTED')
	    }).catch((error) => {
	      console.log(error).once('value', (data) => {
	          console.log(data.toJSON());
	      });
	    });
	}
	submit(){
	}

  render(){

  	const rsvps = this.state.rsvps.map(guest =>
  			<div className="lists">
  				<span>{guest}</span>
  				<span>{guest.lastname}</span>
  			</div>
  		);
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
