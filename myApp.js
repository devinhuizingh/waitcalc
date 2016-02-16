angular.module('myApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'firstController'
        })
        .when('/new-meal', {
            templateUrl : 'new-meal.html',
            controller : 'firstController'
        }).when('/my-earnings', {
            templateUrl : 'my-earnings.html',
            controller : 'firstController'
        });
    }])

	.controller('firstController', function($scope, $rootScope) {
		reset()

		$scope.submit = function(){
			console.log("there we go")
			$rootScope.sub=$rootScope.mealPrice + $rootScope.mealPrice*$rootScope.taxRate;
			$rootScope.tip=$rootScope.mealPrice*$rootScope.tipPercent;


			$rootScope.total=$rootScope.sub+$scope.tip;
			$rootScope.mealPrice=null;
			$rootScope.tipPercent=null;
			
			
			$rootScope.tipAdd += $rootScope.tip;
			$rootSootScope.mealCount++;
			$rootScope.avg=($rootScope.tipAdd/$rootScope.mealCount);
			console.log($rootScope.mealCount)
		
		}

		$scope.cancel = function(){
			console.log("click works")
			$rootScope.mealPrice=0;
			$rootScope.taxRate=0;
			$rootScope.tipPercent=0;
		}

		$rootScope.reset = reset;

		function reset(){
			$rootScope.mealPrice=null;
			$rootScope.taxRate=null;
			$rootScope.tipPercent=null;
			$rootScope.sub=0;
			$rootScope.tip=0;
			$rootScope.total=0;
			$rootScope.tipAdd=0;
			$rootScope.mealCount=0;
			$rootScope.avg=0;
		}

		

	})