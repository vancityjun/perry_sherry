import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax'

class Header extends Component {
  render() {
    return (
      <div className={this.props.title + ' header'}>
        <Parallax bgImage={this.props.image} strength={500}>
          <div className="inner">
            <h1 className="title">{this.props.title}</h1>
          </div>
        </Parallax>
      </div>
    )
  }
}

export default Header
