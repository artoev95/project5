'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  
  location: {type : String ,required: true},
  total_cost: { type: Number ,required: true },
  holiday_type:{type : String ,required: true},
  transport_type:{type : String ,required: true},
  updated: { type: Date, default: Date.now },
  detailed_expenses:[ {
      transport: { type: String, required: true, trim: true},
      Hotel: { type: Number, required: true, trim: true},
      Food: { type: Number, required: true, trim: true},
      Attractions: { type: Number, required: true, trim: true}
  }]

  
});

module.exports = mongoose.model('holidays', ContactSchema);