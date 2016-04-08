angular.module('cassecroute')

.directive('categoriesItems', function() {
	return {
		
		restrict: 'E',
		templateUrl: 'client/views/detail/components/categoriesItems/categories_items.html',
		controllerAs: 'ctrl',
		controller: 'categoriesItemsCtrl',
		scope: {},
		bindToController: {
			onChangeCategorySelected: '&'
		}
	}
});