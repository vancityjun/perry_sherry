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
      mode:'dashboard',
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
      <section className={this.state.mode + ' content'}>
        <div className="list">
          <table cellspacing="0">
            <tbody>
              <tr>
                <th>first name</th>
                <th>last name</th>
                <th>register date</th>
              </tr>
              {this.state.rsvps.map(guest =>
                <tr>
                  <td>{guest.firstname}</td>
                  <td>{guest.lastname}</td>
                  <td>{moment(guest.regdate.toDate()).calendar()}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Dashboard;
