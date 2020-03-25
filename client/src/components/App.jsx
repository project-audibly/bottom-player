import React from 'react';
import $ from 'jquery';
import CSSModules from 'react-css-modules';
import ControlPlay from './ControlPlay.jsx';
import SongInfo from './SongInfo.jsx';
import ControlNext from './ControlNext.jsx';
import ControlPrevious from './ControlPrevious.jsx';
import Timeline from './Timeline.jsx';
import Avatar from './Avatar.jsx';
import styles from './App.css';
import AudioManager from './AudioManager.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentIndex: 0,
      currentTime: null,
      isPlaying: false,
      duration: null
    };
    this.getSongs = this.getSongs.bind(this);
    this.setIsPlaying = this.setIsPlaying.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {
    $.get('/songs')
      .done((data) => {
        this.setState({ songs: data });
      })
      .fail(() => {
        console.error('error getting songs');
      });
  }

  setIsPlaying(isPlaying) {
    this.setState({
      isPlaying: isPlaying
    });
  }

  nextSong() {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      currentSong: this.state.songs[this.state.currentIndex + 1],
    });
  }

  prevSong() {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
      currentSong: this.state.songs[this.state.currentIndex - 1],
    });
  }

  render() {
    return (
      <div className="app">
        <AudioManager
          isPlaying={this.state.isPlaying}
          song={this.state.songs[this.state.currentIndex]} 
          onTimeUpdate={(currentTime) => {this.setState({currentTime})}}
        />
        <ControlPrevious 
          disabled={this.state.currentIndex === 0}
          index={this.state.currentIndex}
          setPrevSong={this.prevSong}
        />
        <ControlPlay 
          isPlaying={this.state.isPlaying} 
          setIsPlaying={this.setIsPlaying} 
        />
        <ControlNext 
          disabled={this.state.currentIndex === this.state.songs.length - 1}
          index={this.state.currentIndex} 
          setNextSong={this.nextSong}
        />
        <Timeline currentTime={this.state.currentTime} />
        <Avatar song={this.state.currentSong} />
        <SongInfo song={this.state.currentSong} />
      </div>
    );
  }
}

export default CSSModules(App, styles);

// vvvv top of testing vvv
// App.prototype.getSongs = something;