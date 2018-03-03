var axios = require('axios');
var config = require("../config.json");

module.exports = function(app) {
  app.get(['/profile/*','/profile'], function(req, res) {
    axios.get(`https://api.brawlhalla.com/rankings/1v1/all/1?api_key=${config.key}`)
      .then(response => {
        res.render('profile', { player: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  
  });
}
