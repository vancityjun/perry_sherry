import React, {Component} from 'react';
import Header from '../components/Header';
import firebase from 'firebase';
import {postActions} from '../actions/postActions';
import db from "../firebase/config.js"
import moment from 'moment'

class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('rsvps');
    this.state = {
      rsvps: []
    };
    this.unsubscribe = null;
  }

    onCollectionUpdate = (querySnapshot) => {
    const rsvps = [];
    querySnapshot.forEach((doc) => {
      const { firstname, lastname, regdate } = doc.data();
      rsvps.push({
        key: doc.id,
        doc, // DocumentSnapshot
        firstname,
        lastname,
        regdate,
      });
    });
    this.setState({
      rsvps
   });
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render(){
    return (
              <tbody>
                {this.state.rsvps.map(guest =>
                  <tr>
                    <td>{guest.firstname}</td>
                    <td>{guest.lastname}</td>
                    <td>{moment(guest.regdate.toDate()).calendar()}</td>
                  </tr>
                )}
              </tbody>
    );
  }
}

export default Dashboard;
