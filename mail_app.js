var api_key = 'key-83224fdd930ba495d8ee3776e92e8e62';
var domain = 'mg.lab9.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var contactEvent = require('./events');

var  messageHandler = function(m) {
         // The Payload
        var data = {
            from: 'WIT BSc IT <me@wit.ie>',
            to: JSON.parse(m).email,
            subject: 'Welcome',
            text: 'Welcome to the company!!!'
          };

          mailgun.messages().send(data, function (error, body) {
            console.log(body);
          });
        }

contactEvent.subscribe('create_contact_event', messageHandler)