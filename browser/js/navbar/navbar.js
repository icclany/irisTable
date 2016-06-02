core.directive('navbar', function ($rootScope, AuthService, AUTH_EVENTS, $state) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'templates/navbar.html',
        link: function (scope) {
            scope.items = [
                { label: 'Home', state: 'home' },
                { label: 'Schedule', state: 'schedule', auth: true },
                { label: 'My Reservations', state: 'userpage', auth: true }
            ];

            scope.user = null;
            $rootScope.userType = null;

            scope.isLoggedIn = function () {
                return AuthService.isAuthenticated();
            };

            scope.isCustomer = function () {
                return ($rootScope.userType === "customer");
            };

            scope.isStaff = function () {
                return ($rootScope.userType === "staff");
            };

            scope.isAdmin = function () {
                return ($rootScope.userType === "admin");
            };

            scope.logout = function () {
                AuthService.logout().then(function () {
                   $state.go('home');
                });
            };

            var setUser = function () {
                AuthService.getLoggedInUser().then(function (user) {
                    scope.user = user;
                    $rootScope.userType = user.userType;
                    console.log("set userType to", $rootScope.userType)
                });
            };

            var removeUser = function () {
                scope.user = null;
                $rootScope.userType = null;
            };

            setUser();

            $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
            $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

        }

    };

});
