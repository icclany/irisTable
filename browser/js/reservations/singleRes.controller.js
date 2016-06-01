core.controller('singleResCtrl', function($scope, $mdDialog, $state, resFactory, Session, restaurant, reservations) {

    let user = Session.user;
    $scope.restaurant = restaurant;

    $scope.diners = [1, 2, 3, 4, 5, 6, '7+'];

    $scope.beforeRender = function($view, $dates, $leftDate, $upDate, $rightDate) {
        // NOTE:
        // 1. Make booked dates unselectable
        if ($view === 'day') {
            // Only show days including and after today
            let today = moment().startOf('day').utc();
            for (let i = 0; i < $dates.length; i++) {
                if (today.isAfter($dates[i].localDateValue(), 'day')) {
                    $dates[i].selectable = false;
                }
            }
        } else {
            // Only show hours between 5-8 PM
            for (let i = 0; i < $dates.length; i++) {
                let time = moment($dates[i].localDateValue());
                if (!((time.hours() <= 20) && (time.hours() >= 17))) {
                    $dates[i].selectable = false;
                }
            }
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
        // let dateFormat = moment($scope.data.date);
        // console.log("dateformat is", dateFormat)
        return resFactory.makeReservation({
                user: user._id,
                restaurant: restaurant._id,
                size: $scope.data.size,
                time: $scope.data.date
            })
            .then((reservation) => {
                $mdDialog.show(
                    $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Reservation booked!')
                    .textContent('We look forward to seeing you on ' + $scope.data.date)
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
        let size = $scope.data.size || 0;
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
