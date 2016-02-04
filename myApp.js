angular.module('myApp', [])
	.controller('firstController', function($scope) {
		$scope.mealPrice="0.00"
		$scope.taxRate=".00"
		$scope.tipPercent="0.00"
		$scope.sub="0"
		$scope.tip="0"
		$scope.total="0"
		$scope.tipAdd="0"
		$scope.mealCount="0"

		$scope.submit = function(){
			console.log("submit works")
			$scope.sub=$scope.mealPrice + $scope.mealPrice*$scope.taxRate
			$scope.tip=$scope.mealPrice*$scope.tipPercent
			$scope.total=$scope.sub+$scope.tip
			
			$scope.tipAdd=(+$scope.tipAdd)+(+$scope.tip)
			$scope.mealCount=($scope.mealCount*1)+1
			



		}

		$scope.cancel = function(){
			console.log("cancel works")
		}


	})