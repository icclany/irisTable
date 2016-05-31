core.controller('homeCtrl', function($scope, $state) {

    // Goes to reservations page

    // NOTE: Would be nice if this also populated the selected restaurants in the reservation form, based on which restaurant the user was looking at.
    $scope.goToReservation = function() {
        $state.go('reservations');
    }

    // Sets current view tab to the first restaurant
    $scope.selectedRestaurant = 0;

});
