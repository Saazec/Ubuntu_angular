var app = angular.module("myApp", []);
// app.controller("myController", function($scope, $http){
    // $scope.test = "hey there";
//    $scope.test = ['abc', 'def', 'ghi'];
    // $http.get("data.json").then(function(item){
        // $scope.Players = item.data;
    // });

// });

// app.controller("cont2", function($scope){
//     $scope.addUser = function(){
//         $scope.users.push({
//             name : $scope.newName,
//             age: $scope.newAge,
//             gender: $scope.newGender
//         });
//     }
//     $scope.users = [{
//         name : "abc",
//         age : "23",
//         gender : "male"
//     },
//     {
//         name : "pqr",
//         age : "25",
//         gender : "male"
//     },
//     {
//         name : "xyz",
//         age : "23",
//         gender : "male"
//     }
// ]});

// app.controller("clickcont", function($scope){
//     $scope.favlanguage = "none";

//     $scope.php = function(){
//         $scope.favlanguage = "php";
//     };
//     $scope.js = function(){
//         $scope.favlanguage = "js";
//     };
//     $scope.python = function(){
//         $scope.favlanguage = "python";
//     };
// });

// app.controller("myCtr", function($scope, $http){
//     $http.get("https://api.github.com/users").then(function(item){
//         $scope.gituser = item.data;
//     });
//     $scope.removeItem = function(u){
//         var removedItem = $scope.gituser.indexOf(u);
//         $scope.gituser.splice(removedItem, 1);
//     }
// })

// app.config(function($routeProvider, $locationProvider){
//     $routeProvider.when("/login", {
//         templateUrl: "view/login.html"
//     }).when("/signup", {
//         templateUrl: "view/signup.html"
//     }).when("/add_data",{
//         templateUrl: "view/add_data.html"
//     }).otherwise({
//         redirectTo: "view/login.html"
//     })
// });

app.controller("myController", function($scope){
    $scope.users = [{
        name: "abc",
        gender: "m",
        salary: "25000"
    },
    {
        name: "abc",
        gender: "m",
        salary: "25000"
    },
    {
        name: "abc",
        gender: "m",
        salary: "25000"
    },
    {
        name: "abc",
        gender: "m",
        salary: "25000"
    }
]
});

app.filter("myFilter", function(){
    return function(input, limit){
        if(isNaN(limit) || limit == ""){
            return input;
        }else{
            return input.substring(0, limit);
        }
    }
});

app.controller("latest", function($scope, $timeout, $interval){
    $scope.message="this is before";
    $timeout(function(){
        $scope.message = "this is after"
    }, 5000);

    $scope.time = new Date().toLocaleTimeString();
    $interval(function(){
        $scope.time = new Date().toLocaleTimeString(),1
    })
})