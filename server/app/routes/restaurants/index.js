'use strict';
var router = require('express').Router();
module.exports = router;
const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');
var _ = require('lodash');

router.param('resId', function (req, res, next, id) {
  Restaurant
  .findById(resId)
  .then(function (restaurant) {
    if(!restaurant) throw new Error('not found!');
    req.restaurant = restaurant;
    next();
  })
  .then(null, next);
});

router.get('/', (req, res) => {  // get all
    Restaurant.find()
    .then(restaurants => res.send(restaurants))
});

router.get('/:resId', function (req, res) {
  res.json(req.restaurant);
});
