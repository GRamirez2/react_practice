var axios = require("axios");

var helpers = {

    getMovieByName: function(movieName) {
    var queryURL = "https://api.github.com/users/" + movieName + "/repos";

    return axios.get(queryURL).then(function(response) {
      return response;
    });
  }
};

module.exports = helpers;

