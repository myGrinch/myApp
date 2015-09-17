var app = angular.module('myApp', []);
app.controller('BookController', ['$scope', function($scope) {
    $scope.book = {
        id: 1,
        name: 'Harry Potter',
        author: 'J. K. Rowling',
        stores: [
            { id: 1, name: 'Barnes & Noble', quantity: 3},
            { id: 2, name: 'Waterstones', quantity: 2},
            { id: 3, name: 'Book Depository', quantity: 5}
        ]
    };
}]);