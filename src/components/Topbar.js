import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import scrollToComponent from 'react-scroll-to-component'

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

    scrollToComponent(this.Intro, { offset: 0, align: 'top', duration: 300, ease: 'inExpo' })
  }
  render() {
    return (
      <nav>
        <MediaQuery minWidth={1024}>
          <ul className="navList">
            <li>
              <span
                onClick={() =>
                  scrollToComponent(this.Ourstory, { offset: 0, align: 'top', duration: 300, ease: 'inExpo' })
                }
              >
                our story
              </span>
            </li>
            <li>
              <span
                onClick={() =>
                  scrollToComponent(this.Photos, { offset: 0, align: 'top', duration: 300, ease: 'inExpo' })
                }
              >
                photos
              </span>
            </li>
            <li>
              <h1 className="logo">
                <span
                  onClick={() =>
                    scrollToComponent(this.Intro, { offset: 0, align: 'top', duration: 300, ease: 'inExpo' })
                  }
                >
                  Perry &amp; Sherry
                </span>
              </h1>
            </li>
            <li>
              <span
                onClick={() =>
                  scrollToComponent(this.Location, { offset: 0, align: 'top', duration: 300, ease: 'inExpo' })
                }
              >
                location
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToComponent(this.Rsvp, { offset: 0, align: 'top', duration: 300, ease: 'inExpo' })}
              >
                RSVP
              </span>
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
