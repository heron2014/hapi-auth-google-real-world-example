// var redis = require('./redis');
// var redis  = require("redis");
// var client = redis.createClient();

module.exports = function custom_handler(req, reply, tokens, profile) {

  if(profile){
  // profile.token = tokens;
  
  // client.hmset('person', profile);

  // store the tokens in the Redis Database


    // client.set('Mytoken', tokens.access_token);

    // store the user's profile in Database (ElasticSearch or Redis?):

    // reply to client with view:
    return reply("Hello " + profile.name.givenName + " You Logged in Using Goolge!");
  }

  else {
    return reply("Sorry, something went wrong, please try again.");
  }
}