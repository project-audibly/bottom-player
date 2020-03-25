import React from 'react';

class Timeline extends React.Component {
  render() {

    // need to refer to the audio element in AudioManager
    if (this.props.currentTime) {
      var audioTime = this.props.currentTime;
    } else {
      var audioTime = '0:00';
    }
   
    return (
      <div>
        <p>{audioTime}</p>
      </div>

    );
  }

}

export default Timeline;
// subcomponents TBD:
// - TimePassed

// - Seekbar
// - Duration


// wrapper own component "audiomanager" put directly under app