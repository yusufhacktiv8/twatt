const express = require('express');
const OAuth = require('oauth');

const router = express.Router();
const dotenv = require('dotenv').config();

router.get('/test', (req, res) => {

  const oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.API_KEY,
      process.env.API_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
  oauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    process.env.TOKEN,
    process.env.TOKEN_SECRET,
    function (e, data, resp) {
      if (e) console.error(e);
      console.log(data);
      res.send(data);
    });
});

module.exports = router;
