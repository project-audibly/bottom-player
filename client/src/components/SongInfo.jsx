import React from 'react';

const SongInfo = (props) => (
  <div>
    <div>{props.song.artist_name}</div>
    <div>{props.song.song_name}</div>
  </div>
);

export default SongInfo;
