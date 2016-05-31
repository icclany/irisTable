app.config(function ($stateProvider) {

    // NOTE: This page is intended to show the booking schedules for each restaurant, including party size, time, and user
    $stateProvider.state('schedule', {
        url: '/schedule',
        data: {
            authenticate: true
        }
    });

});

