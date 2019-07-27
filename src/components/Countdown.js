import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Countdown from "react-countdown-now";

class Countdown extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    	<Countdown
	    date={new Date("October 05, 2019 16:00:00")}
	    renderer={({ days, hours, minutes, seconds }) => (
        <h1>
          {days} days {hours} hours {minutes} mins {seconds} secs
        </h1>
	    )}
	  />
      );
  }
}

export default Countdown;
