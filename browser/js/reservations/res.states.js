core.config(function ($stateProvider) {

    $stateProvider.state('reservations', {
        url: '/reservations/:restaurantId',
        controller: 'singleResCtrl',
        templateUrl: 'templates/singleReservation.html',
        resolve: {
            restaurant: function(resFactory, $stateParams) {
                return resFactory.fetchByRestaurantId($stateParams.restaurantId);
            },
            reservations: function(resFactory, restaurant) {
                return resFactory.fetchReservationsById(restaurant._id);
            }
        }
    });

});
