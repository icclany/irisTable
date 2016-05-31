core.config(function ($stateProvider) {

    $stateProvider.state('reservations', {
        url: '/reservations',
        controller: 'resCtrl',
        templateUrl: 'templates/reservations.html',
        resolve: {
            restaurants: function(resFactory) {
                return resFactory.fetchAll();
            }
        }
    });

});
