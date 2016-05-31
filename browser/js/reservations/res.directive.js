core.directive('resForm', function() {

    // Reservation form directive

    return {
        restrict: 'E',
        templateUrl: 'templates/reservationForm.html',
        link: function(scope) {

            scope.selectedItem = null;
            scope.searchText = null;
            scope.numPeople = 0;

            // NOTE: Want to add a message to contact the restaurant if there are 7+ diners. Either that, or notify user that there will be an automatic 20% gratuity
            scope.diners = [1, 2, 3, 4, 5, 6, '7+'];

            // Date variables for calendar range
            scope.myDate = scope.minDate = new Date();
            scope.maxDate = new Date(
                scope.myDate.getFullYear(),
                scope.myDate.getMonth() + 1,
                scope.myDate.getDate());

            scope.timeSlider = {
                min: 500,
                max: 700,
                options: {
                    floor: 400,
                    ceil: 1100,
                    translate: function(value) {
                        return value + "PM";
                    }
                }
            };

        }

    };

});
