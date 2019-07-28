import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import Countdown from "react-countdown-now";

import $ from 'jquery';

class ToogleMenu extends Component{
  componentDidMount = () =>{
    $('.navList a').on('click', function(){
      $(this).addClass('active');
      $(this).closest('li').siblings().find('a').removeClass('active');
    });

    $('.logo a').on('click', function(){
      $('.navList a').removeClass('active');
    });

  }
  render(){
    return(
        <section className="menu" style={{display:'none'}}>
          <ul>
            <li><NavLink to="/ourstory" >our story</NavLink></li>
            <li><NavLink to="/photos">photos</NavLink></li>
            <li><NavLink to="/rsvp">RSVP</NavLink></li>
            <li><NavLink to="/location">location</NavLink></li>
            <li><NavLink to="/after-wedding">after wedding</NavLink></li>
          </ul>
        </section>
      );
  }
}

export default ToogleMenu;
