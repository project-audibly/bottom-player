import React from 'react';

class ControlNext extends React.Component {
  render() {
    return (
      <div>
        <button type="button" id="nextbtn" onClick={this.props.nextSong}>NEXT PLEASE!</button>
      </div>
    );
  }
}

export default ControlNext;
