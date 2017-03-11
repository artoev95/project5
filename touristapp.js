'use strict'

const express = require('express')
const fs = require('fs')
const https =require('https')
const http =require('http')
const path = require('path')

const app = express()
const directoryToServe = 'client'
const port = 3443

app.use('/',express.static(path.join(__dirname,'..',directoryToServe)))

const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname,'ssl','server.crt')),
  key: fs.readFileSync(path.join(__dirname,'ssl','server.key'))
}

https.createServer(httpsOptions, app)
.listen(port, function()
{
  console.log(`Serving the ${directoryToServe}/directory at https://localhost:${port}`)})

var bodyParser = require('body-parser');






app.use(bodyParser.json());
app
app.get('/',  function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("We're up and running!!!");
});


var plan = require('./api/planner/index');

app.get('/api/planner',plan.index);
app.post('/api/planner',plan.create);
app.put('/api/planner/:id',plan.update);
app.delete('/api/planner/:id',plan.delete);




console.log("Server running at http://127.0.0.1:8000/");
//