core.factory('userFactory', function ($http) {

    let userFactory = {};

    // Gets all users
    userFactory.fetchAllUsers = function() {
        return $http.get('/api/members')
        .then((members) => members.data)
    }

    // Edits user type
    userFactory.editUserType = function(userId, type) {
        return $http.put('/api/members/'+userId, {
            userType: type
        }).then((editedUser) => {
            return editedUser.data;
        });
    }

    return userFactory;

});
