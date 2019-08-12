import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import $ from 'jquery'
import scrollToComponent from 'react-scroll-to-component'
import Intro from '../pages/Intro'
import Ourstory from '../pages/Ourstory'
import Photos from '../pages/Photos'
import Rsvp from '../pages/Rsvp'
import Location from '../pages/Location'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount = () => {
    $('.navList a').on('click', function(e) {
      e.preventDefault()
      $(this).addClass('active')
      $(this)
        .closest('li')
        .siblings()
        .find('a')
        .removeClass('active')
    })

    $('.logo a').on('click', function(e) {
      e.preventDefault()
      $('.navList a').removeClass('active')
    })
  }
  render() {
    return (
      <>
        <nav>
          <h1 className="logo">
            <a href="#" onClick={() => scrollToComponent(this.Intro, { offset: 0, align: 'top', duration: 1000 })}>
              Perry &amp; Sherry
            </a>
          </h1>

          <MediaQuery minWidth={1024}>
            <ul className="navList">
              <li>
                <a
                  href="#"
                  onClick={() => scrollToComponent(this.Ourstory, { offset: 0, align: 'top', duration: 1000 })}
                >
                  our story
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToComponent(this.Photos, { offset: 0, align: 'top', duration: 1000 })}>
                  photos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => scrollToComponent(this.Location, { offset: 0, align: 'top', duration: 1000 })}
                >
                  location
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToComponent(this.Rsvp, { offset: 0, align: 'top', duration: 1000 })}>
                  RSVP
                </a>
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
        <MediaQuery maxWidth={1023}>
          <section className="menu" style={{ display: 'none' }}>
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() => scrollToComponent(this.Ourstory, { offset: 0, align: 'top', duration: 1000 })}
                >
                  our story
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToComponent(this.Photos, { offset: 0, align: 'top', duration: 1000 })}>
                  photos
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToComponent(this.Rsvp, { offset: 0, align: 'top', duration: 1000 })}>
                  RSVP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => scrollToComponent(this.Location, { offset: 0, align: 'top', duration: 1000 })}
                >
                  location
                </a>
              </li>
              {/* <li><NavLink to="/after-wedding">after wedding</NavLink></li> */}
            </ul>
          </section>
        </MediaQuery>
        <section
          ref={section => {
            this.Intro = section
          }}
        >
          <Intro />
        </section>
        <section
          ref={section => {
            this.Ourstory = section
          }}
        >
          <Ourstory />
        </section>
        <section
          ref={section => {
            this.Photos = section
          }}
        >
          <Photos />
        </section>
        <section
          ref={section => {
            this.Location = section
          }}
        >
          <Location />
        </section>
        <section
          ref={section => {
            this.Rsvp = section
          }}
        >
          <Rsvp />
        </section>
      </>
    )
  }
}

export default Main
