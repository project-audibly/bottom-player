const faker = require('faker');

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

console.log(fakerData);