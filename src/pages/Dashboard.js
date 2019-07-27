import React, {Component} from 'react';
import Header from '../components/Header';
import firebase from 'firebase';
import {postActions} from '../actions/postActions';

class Admin extends Component{
		constructor(props){
		super(props);
		this.state = {
			mode:'dashboard',
      rsvps: []
		}

	}
  componentWillMount(){

    firebase.database().ref().child('rsvps').on('value', snap => { //child_added
        // console.log(snap.toJSON());
        console.log(snap.val());
        const rsvps = () => (
  <ul>
    {snap.val().map(guest => (
      <li>
        <div>{guest}</div>
        <div>{guest.firstname}</div>
        <div>{guest.lastname}</div>
      </li>
    ))}
  </ul>
);
    });
  }

  render(){

    return(
     <section className={this.state.mode + ' content'}>
      <span>{this.rsvps}</span>
      </section>
      );

  }
}

export default Admin;
