core.controller('scheduleCtrl', function($scope, $state, restaurants) {

    $scope.restaurants = restaurants;

    $scope.onTabSelected = function(restaurant) {
        $state.go("schedule.detail", {resId: restaurant._id});
    }

});

core.controller('scheduleDetailCtrl', function($scope, $state, reservations) {

    let today = new Date();

    let timeSlots = [
    {
        display: "5:00 PM",
        hours: today.setHours(17,0,0,0)
    },{
        display: "5:30 PM",
        hours: today.setHours(17,30,0,0)
    },{
        display: "6:00 PM",
        hours: today.setHours(18,0,0,0)
    },{
        display: "6:30 PM",
        hours: today.setHours(18,30,0,0)
    },{
        display: "7:00 PM",
        hours: today.setHours(19,0,0,0)
    },{
        display: "7:30 PM",
        hours: today.setHours(19,30,0,0)
    },{
        display: "8:00 PM",
        hours: today.setHours(20,0,0,0)
    },{
        display: "8:30 PM",
        hours: today.setHours(20,30,0,0)
    }
    ]

    // Don't display times that have already passed
    $scope.times = timeSlots.filter((timeObj) => {
        return timeObj.hours >= Date.now();
    });

    $scope.goToTime = function(hourFormat) {
        $scope.reservations = reservations.filter((reservation) => {
            return Date.parse(reservation.time) === hourFormat;
        });
    }


});
