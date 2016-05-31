core.controller('singleResCtrl', function($scope, resFactory, Session, restaurant, reservations) {

    let user = Session.user;

    // Date variables for calendar range
    $scope.myDate = $scope.minDate = new Date();
    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 1,
        $scope.myDate.getDate());


    $scope.makeReservation = function(size, date) {
        return resFactory.makeReservation({
            user: user._id,
            restaurant: restaurant._id,
            size: $scope.diners,
            time: date
        })
    }

});
