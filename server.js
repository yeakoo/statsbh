var express     = require('express');
var app         = require('express')();
var server      = require('http').createServer(app);
var io          = require('socket.io')(server);
var ejs         = require('ejs');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

var indexController = require("./controllers/indexController");

indexController(app);

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('test', (data) => console.log(data.msg));
});

server.listen(process.env.PORT || 3000, function(){
    console.log('app running');
});