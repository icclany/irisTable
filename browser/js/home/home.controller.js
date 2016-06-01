core.controller('homeCtrl', function($scope, restaurants, $state) {

    // Sets current view tab to the first restaurant
    $scope.selectedRestaurant = 0;

    $scope.restaurants = restaurants;

    // Takes user to a restaurant's reservation page
    $scope.goToReservation = function() {
        $state.go('reservations', { restaurantId: restaurants[$scope.selectedRestaurant]._id});
    }


});
