'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    server: {type: mongoose.Schema.Types.ObjectId, ref: 'Server'},
    restaurant: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
    size: Number,
    time: Date,
    checkoutTime: Date,
    userRating: {
        type: Number,
        min: 1,
        max: 5
    },
    serverRating: {
        type: Number,
        min: 1,
        max: 5
    }
});

// Used to calculate duration of dining
// NOTE: Checkout time is compared to original reservation time because even if a user checked in late, we want to calculate the duration based on when they were supposed to start dining
schema.method('getDuration', function () {
    return (this.checkoutTime - this.time);
});

mongoose.model('Reservation', schema);
