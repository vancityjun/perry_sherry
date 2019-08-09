import React, { Component, useContext, useRef } from 'react'
// import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, NavLink, __RouterContext } from 'react-router-dom'
import './App.css'
// import {Provider} from 'react-redux';
import 'mapbox-gl/dist/mapbox-gl.css'
import $ from 'jquery'
import ReactGA from 'react-ga'
import firebase from 'firebase'
// import {findDOMNode} from 'react-dom';
import { useSpring, useTransition, animated } from 'react-spring'
import { Spring, Transition, interpolate } from 'react-spring/renderprops'
import MediaQuery from 'react-responsive'
import scrollToComponent from 'react-scroll-to-component'
// import useRouter from './useRouter';
import Topbar from './components/Topbar'
import ToggleMenu from './components/ToggleMenu.js'
import Footer from './components/Footer'
import Intro from './pages/Intro'
import Ourstory from './pages/Ourstory'
import Photos from './pages/Photos'
import Rsvp from './pages/Rsvp'
import Location from './pages/Location'
import Contact from './pages/Contactus'
import After from './pages/After'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'

export const initializeReactGA = () => {
  ReactGA.initialize('UA-144107894-1')
  ReactGA.pageview(window.location.pathname)
}

const Page = () => {
  const { location } = useContext(__RouterContext)
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transition: '.2s' },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  })

  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={Intro} />
            <Route path="/ourstory" component={Ourstory} />
            <Route path="/photos" component={Photos} />
            <Route path="/rsvp" component={Rsvp} />
            <Route path="/location" component={Location} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/after-wedding" component={After} />
            <Route path="/admin" component={Admin} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </animated.div>
      ))}
    </>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'topbar',
    }
  }

  componentDidMount = () => {
    initializeReactGA()

    $('.toggleButton').on(
      'click',
      function() {
        this.setState({
          mode: 'menu',
        })
      }.bind(this)
    )

    $('.toggleButton').on('click', function() {
      $(this).toggleClass('active')
      $('.menu').fadeToggle(600)
    })

    $('.menu a').on('click', function() {
      $('.toggleButton').removeClass('active')
      $('.menu').fadeOut(400)
    })
  }
  render() {
    return (
      // <Provider store={store}>
      <div className="App">
        <Topbar />

        <MediaQuery maxWidth={1023}>
          <ToggleMenu />
        </MediaQuery>
        {/* <Page /> */}
        <Intro />
        <Ourstory />
        <Photos />
        <Location />
        <Rsvp />
        <Footer />
      </div>
      // </Provider>
    )
  }
}
export default App
