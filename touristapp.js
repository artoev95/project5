'use strict'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express')
const fs = require('fs')
const https =require('https')
const http =require('http')
const path = require('path')
var mongoose = require('mongoose');

var config = require('./config/');
var plan = require('./api/planner/index');

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

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

app.use(express.static(config.root));
console.log(config.root);


app.use(bodyParser.json());


var plan = require('./api/planner/index');

app.get('/api/planner',plan.index);
app.post('/api/planner',plan.create);
app.put('/api/planner/:id',plan.update);
app.delete('/api/planner/:id',plan.delete);
http.createServer(app).listen(process.env.PORT || 80);
//