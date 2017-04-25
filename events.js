'use strict';
// Pubnub service configuration
// ===========================

var PubNub = require('pubnub');

var pubnub = new PubNub({
            publishKey : 'pub-c-90209b1f-dd41-42a1-b64c-ab143ae25a56',
            subscribeKey : 'sub-c-6eed774c-0281-11e7-8437-0619f8945a4f',
            secretKey: "sec-c-NWY5ZjAzYWMtMWIxZi00ZTM2LTg3NGEtMDRjMGExZjI5YzNl",
            ssl: true
});



module.exports = {
  publish: function(channel, message){
    pubnub.publish({
             channel: channel,
             message: JSON.stringify(message)},
             function(status, response) {
               if (status.error) {
                 console.log(status)
               } else {
                 console.log("message Published w/ timetoken", response.timetoken)
               }
             });
  },
  subscribe: function(channel, callback){

    pubnub.addListener({

        message: function(m) {
            // handle message

            var msg = m.message; // The Payload

            callback(msg);
            }
  });
    // Subscribe to the demo_tutorial channel
    pubnub.subscribe({
        channels: [channel]
    });
  }
}