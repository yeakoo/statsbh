var config = require("../json/config.json");
var axios = require('axios');
module.exports = function(app) {
  app.get(['/player/:name', '/player'], function(req, res) {
    axios.get(`https://api.brawlhalla.com/rankings/1v1/all/1?name=${req.params.name}&api_key=${config.api_key}`)
      .then(response => {
        res.render('player', { player: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  });
}
