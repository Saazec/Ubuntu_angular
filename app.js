var app = angular.module("myApp", ["ngRoute"]);
// app.controller("myController", function($scope, $http){
    // $scope.test = "hey there";
//    $scope.test = ['abc', 'def', 'ghi'];
    // $http.get("data.json").then(function(item){
        // $scope.Players = item.data;
    // });

// });

app.controller("cont2", function($scope){
    $scope.users = [{
        name : "abc",
        age : 23,
        gender : "male"
    },
    {
        name : "pqr",
        age : 25,
        gender : "male"
    },
    {
        name : "xyz",
        age : 23,
        gender : "male"
    }
];
});

app.controller("clickcont", function($scope){
    $scope.favlanguage = "none";

    $scope.php = function(){
        $scope.favlanguage = "php";
    };
    $scope.js = function(){
        $scope.favlanguage = "js";
    };
    $scope.python = function(){
        $scope.favlanguage = "python";
    };
});

app.controller("myCtr", function($scope, $http){
    $http.get("https://api.github.com/users").then(function(item){
        $scope.gituser = item.data;
    });
    $scope.removeItem = function(u){
        var removedItem = $scope.gituser.indexOf(u);
        $scope.gituser.splice(removedItem, 1);
    }
})

app.config(function($routeProvider, $locationProvider){
    $routeProvider.when("/login", {
        templateUrl: "view/login.html"
    }).when("/signup", {
        templateUrl: "view/signup.html"
    }).otherwise({
        redirectTo: "view/login.html"
    })
})