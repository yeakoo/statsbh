const express     = require('express');
const app         = require('express')();
const server      = require('http').createServer(app);
const io          = require('socket.io')(server);
const ejs         = require('ejs');

// Express Setup
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

// Controllers
let indexController = require("./controllers/indexController");
indexController(app);

// let playerController = require("./controllers/playerController");
// playerController(app);

//let leaderboardController = require('./controllers/leaderboardController');
//leaderboardController(app);

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('test', ({msg}) => console.log(msg));
});

server.listen(process.env.PORT || 3000, () => console.log("app running"));