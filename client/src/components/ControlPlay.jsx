import React from 'react';

class ControlPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const audioElement = this.refs.song;
    if (this.state.isPlaying === false) {
      this.setState({ isPlaying: true });
      document.getElementById('playbtn').innerHTML = 'CLICK ME TO PAUSE!';
      audioElement.play();
    } else {
      this.setState({ isPlaying: false });
      document.getElementById('playbtn').innerHTML = 'CLICK ME TO PLAY!';
      audioElement.pause();
    }
  }

  render() {
    if (this.props.song) {
      var audioUrl = this.props.song.song_audio;
    } else {
      var audioUrl = null;
    }

    return (
      <div>
        <button type="button" id="playbtn" onClick={this.handleClick}>CLICK ME TO PAUSE!</button>
        <audio
          autoPlay={this.state.isPlaying}
          ref="song"
          src={audioUrl}>
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
    );
  }
}
export default ControlPlay;

// when the play button is clicked, play current song

// does this class need a state? -- YES, play/pause
// where does the current song come from? App?
// need to render play button... where does play button come from? s3?
// need to render pause button
// first, render play button
// when play button is clicked, change button image to pause
// get current song's audio file from s3 and play
// when pause button is clicked, change button image to play
// stop playing current song
