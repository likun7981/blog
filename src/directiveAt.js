angular.module('MyApp',[])
.controller('MyController',['$scope',function(scope){
	scope.ctrlVar = 'hello world';
}])
.directive('hello',function(){
	return{
		restrict:'AE',
		scope:{
			abc:'@myvar'
		},
		repalce:true,
		template:'<input type="text" ng-model="abc" />'
	}
});
