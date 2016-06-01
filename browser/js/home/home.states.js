core.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl',
        resolve: {
            restaurants: function(resFactory) {
                return resFactory.fetchAllRestaurants();
            }
        }
    });
});
