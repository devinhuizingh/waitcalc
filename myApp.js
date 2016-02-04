angular.module('myApp', [])
	.controller('firstController', function($scope) {
		$scope.mealPrice="0.00"
		$scope.taxRate=".00"
		$scope.tipPercent="0.00"

		$scope.submit = function(){
			console.log("submit works")
		}

		$scope.cancel = function(){
			console.log("cancel works")
		}


	})