// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello',  (req, res) => {
  res.json({ greeting: 'hello API' })
});

app.get('/api/whoami', (req, res) => {
        let ipAddress = req.ip;

  // Check if the IP is an IPv4-mapped IPv6 address and extract the IPv4 part
  if (ipAddress.startsWith("::ffff:")) {
    ipAddress = ipAddress.split(":").pop();
  }
  const lang = req.headers["accept-language"];
  const softw = req.headers["user-agent"];
  res.json({ ipaddress: ipAddress, language: lang, software: softw })
});




// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
