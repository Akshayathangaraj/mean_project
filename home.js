const app = angular.module('myApp', []);

app.controller('MainController', function($scope) {
    // Get the username from localStorage
    $scope.username = localStorage.getItem('username');
    $scope.showProfileMenu = false;

    // Toggle the profile menu
    $scope.toggleProfileMenu = function() {
        $scope.showProfileMenu = !$scope.showProfileMenu;
    };

    // Logout function
    $scope.logout = function() {
        // Clear username and navigate to the index page
        localStorage.removeItem('username');
        window.location.href = 'index.html'; // Use relative path
    };
});
