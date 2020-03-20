import React from 'react';
import $ from 'jquery';
import ControlPlay from './ControlPlay.jsx';
import SongInfo from './SongInfo.jsx';
import Avatar from './Avatar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentSong: null,
    };

    this.getSongs = this.getSongs.bind(this);
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {
    $.get('/songs')
      .done((data) => {
        this.setState({ songs: data, currentSong: data[0] });
      })
      .fail(() => {
        console.error('error getting songs');
      });
  }

  render() {
    return (
      <div>
        <ControlPlay song={this.state.currentSong} />
        <Avatar song={this.state.currentSong} />
        <SongInfo song={this.state.currentSong} />
      </div>
    );
  }
}

export default App;

// vvvv top of testing vvv
// App.prototype.getSongs = something;