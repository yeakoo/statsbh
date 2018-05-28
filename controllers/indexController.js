const api = require('twitch-api-v5');
api.clientID = 'vtqebhinodx3rzi7xq1z5pppa73ruz';

module.exports = function(app) {
    app.get('/', function(req, res) {
        api.streams.live({ game: 'Brawlhalla' }, (err, result) => {
            if (err) console.log(err);
            let top_streams = [];
            for(let i = 0; i < 6; i++){
                let stream = result.streams[i];
                top_streams.push({
                   stream_name: stream.channel.display_name,
                   stream_status: stream.channel.status,
                   stream_logo: stream.channel.logo,
                   stream_viewers: stream.viewers,
                   stream_preview_url: stream.preview.large,
                   stream_url: stream.channel.url
                });
            }
            res.render('index', { top_streams: top_streams });
        });
    });
}

api.streams.live
