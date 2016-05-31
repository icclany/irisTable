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

var wipeCollections = function() {
    return Promise.all([
        User.remove({}),
        Restaurant.remove({})
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

// var seedTimes = function() {
//     var times = [{
//         time: '0500',
//         booked: false
//     }, {
//         time: '0530',
//         booked: false
//     }, {
//         time: '0600',
//         booked: false
//     }, {
//         time: '0630',
//         booked: false
//     }, {
//         time: '0700',
//         booked: false
//     }, {
//         time: '0730',
//         booked: false
//     }, {
//         time: '0800',
//         booked: false
//     }, {
//         time: '0830',
//         booked: false
//     }]

//     return Time.create(times);
// }

var seedRestaurants = function() {
    // var timeIds = times.map((obj) => obj._id);

    var restaurants = [
    {
        name: 'Pigs in Blankets',
        capacity: 50
    }, {
        name: "The Waterway Grille",
        capacity: 100
    }, {
        name: "Mussels on Mussels",
        capacity: 75
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
        return seedRestaurants();
    })
    .then(function() {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    })
    .catch(function(err) {
        console.error(err);
        process.kill(1);
    });
