const PORT = 80;

const logger = require('morgan');
const http = require('http');
const mongoose = require('mongoose');
//const https = require('https');
const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');
const fs = require('fs');
const app = express();

/*
var key = fs.readFileSync('encryption/private.key');
var cert = fs.readFileSync( 'encryption/mydomain.crt' );

var options = {
  key: key,
  cert: cert,
};
*/
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

/*app.use(function(req, res, next) {
  if (req.secure) {
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});
*/

mongoose.connect(
  'mongodb://mongo:27017/bot-db',
  {useNewUrlParser: true}
).then(
  () => console.log("MongoDB Connected")
).catch(err => console.log(err));

const Item = require('./models/Item');
const Question = require('./models/Question');
http.createServer(app).listen(80);
//https.createServer(options ,app).listen(443);
//app.listen(PORT);

app.get('/', (req, res) => {
  res.send("Server chạy ngon lành.");
});


app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === 'pusherBot') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
});

app.post('/webhook', function (req, res) {
  var entries = req.body.entry;

  for (var entry of entries) {
    var messaging = entry.messaging;
    for (var message of messaging) {
	    console.log(messaging);
      var senderId = message.sender.id;
      if (senderId === '851140905221384') {
        continue;
      }
      if (message.message) {
        if (message.message.text) {
          var text = message.message.text;

          const newItem = new Item({
            name: text
          });

          var messageSend = "";

          newItem.save().then(
            item => {
              console.log(item);
              messageSend = "Hi, OK";
            }
          ).catch(
            messageSend = "Xin lỗi, câu hỏi của bạn chưa có trong hệ thống, chúng tôi sẽ cập nhật sớm nhất."
          );

	  if (text = "Chao vk iu") {
            messageSend = "Vanacy de thuong";
	  }
          sendMessage(senderId, messageSend);
        }
      }
    }
  }

  res.status(200).send("OK");
});

function sendMessage(senderId, message) {
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {
      access_token: "EAAHxCzu85ZCQBANGGE8Dl59vrZBlaRxeiozWkss9ulZBZA5qtSVhMzpmA1uehyL61I4JeLboUaZBAfnwnp9BWTisZAxnwidth7SMWrsXRRTwxGgLX9rsqHZA60dcozuCc49AdAZC0ynOC80cND1BZCXN8x3gQMe73qh58ei1aKWvZBtxZA2nNiXZBZAwl",
    },
    method: 'POST',
    json: {
      recipient: {
        id: senderId
      },
      message: {
        text: message
      },
    }
  });
}
