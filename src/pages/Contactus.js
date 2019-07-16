import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
 import {MapController} from 'react-map-gl';
 import Header from '../components/Header';

class Contactus extends Component{
		constructor(props){
		super(props);
		this.state = {
			mode:'contact us',
			    viewport: {
		      width: '100%',
		      height: 600,
		      latitude: 49.125989126525326,
		      longitude: -122.76792906734187,
		      zoom: 10,
		      attributionControl: true
		    }
		}
	}
  render(){
    return(
    	      <section className="contactUs content">
	      <Header title={this.state.mode}/>
		   	<div className="formWrap contactForm">
		   		<h2>Send Message</h2>
    	      <form onSubmit={this.onSubmit} >
		      	<input type="text" name="name" placeholder="Name" value={this.state.firstName} onChange={this.onChange}/>
		      	<br/>
		      	<input type="text" name="phone" placeholder="Phone" value={this.state.lastName} onChange={this.onChange}/>
		      	<br/>
		      	<input type="text" name="email" placeholder="Email" value={this.state.lastName} onChange={this.onChange}/>
		      	<br/>
		      	<textarea name="message" id="" cols="30" rows="10"></textarea>
		      	<br/>
		      	<button type="submit">Submit</button>
		      </form>
	    	</div>
	      <ReactMapGL
	       mapboxApiAccessToken={"pk.eyJ1IjoiZmtzZGoiLCJhIjoiY2p1MnpicHBpMGh0djQwbGs2bmxnZ3NjeiJ9.fyaa64gqxOni7RvrnwhgZQ"}
	        {...this.state.viewport}
	        onViewportChange={(viewport) => this.setState({viewport})}
	      >
	      <Marker latitude={49.125} longitude={-122.76} offsetLeft={-20} offsetTop={-10}>
	          <div>You are here</div>
	        </Marker>
	      </ReactMapGL>
      </section>
      );
  }
}

export default Contactus;
