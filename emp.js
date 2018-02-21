var app = angular.module("myApp", []);
app.controller("myController", function($scope, $http){
    $http.get("data.json").then(function(item){
        $scope.Players = item.data;
    })
});