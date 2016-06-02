core.controller('userCtrl', function($scope, reservations) {

    $scope.currentReservations = [];
    $scope.pastReservations = [];

    reservations.forEach((reservation) => {
        if (Date.parse(reservation.time) > Date.now()) {
            // Format the time to string
            reservation.time = moment(reservation.time).format("dddd, MMMM Do, h:mm a");
            // reservation.time = parsedTime.getHours()
            $scope.currentReservations.push(reservation);
        } else {
            reservation.time = moment(reservation.time).format("dddd, MMMM Do, h:mm a");
            $scope.pastReservations.push(reservation);
        }
    });

    $scope.phone = {
        type: 'Call the Restaurant',
        number: '(555) 251-1234',
        options: {
            icon: 'communication:phone'
        }
    }


});
