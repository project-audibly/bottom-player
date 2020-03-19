import React from 'react';
import ControlPlay from './ControlPlay.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentSong: []
    };
  }

  componentDidMount() {
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
        <ControlPlay song={this.state.currentSong}/>
      </div>
    );
  }
}

export default App;