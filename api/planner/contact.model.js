'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  
  location: {type : String ,required: false},
  total_cost: { type: Number ,required: false },
  holiday_type:{type : String ,required: false},
  transport_type:{type : String ,required: false},
  updated: { type: Date, default: Date.now },
  detailed_expenses:[ {
      transport: { type: String, required: false, trim: true},
      Hotel: { type: Number, required: false, trim: true},
      Food: { type: Number, required: false, trim: true},
      Attractions: { type: Number, required: false, trim: true}
  }]

  
});

module.exports = mongoose.model('holidays', ContactSchema);