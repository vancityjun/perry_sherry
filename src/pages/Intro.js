import React, {Component} from 'react';
import Countdown from "react-countdown-now";
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'


class Intro extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'intro',
    }
  }
  render(){

    return(
      <section className="intro">
        <div className="text">
          <h1>Perry & Sherry</h1>
          <h3>we are getting married</h3>
          <h3>October 12 2019</h3>
        </div>
      </section>    	
      );
  }
}

export default Intro;
