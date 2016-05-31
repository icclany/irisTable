'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    slots: [{type: mongoose.Schema.Types.ObjectId, ref: 'Time'}]
});


mongoose.model('Restaurant', schema);
