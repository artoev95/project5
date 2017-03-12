var mongo = require('mongodb');
var BSON = mongo.BSONPure;


// get mongo client
var MongoClient = require('mongodb').MongoClient;

var ObjectId = require('mongodb').ObjectID;
var config = require('../../config');
var assert = require('assert');

// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var url = config.mongodbUri;

var cookieParser = require("cookie-parser");
var session = require("express-session");


var morgan = require("morgan");

app.use(morgan("dev"));
app.use(cookieParser());
app.use(session({secret: "anystringoftext",
        saveUninitialized:true,
        resave:true }));


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  config.logStars("Connected correctly to server.");
  mongoDb = db;
});



// Get list of plans
exports.index = function(req, res) {
if (mongoDb){
      var collection = mongoDb.collection('example1');
      collection.find().toArray(function(err, items) {
          res.send(items);
      });
    }
    else
    {
        console.log('No database object!');
    }};

// Creates a new plan .
exports.create = function(req, res) {

var plan = req.body;
    if (mongoDb){
      var collection = mongoDb.collection('example1');
      collection.insertOne(plan, function(err, result) {
            assert.equal(err,null);
            config.logStars('Inserted: ' + JSON.stringify(result));
            res.status(200).send(result);
            
        });
    }
  else
  {
    config.logStars('No database object!');
  }
   
};

// Update .
exports.update = function(req, res) {

  var id = req.params.id;
  var plan = req.body;
  config.logStars('Updating plan: ' + id);
  var collection = mongoDb.collection('example1');
  collection.updateOne({'_id':ObjectId(id)}, plan, function(err, result) {
           assert.equal(err,null);
              console.log('' + result + ' document(s) updated');
              res.status(200).send(result);
  });
   
};

// delete ..
exports.delete = function(req, res) {

     var id = req.params.id;
  config.logStars('Deleting plan: ' + id);
  var collection = mongoDb.collection('example1');
  collection.deleteOne({'_id':ObjectId(id)}, function(err, result) {
           assert.equal(err,null);
          console.log('' + result + ' document(s) deleted');
          res.status(200).send(result);
  });
   
};