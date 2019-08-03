import React, { Component } from 'react'
import Header from '../components/Header'
import Countdown from 'react-countdown-now'
import firebase from 'firebase'
import db from '../firebase/config.js'
import Popup from 'react-popup'
import Select from 'react-select'

class Rsvp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullname: '',
      phone: '',
      email: '',
      regdate: '',
      agree: false,
      extraFriendCount: 0,
      extras: [],
      address: '',
      mode: 'rsvp',
    }
  }

  componentDidMount() {}

  onGuestNameChange = (value, i) => {
    const newExtras = [...this.state.extras]
    newExtras[i] = value
    this.setState({ extras: newExtras })
  }
  onChangeCheckbox = e => {
    this.setState({
      agree: e.target.checked,
    })
  }
  onSubmit = e => {
    e.preventDefault()
    db.collection('rsvps')
      .doc()
      .set({
        fullname: this.state.fullname,
        phone: this.state.phone,
        email: this.state.email,
        agree: this.state.agree,
        address: this.state.address,
        regdate: new Date(),
        extras: this.state.extras,
      })
      .then(function() {
        alert('Document successfully written!')
      })
      .catch(function(error) {
        console.error('Error writing document: ', error)
      })
  }

  createInput = () => {
    let guests = []
    for (let i = 0; i < this.state.extraFriendCount; ++i) {
      guests.push(
        <input
          type="text"
          value={this.state.extras[i]}
          onChange={e => this.onGuestNameChange(e.target.value, i)}
          key={i}
          placeholder="Full Name"
        />
      )
    }
    return guests
  }
  add = async e => {
    e.preventDefault()
    const friendNames = this.state.extras.slice(0, this.state.extraFriendCount)
    return firebase
      .firestore()
      .collection('rsvps')
      .add({
        fullname: this.state.fullname,
        phone: this.state.phone,
        email: this.state.email,
        agree: this.state.agree,
        address: this.state.address,
        regdate: new Date(),
        extras: friendNames,
      })
  }

  render() {
    const address = this.state.agree ? (
      <input
        type="text"
        value={this.state.address}
        onChange={e => this.setState({ address: e.target.value })}
        placeholder="Your Address"
      />
    ) : null

    return (
      <section className={this.state.mode + ' content'}>
        <Header title={this.state.mode} />
        <div className="formWrap">
          <Countdown
            date={new Date('October 05, 2019 16:00:00')}
            renderer={({ days, hours, minutes, seconds }) => (
              <h3 className="countdown">
                {days} days {hours} hours {minutes} mins {seconds} secs
              </h3>
            )}
          />
          <h2>We can't wait to celebrate with you!</h2>
          <form onSubmit={this.add}>
            <input
              type="text"
              placeholder="full name"
              value={this.state.fullname}
              onChange={e => this.setState({ fullname: e.target.value })}
            />
            <br />
            <input
              type="tel"
              placeholder="phone number"
              value={this.state.phone}
              onChange={e => this.setState({ phone: e.target.value })}
            />
            <br />
            <input
              type="email"
              placeholder="email address"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <br />
            <div className="question cf">
              <span className="fl">Do you want to receive our invitation card?</span>
              <span className="fc fr">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={this.state.agree}
                  onChange={this.onChangeCheckbox}
                />
                <label for="agree">agree</label>
              </span>
            </div>
            {address}
            <div className="question cf">
              <span className="fl">How many friends with you?</span>
              <input
                className="fr"
                type="number"
                id="extras"
                name="extras"
                value={this.state.extraFriendCount}
                onChange={e => this.setState({ extraFriendCount: Number(e.target.value) })}
                min="0"
                max="10"
              />
            </div>
            <div>{this.createInput()}</div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Rsvp
