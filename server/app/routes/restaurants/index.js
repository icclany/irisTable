'use strict';
var router = require('express').Router();
module.exports = router;
const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');
var _ = require('lodash');

router.get('/', (req, res) => {  // get all
    Restaurant.find()
    .populate('slots')
    .then(restaurants => res.send(restaurants))
});

// router.put('/:id', (req, res) => {  // get all
//     Restaurant.findbyId(req.params.id)
//     .populate('slots')
//     .then(restaurant => {
//         //     for (var key in req.body) { // doesn't require sending the whole object back and forth
//         //         restaurant.slots[key].booked = true
//         //     }
//         //     // user = req.body // requires sending the whole object, but maybe less risky than overwriting the whole object?
//         //     return user.save()
//         // })
//         // .then(newUser => res.send(newUser))
// });
