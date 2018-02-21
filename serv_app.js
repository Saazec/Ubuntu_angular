var app = angular.module("myServ", []);
// app.service("random", function(){
//     var num = Math.random(100);
//     this.randomNum = function(){
//         return num;
//     }
// });

// app.controller("newController", function($scope, random){
//     $scope.test = function(){
//         $scope.generateNum = random.randomNum();
//     }
// })

app.factory("random", function(){
    var obj = {};
    var num = Math.random()*100;
    obj.randomNum = function(){
        return num;
    }
    return obj;
});

app.controller("newController", function($scope, random){
    $scope.test = function(){
        $scope.generateNum = random.randomNum();
    }
});