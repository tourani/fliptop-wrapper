//Showing example usage of this fliptop wrapper/
// This handles querying by email, twitter, facebook, and linkedin. Need to Pass in the API Key as an argument
// so basically: node example.js API_KEY




var fliptop = require('./lib/fliptop-wrapper.js')(process.argv[2]);

fliptop.email('paul@gmail.com', function(err, data){
  if (err) console.log(err);

	console.log('Email Queryl\n', JSON.stringify(data,true,2));
	console.log('.....................\n');
});

fliptop.twitter('elonmusk', function(err, data){
  if (err) throw err;

	console.log('Twitter Query\n', JSON.stringify(data,true,2));
	console.log('.....................\n');
});

fliptop.facebook('camplejohn', function(err, data){
  if (err) console.log(err);

	console.log('Facebook Query\n', JSON.stringify(data,true,2));
	console.log('.....................\n');
});

fliptop.linkedin('williamhgates', function(err, data){
	if (err) console.log(err);

	console.log('LinkedIn Query\n', JSON.stringify(data,true,2));
    console.log('.....................\n');
	
});