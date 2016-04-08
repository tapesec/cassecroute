angular.module('cassecroute')


.directive('validation', function() {
	return {
		restrict: 'E',
		templateUrl: 'client/views/validation/validation.html',
		controllerAs: 'ctrl',
		controller: 'validationCtrl'
	}
});