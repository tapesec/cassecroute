angular.module('cassecroute')

.controller('homeCtrl', function($scope, $reactive, HomeSearch) {
	
	$reactive(this).attach($scope);
	
	var vm = this;

	vm.count = 1638;
	vm.search = HomeSearch.submit;    
    vm.predicate = HomeSearch.getSearchRecipePredictions;
    vm.searchPlace = HomeSearch.getSearchPlacesPredictions;

});