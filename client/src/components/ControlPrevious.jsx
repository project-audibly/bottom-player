import React from 'react';

class ControlPrevious extends React.Component {
  render() {
    return (
      <div>
        <button type="button" id="prevbtn" onClick={this.props.prevSong}>PREVIOUS PLEASE!</button>
      </div>
    );
  }
}

export default ControlPrevious;
