fliptop-wrapper
===============

A wrapper for the Fliptop API


##Usage
To make a query, you need to provide the service (email, facebook, linkedIn or twitter) and the handle:

    var fliptop = require('fliptop-wrapper')('API_key');

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

    fliptop.facebook('williamhgates', function (err, data){
    if (err) throw err;

        console.log(data);
    });

  * * *

##Example
To use the included example, do the following:

node example.js API_key

****

#License
(Mit License)
