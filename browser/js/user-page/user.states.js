core.config(function ($stateProvider) {

    $stateProvider.state('userpage', {
        url: '/user-detail',
        controller: 'userCtrl',
        templateUrl: 'templates/user-detail.html',
        resolve: {
            reservations: function(resFactory, Session) {
                return resFactory.fetchReservationsByUser(Session.user._id);
            }
        }
    });

});
