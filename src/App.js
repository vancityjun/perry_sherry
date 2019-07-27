import React, {Component, useContext} from 'react';
// import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter, NavLink, __RouterContext} from 'react-router-dom';
import './App.css';
// import {Provider} from 'react-redux';
import 'mapbox-gl/dist/mapbox-gl.css';
import $ from 'jquery';
import ReactGA from 'react-ga';
import firebase from 'firebase';
// import {findDOMNode} from 'react-dom';
import {useSpring, useTransition, animated} from 'react-spring';
import { Spring, Transition, interpolate } from 'react-spring/renderprops';
// import useRouter from './useRouter';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import Ourstory from './pages/Ourstory';
import Photos from './pages/Photos';
import Rsvp from './pages/Rsvp';
import Location from './pages/Location';
import Contact from './pages/Contactus';
import After from './pages/After';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';

export const initializeReactGA = () => {
    ReactGA.initialize('UA-144107894-1');
    ReactGA.pageview(window.location.pathname);
}


const Page = () => {
   const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transition: '.2s'},
    enter: { opacity: 1},
    leave: { opacity: 1}
  });


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
  );
};


class App extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount = () =>{
    initializeReactGA()
  }
  render(){
   return(
    // <Provider store={store}>
    <div className="App">
      <Topbar/>
      <Page/>
    </div>
    // </Provider>
   ); 
  }
}
export default App;
