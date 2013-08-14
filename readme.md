Fliptop Wrapper
--------------

A wrapper for the Fliptop API


## Usage

To make queries, you need to provide the service that you want to query (email, twitter, facebook or linkedIn) and a handle

var fliptop = require('fliptop-wrapper')('API KEY');

  fliptop.email('paul@gmail.com', function (err, data){
    if (err) throw err;

    console.log(data);
  });

  fliptop.twitter('elonmusk', function (err, data){
    if (err) throw err;

    console.log(data);
  });

  fliptop.facebook('camplejohn', function (err, data){
    if (err) throw err;

    console.log(data);
  });

fliptop.linkedin('williamhgates', function (err, data){
    if (err) throw err;

    console.log(data);
  });

* * *

##Example

You can try out the provided example by doing:
         
         node example.js API_KEY


* * *

#License
MIT License




   