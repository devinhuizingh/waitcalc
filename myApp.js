angular.module('myApp', ['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'home.html',
           
        })
        .when('/new-meal', {
            templateUrl : 'new-meal.html',
            controller : 'newMeal'
        }).when('/my-earnings', {
            templateUrl : 'my-earnings.html',
            controller : 'myEarnings'
        });
    }])

    

	.controller('newMeal', function($scope, $rootScope) {
		//reset();
		if ($rootScope.mealCount = "undefined") {$rootScope.mealCount = 0;}
		$rootScope.tipAdd = 0;
		$scope.mealCount=$rootScope.mealCount;

		$scope.submit = function(){
			
			$scope.sub=$scope.mealPrice + $scope.mealPrice*$scope.taxRate;
			$scope.tip=$scope.mealPrice*$scope.tipPercent;
	
			$scope.total=$scope.sub+$scope.tip;
			$scope.mealPrice=null;
			$scope.tipPercent=null;
						
			$scope.tipAdd += $scope.tip;
			$scope.mealCount++;
			$scope.avg=($scope.tipAdd/$scope.mealCount);

			$rootScope.mealCount = $scope.mealCount;
			$rootScope.tipAdd =  $scope.tipAdd;
			$setPristine();
			
		}

		$scope.cancel = function(){
			$scope.mealPrice=0;
			$scope.taxRate=0;
			$scope.tipPercent=0;
		}

		$scope.reset = reset;

		function reset(){
			$scope.mealPrice=null;
			$scope.taxRate=null;
			$scope.tipPercent=null;
			$scope.sub=0;
			$scope.tip=0;
			$scope.total=0;
			$scope.tipAdd=0;
			$scope.mealCount=0;
			$scope.avg=0;
		}
	})
	.controller('myEarnings', function($scope, $rootScope) {
		function reset(){
			$scope.mealPrice=null;
			$scope.taxRate=null;
			$scope.tipPercent=null;
			$scope.sub=0;
			$scope.tip=0;
			$scope.total=0;
			$scope.tipAdd=0;
			$scope.mealCount=0;
			$scope.avg=0;

		}
		console.log($rootScope.mealCount);
		$scope.mealCount=$rootScope.mealCount;
	})


	