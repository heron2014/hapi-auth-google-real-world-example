exports.register = function (server, options, next) {

  server.route({

    method: 'GET',
    path: '/',
    handler: function(req, reply) {

       var url = server.generate_google_oauth2_url();
       return reply.view('home', {url:url});
    }
  
  });

  return next();
};

exports.register.attributes = {
    name: 'Home'
};