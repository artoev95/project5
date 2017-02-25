'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var stormpath = require('express-stormpath');

var app = express();

app.use(stormpath.init(app,{
	client: {
		apiKey: {
			id:'K65PWVYXGUD27P7ZMNLWZW9WXapiKey',
			secret:'jVUFqUhpcuJile8YVvgWbXzDQSWhixGuwTSz3g62aCA'
		}
		},
		application: {
			href:'https://api.stormpath.com/v1/applications/4RFzDtSJdugl5Vu8vWqpQM'

		}
	}
	));
app.use(bodyParser.json());
app
app.get('/api/planner', stormpath.apiAuthenticationRequired, function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("We're up and running!!!");
});


var plan = require('./api/planner/index');

app.get('/api/planner',plan.index);
app.post('/api/planner',plan.create);
app.put('/api/planner/:id',plan.update);
app.delete('/api/planner/:id',plan.delete);

app.on('stormpath.ready',function() {
app.listen(8000);
});
console.log("Server running at http://127.0.0.1:8000/");
//