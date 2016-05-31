core.factory('resFactory', function ($http) {

    let resFactory = {};

    // Gets all restaurants
    resFactory.fetchAllRestaurants = function() {
        return $http.get('/api/restaurants')
        .then((restaurants) => restaurants.data)
    }

    // Gets single restaurant
    resFactory.fetchByRestaurantId = function(resId) {
        return $http.get('/api/restaurants/' + resId)
        .then((restaurant) => restaurant.data)
    }

    // Makes a reservation
    // NOTE: Need to add validation to double check that slot has not already been reserved
    resFactory.makeReservation = function(resId, resObj) {
        return $http.put('/api/restaurants/' + resId, resObj)
        .then((reservation) => console.log("Reservation made"))
    }

    // Gets all reservations
    resFactory.fetchAllReservations = function() {
        return $http.get('/api/reservations')
        .then((reservations) => reservations.data)
    }

    // Gets reservations by restaurant
    resFactory.fetchReservationsById = function(resId) {
        return $http.get('/api/reservations/restaurants/' + resId)
        .then((reservations) => reservations.data)
    }

    // Gets reservations by user
    resFactory.fetchReservationsByUser = function(userId) {
        return $http.get('/api/reservations/users/' + userId)
        .then((reservations) => reservations.data)
    }

    return resFactory;

});
