angular.module('formApp', [])
.controller('FormController', ['$scope', '$http', function($scope, $http) {
    $scope.formData = {};
    $scope.errorMessage = '';

    $scope.validateForm = function() {
        const { name, email, phone, password, confirmPassword } = $scope.formData;

        // Basic validation for empty fields
        if (!name || !email || !phone || !password || !confirmPassword) {
            $scope.errorMessage = 'Please fill in all fields.';
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            $scope.errorMessage = 'Please enter a valid email address.';
            return;
        }

        // Validate phone number (10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            $scope.errorMessage = 'Please enter a valid 10-digit phone number.';
            return;
        }

        // Validate password (at least 6 characters, 1 uppercase, 1 special character)
        const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
        if (!passwordPattern.test(password)) {
            $scope.errorMessage = 'Password must be at least 6 characters long and include at least one uppercase letter and one special character.';
            return;
        }

        // Validate that passwords match
        if (password !== confirmPassword) {
            $scope.errorMessage = 'Passwords do not match.';
            return;
        }
        console.log($scope.formData);
        // Send data to the backend
        $http.post('http://localhost:4000/register', $scope.formData)
        .then(function(response) {
            alert('Registration successful!');
            window.location.href = 'index.html';
        })
        .catch(function(error) {
            $scope.errorMessage = 'Error during registration: ' + error.data;
        });
    };
}]);
