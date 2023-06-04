$(document).ready(onReady);

// COMMENT: When document is ready, execute function onReady() in which 
// ajax creates a connection from /artist and then executes function in .then.
// It then loops through all artists and appends a table row of data of each
// of their name, DOB, date of death. 
function onReady() {
    $.ajax({
        type: 'GET',
        url: '/artist'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    $.ajax({
      type: 'GET',
      url: '/song'
  }).then(function (response) {
      for (let i = 0; i < response.length; i++) {
          let song = response[i];
          $('#songTableBody').append(`
              <tr>
                  <td>${song.title}</td>
                  <td>${song.artist}</td>
              </tr>
          `);
      }
  });

  $.ajax({
    type: 'GET',
    url: '/albums'
}).then(function (response) {
    for (let i = 0; i < response.length; i++) {
        let albums = response[i];
        $('#albumTableBody').append(`
            <tr>
                <td>${albums.title}</td>
                <td>${albums.year}</td>
            </tr>
        `);
    }
});
   
    // TODO Add ajax request for /songs and display on DOM
}
