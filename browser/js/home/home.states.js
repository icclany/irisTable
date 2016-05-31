core.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    });
});
