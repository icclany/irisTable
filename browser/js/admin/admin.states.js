core.config(function ($stateProvider) {
    $stateProvider.state('adminpage', {
        url: '/admin',
        templateUrl: 'templates/admin.html',
        controller: 'adminCtrl',
        resolve: {
            users: function(userFactory) {
                return userFactory.fetchAllUsers();
            }
        }
    });
});
