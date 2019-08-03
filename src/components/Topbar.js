import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MediaQuery from 'react-responsive'
// import Countdown from "react-countdown-now";

import $ from 'jquery'

class Topbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount = () => {
    $('.navList a').on('click', function() {
      $(this).addClass('active')
      $(this)
        .closest('li')
        .siblings()
        .find('a')
        .removeClass('active')
    })

    $('.logo a').on('click', function() {
      $('.navList a').removeClass('active')
    })
  }
  render() {
    return (
      <nav>
        <h1 className="logo">
          <NavLink to="/">P&S</NavLink>
        </h1>
        <MediaQuery minWidth={1024}>
          <ul className="navList">
            <li>
              <NavLink to="/ourstory">our story</NavLink>
            </li>
            <li>
              <NavLink to="/photos">photos</NavLink>
            </li>
            <li>
              <NavLink to="/rsvp">RSVP</NavLink>
            </li>
            <li>
              <NavLink to="/location">location</NavLink>
            </li>
            {/* <li><NavLink to="/after-wedding">after wedding</NavLink></li> */}
          </ul>
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
          <span className="toggleButton">
            <span />
          </span>
        </MediaQuery>
      </nav>
    )
  }
}

export default Topbar
