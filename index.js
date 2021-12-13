const request = require('request');

(async () => {
    
  var client_id = "9ff49fa32e184e9485355f33faa4f919";
    var client_secret = "8ced4832e7064b8cb83ccec5efe177c5";
    
    // Get spotify auth token from Spotify API using requests and authOptions
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };
    
    // Get the token and store it in the variable
    var token;
    await request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
        
            // Use the access token to access the Spotify Web API
            token = body.access_token
            console.log(body);
        } else {
            console.log(`Error: ${response.statusCode} ${error}`);
        }
    });
        
})()