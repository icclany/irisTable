core.factory('resFactory', function ($http) {

    let resFactory = {};

    // Gets all restaurants and timeslots
    resFactory.fetchAll = function() {
        return $http.get('/api/restaurants')
        .then((restaurants) => restaurants.data)
    }

    // Makes a reservation
    // NOTE: Need to add validation to double check that slot has not already been reserved
    resFactory.makeReservation = function(resId, time) {
        return $http.put('/api/restaurants/' + resId, time)
    }

    return resFactory;

});
