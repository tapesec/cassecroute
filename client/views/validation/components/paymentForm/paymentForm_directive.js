angular.module('cassecroute')

.directive('paymentForm', function() {
	return {
		restrict: 'E',
		templateUrl: 'client/views/validation/components/paymentForm/payment_form.html',
		controllerAs: 'ctrl',
		scope: {},
		controller: 'paymentFormCtrl'
	}
});