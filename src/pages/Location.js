import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { MapController } from 'react-map-gl'
import Header from '../components/Header'

class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'location',
      viewport: {
        width: '100%',
        height: '100%',
        latitude: 49.125989126525326,
        longitude: -122.76792906734187,
        zoom: 14,
        attributionControl: true,
      },
    }
  }
  render() {
    return (
      <section className={this.state.mode + ' content cf'}>
        <Header title={this.state.mode} />
        <div className="wrapper">
          <div className="golf">
            <img src={require('../img/northview_golf.jpg')} alt="" className="image fl" />
            <div className="info fl">
              <span className="icon" />
              <span className="em">Northview Golf &amp; Country Club</span>
              <span>6857 168 St, Surrey, BC, Canada</span>
              <span>604.574.0324</span>
            </div>
          </div>
          <div className="map fl">
            <ReactMapGL
              mapboxApiAccessToken={
                'pk.eyJ1IjoiZmtzZGoiLCJhIjoiY2p1MnpicHBpMGh0djQwbGs2bmxnZ3NjeiJ9.fyaa64gqxOni7RvrnwhgZQ'
              }
              {...this.state.viewport}
              onViewportChange={viewport => this.setState({ viewport })}
            >
              <Marker latitude={49.125} longitude={-122.76} offsetLeft={-20} offsetTop={-10}>
                <div className="locator">
                  <img src={require('../icons/location.svg')} alt="location" />
                </div>
              </Marker>
            </ReactMapGL>
            <div className="info fl">
              <span className="icon" />
              <span className="em">Northview Golf &amp; Country Club</span>
              <span>6857 168 St, Surrey, BC, Canada</span>
              <span>604.574.0324</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Location
