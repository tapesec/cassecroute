angular.module('cassecroute')

.directive('listView', function() {

	return {
		restrict: 'E',
		templateUrl: 'client/views/searchResult/list.html',
		controllerAs: 'ctrl',
		controller: 'listCtrl'
	}
	
});