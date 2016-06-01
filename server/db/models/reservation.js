'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    restaurant: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
    size: Number,
    available: Number,
    time: Date
});


mongoose.model('Reservation', schema);
