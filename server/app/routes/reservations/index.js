'use strict';
var router = require('express').Router();
module.exports = router;
const mongoose = require('mongoose');
const Reservation = mongoose.model('Reservation');
var _ = require('lodash');

// Make a reservation
router.post('/', (req, res, next) => {
    Reservation.create(req.body)
        .then(reservation => res.json(reservation))
        .then(null, next);
});

// Update reservations
router.put('/:resId', (req, res, next) => {
    Reservation.findById(req.params.resId)
        .then(reservation => {
            _.extend(reservation, req.body);
            reservation.save();
        })
        .then(function(reservation) {
            res.json(reservation);
        })
        .then(null, next);
});

// Get reservations for one restaurant
router.get('/restaurants/:resId', (req, res, next) => {
    Reservation.find({ restaurant: req.params.resId })
        .populate('user restaurant')
        .then(reservations => res.json(reservations))
        .then(null, next);
});

// Get reservations for one user
router.get('/users/:userId', (req, res, next) => {
    Reservation.find({ user: req.params.userId })
        .populate('user restaurant')
        .then(reservations => res.json(reservations))
        .then(null, next);
});

// Get all reservations
router.get('/', (req, res, next) => {
    Reservation.find()
        .populate('user restaurant')
        .then(reservations => res.json(reservations))
        .then(null, next);
});

// TO DO: Routes for editing reservations
