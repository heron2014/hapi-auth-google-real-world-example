require('env2')('.env');
var Handlebars = require('handlebars');
var Hapi = require('hapi');
var Home = require('./home.js');
var Vision = require('vision');
var GooglePlugin = require('hapi-auth-google');

exports.init = function (port, next) {

  var server = new Hapi.Server();

  server.connection({ port: port });

  var opts = { 

    REDIRECT_URL: '/googleauth',
    handler: require('./my_custom_handler.js'),
    scope: 'https://www.googleapis.com/auth/plus.profile.emails.read'
  };

  server.register([{register: GooglePlugin, options: opts},Vision, Home], function (err) {
    
    server.views({
        engines: {
            html: Handlebars
        },
        relativeTo: __dirname + '/../views/',
        path: '.',
        layout: 'default',
        layoutPath: 'layout'
    });

    server.start(function (err) {

        return next(err, server);
    });
  });
};