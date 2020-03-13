const faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'audiblyBottomPlayer'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

var fakerData = [];

for (var i = 0; i < 100; i++) {
  var songData = {
    song_name: i+1,
    artist_name: faker.name.firstName() + ' ' + faker.name.lastName(),
    song_image: 'https://audibly-bp.s3-us-west-1.amazonaws.com/randoCat.jpg',
    song_audio: 'https://audibly-bp.s3-us-west-1.amazonaws.com/song1.mp3',
    song_length: '00:00:30'
  };

  fakerData.push(songData);
}

for (var j = 0; j < fakerData.length; j++) {

  connection.query('INSERT INTO songs (song_name,song_length,artist_name,song_image,song_audio) VALUES(?, ?, ?, ?, ?);', [fakerData[j].song_name, fakerData[j].song_length, fakerData[j].artist_name, fakerData[j].song_image, fakerData[j].song_audio], function(error) {
    if (error) {
      console.error('error inserting item: ', error);
    }
  });

}

connection.end();