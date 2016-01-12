angular.module('MyApp',[])
.controller('MyController',['$scope',function(scope){
	scope.ctrlVar = {name:'hello world'};
}])
.directive('hello',function(){
	return{
		restrict:'AE',
		scope:{
			abc:'@myvar'
		},
		repalce:true,
		template:'<input class="form-control" type="text" ng-model="abc" />'
	}
});
