const axios = require('axios');
const config = require("../json/config.json");
const legends = require('../json/legends.json');
const utf8 = require('utf8');
module.exports = function(app) {
    app.get('/leaderboard', function(req, res) {
        axios.get(`https://api.brawlhalla.com/rankings/1v1/all/1?api_key=${config.api_key}`)
            .then(response => {
                let players = response.data;
                players.forEach(player => {
                    player.name = utf8.decode(player.name);
                    player.best_legend = legends[player.best_legend];
                });
                res.render('leaderboard', { players: players });
            })
            .catch(error => {
                console.log(error);
            });
    });
}
