angular.module("MyApp", [])
.controller('MyController', ['$scope', function($scope){
	$scope.sayHello=function(name){
		alert("Hello "+name);
	}
}])
.directive("hello", function() {
    return {
    	restrict:'AE',
        scope:{
        	abc:'&myfun'
        },
        template:'<input type="text" ng-model="userName" /><br/>'+
        '<button class="btn btn-default" ng-click="abc({name:userName})">Greeting</button><br/>'
    }
});