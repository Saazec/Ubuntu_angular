var app = angular.module("testApp", []);
// app.directive("customDirective", function(){
//     return {
//         //E- element C-class A-attribute
//         restrict: "E",
//         template: "<h1>This is what needs to be printed</h1>"
//     }
// });


//empname id designation date of joining gender salary photo = JSON 5 objects

app.directive("enter", function(){
    return{
        restrict:"A",
        link: function(scope, element, attrs){
            element.bind("mouseenter", function(){
            console.log("mouse entered");
            element.addClass("enter")
            });
        }
    }
});
app.directive("leave", function(){
    return{
        restrict: "A",
        link: function(scope, element, attrs){
            element.bind("mouseleave", function(){
            console.log("mouse left");
            element.addClass("left")
            });            
        }
    }

})