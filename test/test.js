var API_KEY = 'whatever';
var fliptop = require('..')(API_KEY);
var assert  = require('assert');
var nock    = require('nock');

var HOST = 'http://api.fliptop.com';

var services = {
  email : {
    path:'/beta/person?email=paul@gmail.com&api_key=' + API_KEY, 
    handle: 'paul@gmail.com',
    data: {
      "image_url": "http://m3.licdn.com/mpr/pub/image-LEAyoTZ5ThlspMx4J0TOE3kEn0LWfQcELEAZvfM5nZK2ulEpLEAZkqw5nRnTfxIRhKoC/paul-bonacquisti.jpg",
 	  "name": "Paul Bonacquisti",
      "first_name": "paul",
      "last_name": "bonacquisti",
      "age": "",
      "gender": "Male",
      "location": "7035",
      "company": "Bonacquisti Wine Company",
      "title": "Unknown",
      "email": "paul@gmail.com",
      "memberships": {
      "identica": "http://www.identi.ca/friendfeed",
      "plancast": "http://plancast.com/buchheit",
      "myspace": "http://www.myspace.com/11944209",
      "youtube": "http://youtube.com/user/mrfluffy123",
      "blogger": "http://camilla-april.blogspot.com",
      "linkedin": "http://www.linkedin.com/in/denverwine",
      "friendfeed": "http://friendfeed.com/paul",
      "flickr": "http://www.flickr.com/people/36993331@N02",
      "tumblr": "http://paulbuchheit.tumblr.com/",
      "facebook": "http://www.facebook.com/paul.lessingh.5",
      "multiply": "http://paf2006.multiply.com",
      "vimeo": "http://vimeo.com/user2800795",
      "picasa": "http://picasaweb.google.com/ducks127",
      "twitter": "http://twitter.com/pauly101",
      "googleprofiles": "http://profiles.google.com/paul",
      "friendster": "http://profiles.friendster.com/50622756",
      "posterous": "http://100meals.posterous.com/",
      "hi5": "http://hi5.com/friend/p77745104--Paul_N--html",
      "quora": "http://www.quora.com/paul-buchheit",
      "lanyrd": "http://lanyrd.com/people/paultoo/"
      },
      "influence_scores": {}
    }
  },
  
  twitter : {
    path:'/beta/person?twitter=http://twitter.com/elonmusk&api_key=' + API_KEY,
    handle: 'elonmusk',
    data: {
      "image_url": "",
      "name": "Elon Musk",
      "first_name": "elon",
      "last_name": "musk",
      "age": "",
      "gender": "",
 	  "location": "",
 	  "company": "",
 	  "title": "",
      "email": "",
      "memberships": {
      "twitter": "http://twitter.com/elonmusk"
      } ,
      "influence_scores": {
      "kred_influence_score": "913",
      "kred_outreach_score": "4",
      "peer_index_influence_score": "49"
      }
    }
  },

   facebook : {
     path: '/beta/person?facebook=http://facebook.com/camplejohn&api_key=' + API_KEY,
     handle: 'camplejohn',
     data: {
       "image_url": "",
 	   "name": "Doug Camplejohn",
       "first_name": "doug",
       "last_name": "camplejohn",
       "age": "",
       "gender": "",
       "location": "",
       "company": "",
       "title": "",
       "email": "",
       "memberships": {
       "facebook": "http://www.facebook.com/camplejohn"
       },
       "influence_scores": {}
     } 
   },

    linkedin : {
    	path: '/beta/person?linkedin=http://www.linkedin.com/in/williamhgates&api_key=' + API_KEY,
    	handle: 'in/williamhgates'
    	data: {
          "image_url": "http://m3.licdn.com/mpr/pub/image-f4JRAE8W25C_Vi3ZpBu1N0UQhwMVxz4Jf4uoCRnWhY0j197Of4JomvjWhFYJ1SB_ygg3/bill-gates.jpg",
          "name": "Bill Gates",
          "first_name": "bill",
          "last_name": "gates",
          "age": "",
          "gender": "Male",
          "location": "Seattle, Washington, United States",
          "company": "Bill & Melinda Gates Foundation",
          "title": "",
          "email": "",
          "memberships": {
          "linkedin": "http://www.linkedin.com/in/williamhgates",
          "facebook": "http://www.facebook.com/williamhgates"
          },
          "influence_scores": {}
        }
    }
};

for (var key in services) {
  if (services.hasOwnProperty(key)) {
    testService(services[key], key);
  }
}

function testService (service, key) {
	describe('fetch by ' + key, function() {
    it('returns correct data about the user', function(done) {
      nock(HOST)
        .get(service.path)
        .reply(200, service.data)
        ;

      fliptop[key](service.handle, function(err, data) {
        if (err) return done(err);

        assert.deepEqual(data, service.data);
        done();
      });
    });
  });
}

