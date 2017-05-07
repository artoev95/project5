
'use strict';

var _ = require('lodash');
var plan = require('./plan.model');

// Get list of contacts
exports.index = function(req, res) {
          // Connect to the db
   plan.find(function (err, plan) {
    if(err) { return handleError(res, err); }
    return res.json(200, plan);
  });

} ;

// Creates a new contact in datastore.
exports.create = function(req, res) {
  plan.create(req.body, function(err, plan) {
    if(err) { return handleError(res, err); }
    return res.json(201, plan);
  });
};

// Updates an existing contact in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  plan.findById(req.params.id, function (err, plan) {
    if (err) { return handleError(res, err); }
    if(!plan) { return res.send(404); }
    var updated = _.merge(plan, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, plan);
    });
  });
};

// delete an existing contact in datastore.
exports.delete = function(req, res) {
    plan.findById(req.params.id, function (err, plan) {
    if(err) { return handleError(res, err); }
    if(!plan) { return res.send(404); }
    plan.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
};
