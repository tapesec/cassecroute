angular.module('cassecroute')

.directive('detail', function() {

	return {
		restrict: 'E',
		templateUrl: 'client/views/detail/detail.html',
		controllerAs: 'ctrl',
		controller: 'detailCtrl'
	}
	
});