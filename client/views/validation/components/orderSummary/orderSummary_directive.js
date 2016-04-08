angular.module('cassecroute')

.directive('orderSummary', function() {
	return {
		restrict: 'E',
		templateUrl: 'client/views/validation/components/orderSummary/order_summary.html',
		controllerAs: 'ctrl',
		scope: {},
		controller: 'orderSummaryCtrl'
	}
})