import React, { Component } from 'react'
const schedules = [
  {
    icon: require('../icons/034-rings.svg'),
    time: '4:00 pm',
    contents: 'ceremony',
  },
  {
    icon: require('../icons/044-camera.svg'),
    time: '5:00 pm',
    contents: 'photo time',
  },
  {
    icon: require('../icons/love.svg'),
    time: '6:00 pm',
    contents: 'parent speech',
  },
  {
    icon: require('../icons/014-wedding-dinner.svg'),
    time: '6:30 pm',
    contents: 'dinner receiption',
  },
  {
    icon: require('../icons/024-wine-1.svg'),
    time: '7:00 pm',
    contents: 'friends speech',
  },
  {
    icon: require('../icons/050-wedding-couple.svg'),
    time: '7:30 pm',
    contents: 'P&S speech',
  },
  {
    icon: require('../icons/high-heels.svg'),
    time: '9:00 pm',
    contents: 'dancing',
  },
]
class Schedule extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="timeline">
        {schedules.map((schedules, index) => {
          return (
            <div className="cf schedules fc">
              <div className="left fl cf fc">
                <span className="icon fl">
                  <img src={schedules.icon} alt="" />
                </span>
                <span className="time fl">{schedules.time}</span>
              </div>
              <span className="contents fl">{schedules.contents}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Schedule
