import React from 'react';

class Timeline extends React.Component {
  render() {
    if (this.refs.song) {
      var audioTime = this.refs.song.currentTime;
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