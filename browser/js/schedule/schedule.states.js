app.config(function ($stateProvider) {

    $stateProvider.state('schedule', {
        url: '/schedule',
        templateUrl: '/templates/schedule.html',
        controller: 'scheduleCtrl',
        resolve: {
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

