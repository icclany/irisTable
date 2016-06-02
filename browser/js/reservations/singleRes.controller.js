core.controller('singleResCtrl', function($scope, $mdDialog, $state, resFactory, Session, restaurant, reservations) {

    let user = Session.user;
    $scope.restaurant = restaurant;

    $scope.diners = [1, 2, 3, 4, 5, 6];

    let date, dateBuffer, hourBuffer;

    $scope.beforeRender = function($view, $dates, $leftDate, $upDate, $rightDate) {

        if ($view === 'day') {
            date = new Date();
            dateBuffer = date.setTime(date.getTime() - 86400000);
            $dates.forEach((date) => {
                if (date.localDateValue() < dateBuffer) {
                    date.selectable = false;
                }
            });
        } else if ($view === 'hour') {
            date = new Date();
            hourBuffer = date.setTime(date.getTime() - 60 * 60 * 1000);
            $dates.forEach((date) => {
                if (date.localDateValue() < hourBuffer) {
                    date.selectable = false;
                }
            });
        } else {
            $dates.forEach((date) => {
                if (date.localDateValue() < Date.now()) {
                    date.selectable = false;
                }
            });
        }
    }

    // Indicates if time is available
    $scope.available = false;

    $scope.onTimeSet = function(newDate, oldDate) {
        // respond if time is not available for the number of diners
        if (checkAvailability()) {
            // NOTE: Would like to indicate if other times are available
            $scope.message = "The time you requested is available.";
            $scope.available = true;
        } else {
            $scope.message = "The time you requested in unavailable. Please try a different search.";
            $scope.available = false;
        }
    }

    $scope.makeReservation = function(dataObj) {
        return resFactory.makeReservation({
                user: user._id,
                restaurant: restaurant._id,
                size: $scope.data.size,
                time: Date.parse($scope.data.date)
            })
            .then((reservation) => {
                $mdDialog.show(
                    $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Reservation booked!')
                    .textContent('We look forward to seeing you on ' + moment($scope.data.date).format("dddd, MMMM Do, h:mm a"))
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                );
                $state.go('home');
            });
    }

    const twoHours = 120 * 60 * 1000;

    function checkAvailability() {
        let diners = 0;
        let time = $scope.data.date;

        let size = parseInt($scope.data.size) || 0;
        reservations.forEach((res) => {
            // Check reservations within a 2 hour window
            if ((time <= (res.time + twoHours)) && (time >= res.time)) {
                diners += res.size;
            }
        })
        if (diners + size <= restaurant.capacity) return true;
        else return false;
    }

});
