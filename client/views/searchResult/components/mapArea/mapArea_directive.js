angular.module('cassecroute')

.directive('mapArea', function() {
	return {
		restrict: 'E',
		templateUrl: 'client/views/searchResult/components/mapArea/map-area.html',
	    controllerAs: 'ctrl',
	    bindToController: true,
	    scope: true,
	    controller: 'mapAreaCtrl'
	}
});