angular.module('cassecroute')

.directive('listSearchResult', function() {
	
	return {
		restrict: 'E',
	    templateUrl: 'client/views/searchResult/components/list/list-search-result.html',
	    controllerAs: 'ctrl',
	    bindToController: true,
	    scope: true,
	    controller: 'listSearchResultCtrl'	
	}
	
});