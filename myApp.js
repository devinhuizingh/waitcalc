angular.module('myApp', [])
	.controller('firstController', function($scope) {
		reset()

		$scope.submit = function(){
			$scope.sub=$scope.mealPrice + $scope.mealPrice*$scope.taxRate
			$scope.tip=$scope.mealPrice*$scope.tipPercent
			$scope.total=$scope.sub+$scope.tip
			$scope.mealPrice=null
			$scope.tipPercent=null
			
			
			$scope.tipAdd += $scope.tip
			$scope.mealCount++
			$scope.avg=($scope.tipAdd/$scope.mealCount)
		
		}

		$scope.cancel = function(){
			console.log("click works")
			$scope.mealPrice=0
			$scope.taxRate=0
			$scope.tipPercent=0
		}

		$scope.reset = reset

		function reset(){
			$scope.mealPrice=null
			$scope.taxRate=null
			$scope.tipPercent=null
			$scope.sub=0
			$scope.tip=0
			$scope.total=0
			$scope.tipAdd=0
			$scope.mealCount=0
			$scope.avg=0
		}

	})