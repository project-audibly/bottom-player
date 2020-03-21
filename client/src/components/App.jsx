import React from 'react';
import $ from 'jquery';
import ControlPlay from './ControlPlay.jsx';
import SongInfo from './SongInfo.jsx';
import ControlNext from './ControlNext.jsx';
import ControlPrevious from './ControlPrevious.jsx';
import Avatar from './Avatar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentSong: null,
      currentSongIndex: 0,
    };

    this.getSongs = this.getSongs.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
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

  nextSong() {
    this.setState({
      currentSongIndex: this.state.currentSongIndex + 1,
      currentSong: this.state.songs[this.state.currentSongIndex],
    });
  }

  prevSong() {
    this.setState({
      currentSongIndex: this.state.currentSongIndex - 1,
      currentSong: this.state.songs[this.state.currentSongIndex],
    });
  }

  render() {
    return (
      <div>
        <ControlPrevious index={this.state.currentSongIndex} prevSong={this.prevSong} />
        <ControlPlay song={this.state.currentSong} />
        <ControlNext index={this.state.currentSongIndex} nextSong={this.nextSong} />
        <Avatar song={this.state.currentSong} />
        <SongInfo song={this.state.currentSong} />
      </div>
    );
  }
}

export default App;

// vvvv top of testing vvv
// App.prototype.getSongs = something;