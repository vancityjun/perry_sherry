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
      const {
        fullname, 
        phone, 
        email, 
        regdate,
        agree,
        address,
        extras,
      } = doc.data();
      rsvps.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fullname,
        phone,
        email,
        regdate,
        agree,
        address,
        extras,
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
                <th>name</th>
                <th>phone</th>
                <th>email</th>
                <th>register date</th>
                <th>address</th>
                <th>extras</th>
              </tr>
              {this.state.rsvps.map(guest =>
                <tr>
                  <td>{guest.fullname}</td>
                  <td>{guest.phone}</td>
                  <td>{guest.email}</td>
                  <td>{moment(guest.regdate.toDate()).calendar()}</td>
                  <td>{guest.address}</td>
                  <td>{guest.extras}</td>
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
