core.controller('adminCtrl', function($scope, users, userFactory) {

    // Sets current view tab to the first restaurant
    $scope.users = users;

    $scope.setType = function(user, type) {
        let idx = $scope.users.indexOf(user);
        return userFactory.editUserType(user._id, type)
        .then((user) => {
            $scope.users[idx] = user;
        })
    }

});
