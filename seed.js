/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = mongoose.model('User');
var Restaurant = mongoose.model('Restaurant');
var Time = mongoose.model('Time');


var wipeCollections = function() {
    return Promise.all([
        User.remove({}),
        Restaurant.remove({}),
        Time.remove({})
    ]);
};

var seedUsers = function() {

    var users = [{
        email: 'iris@iris.com',
        password: 'password'
    }, {
        email: 'obama@gmail.com',
        password: 'potus'
    }];

    return User.create(users);

};

var seedTimes = function() {
    var times = [{
        time: '0500',
        booked: false
    }, {
        time: '0530',
        booked: false
    }, {
        time: '0600',
        booked: false
    }, {
        time: '0630',
        booked: false
    }, {
        time: '0700',
        booked: false
    }, {
        time: '0730',
        booked: false
    }, {
        time: '0800',
        booked: false
    }, {
        time: '0830',
        booked: false
    }, {
        time: '0900',
        booked: false
    }, {
        time: '0930',
        booked: false
    }]

    return Time.create(times);
}

var seedRestaurants = function(times) {
    var timeIds = times.map((obj) => obj._id);

    var restaurants = [
    {
        name: 'Pigs in Blankets',
        slots: timeIds
    }, {
        name: "The Waterway Grille",
        slots: timeIds
    }, {
        name: "Mussels on Mussels",
        slots: timeIds
    }
    ]

    return Restaurant.create(restaurants);
}

connectToDb
    .then(function() {
        return wipeCollections();
    })
    .then(function() {
        return seedUsers();
    })
    .then(function() {
        return seedTimes();
    })
    .then(function(times) {
        return seedRestaurants(times);
    })
    .then(function() {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    })
    .catch(function(err) {
        console.error(err);
        process.kill(1);
    });
