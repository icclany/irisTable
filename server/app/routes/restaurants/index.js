'use strict';
var router = require('express').Router();
module.exports = router;
const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');
var _ = require('lodash');

router.get('/:resId', (req, res) => { // get one...outside of context of thread
    Restaurant.findById(req.params.resId)
    .then(restaurant => res.send(restaurant))
  });

router.get('/', (req, res) => {  // get all
    Restaurant.find()
    .then(restaurants => res.send(restaurants))
});
