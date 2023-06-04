const express = require('express');

const app = express();
const PORT = 3000;

let albums = [
  {
    title: 'Queen', 
    year: '2018'
  },
  {
    title: 'Traveling Without Moving', 
    year: '1996'
  },
  {
    title: 'Shallow Grave', 
    year: '2010'
  }
];

app.use(express.static('server/public'));

const artistListArray = require('./modules/artist.js');
const songListArray = require('./modules/song.js');

app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

app.get('/albums', (req, res) => {
  res.send(albums);
});

// TODO - Add GET for songs
app.get('/song', (req, res) => {
  res.send(songListArray);
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});