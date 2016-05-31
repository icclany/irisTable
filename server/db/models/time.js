'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    time: String,
    booked: Boolean
});


mongoose.model('Time', schema);
