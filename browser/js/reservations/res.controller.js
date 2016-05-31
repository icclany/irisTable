core.controller('resCtrl', function($scope, restaurants) {

    $scope.selectedRestaurants = [];

    // Adding new chips to selection box
    $scope.transformChip = function(chip) {
        if (angular.isObject(chip)) {
            return chip;
        }
        return { name: chip, type: 'new' }
    }

    // *****************************************
    // FILTER FUNCTIONALITY
    // *****************************************

    // Filter function for query string
    function createRestaurantFilter(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(restaurant) {
            return (restaurant.name.toLowerCase().indexOf(lowercaseQuery) === 0)
        };
    }
    // Search function for restaurant chips
    $scope.querySearch = function(query) {
        let results = query ? restaurants.filter(createRestaurantFilter(query)) : [];
        return results;
    }

    // Filter function for times within range
    $scope.timeSearch = function() {
        return function(item) {
            let intTime = parseInt(item.time);
            return (intTime >= $scope.timeSlider.min) && (intTime <= $scope.timeSlider.max)
        }
    }


});
