// Routes received by the server
var create_namespace = require('./services.js').create_namespace;
var fs = require('fs');
var path = require('path');
var express = require('express');
var Chance = require('chance'),
    chance = new Chance();

module.exports = (app, io) => {
  // app.use(express.static(__dirname + '/../../client/app'));

  app.route('/pad/create')
    .get((req, res) => {
      var ukey = '/' + chance.string({length:5, pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'});
      console.log(ukey);
      create_namespace(ukey, io);
      res.send(ukey);
    });

  console.log(path.join(__dirname, '/../../client/pad.html'));
  app.route('/*')
    .get((req, res) => {
      res.render('pad.html');
    });

  // ** below code block is used for the server setup
  // for socket.io
  // link: http://stackoverflow.com/questions/27393705/socketio-get-http-localhost3000-socket-io-eio-3transport-pollingt-1418187
  
  // end for socket
};