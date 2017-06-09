/**
 * Created by Admin on 2017/6/9.
 */
var http = require('http');
var equal = require('assert').equal;

var username = 'falcon';
var password = '';
var _auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64')

var options = {
  host: 'localhost',
  port: 8081,
  path: '/listUsers',
  method: 'GET',
  headers: {
    'accept': '*/*',
    'content-type': "application/json",
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'en-US,en;q=0.9',
    'user-agent': 'nodejs rest client'
  }
};

var req = http.request(options, function (res) {
  console.log('STATUS: ' + res.statusCode);
  equal(200, res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function (e) {
  console.log('problem with request: ' + e.message);
});


req.end();