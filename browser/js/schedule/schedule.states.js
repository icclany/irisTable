app.config(function ($stateProvider) {

    // NOTE: This page is intended to show the booking schedules for each restaurant, including party size, time, and user
    $stateProvider.state('schedule', {
        url: '/schedule',
        templateUrl: '/templates/schedule.html',
        controller: 'scheduleCtrl',
        resolve: {
            // NOTE: Change this to be only the restaurant/reservations relevant to the user
            restaurants: function(resFactory) {
                return resFactory.fetchAllRestaurants();
            },
            reservations: function(resFactory) {
                return resFactory.fetchAllReservations();
            }
        },
        data: {
            authenticate: true
        }
    });

    $stateProvider.state('schedule.detail', {
        url: '/:resId',
        templateUrl: '/templates/schedule.detail.html',
        controller: 'scheduleDetailCtrl',
        resolve: {
             reservations: function(resFactory, $stateParams) {
                return resFactory.fetchReservationsById($stateParams.resId);
            }
        }
    });

});

