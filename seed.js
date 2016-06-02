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
var Reservation = mongoose.model('Reservation');


var wipeCollections = function() {
    return Promise.all([
        User.remove({}),
        Restaurant.remove({})
        // Reservation.remove({})
    ]);
};

var seedUsers = function() {

    var users = [{
        name: 'Frodo Baggins',
        email: 'staff@iris.com',
        password: 'password',
        userType: 'staff'
    }, {
        name: 'Samwise Gamgee',
        email: 'diner@iris.com',
        password: 'password',
        userType: 'customer'
    },{
        name: 'Meriadoc Brandybuck',
        email: 'diner2@iris.com',
        password: 'password',
        userType: 'customer'
    }, {
        name: 'Iris Chang',
        email: 'admin@iris.com',
        password: 'password',
        userType: 'admin'
    }];

    return User.create(users);

};

var seedRestaurants = function() {

    var restaurants = [{
        name: 'Pigs in Blankets',
        capacity: 50
    }, {
        name: "The Waterway Grille",
        capacity: 100
    }, {
        name: "Mussels on Mussels",
        capacity: 75
    }]
    return Restaurant.create(restaurants);
};

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
