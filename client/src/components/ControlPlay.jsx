import React from 'react';

class ControlPlay extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
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
    
    handleClick() {
      const audioElement = this.refs.song;
      audioElement.play();
      document.getElementById('playbtn').innerHTML = 'CLICK ME TO PAUSE!';
    }

    render() {
      return (
        <div>
          <button id="playbtn" onClick={this.handleClick}>CLICK ME TO PLAY!</button>
        <audio
        autoPlay={false}
        ref="song"
        src={this.props.song.song_audio}>
            Your browser does not support the
            <code>audio</code> element.
        </audio>
        </div>
      )
    }

}

export default ControlPlay;