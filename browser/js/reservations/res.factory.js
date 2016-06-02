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
    resFactory.makeReservation = function(resObj) {
        // NOTE: Redirect to home page or confirmation page
        return $http.post('/api/reservations', resObj);
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

    // Update a reservation
    resFactory.updateReservation = function(resId, updateObj) {
        return $http.put('/api/reservations/' + resId, updateObj)
        .then((reservation) => reservation.data);
    }

    return resFactory;

});
