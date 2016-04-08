angular.module('cassecroute')

.directive('productPanel', function() {

	return {
		restrict: 'E',
	    templateUrl: 'client/views/detail/components/productPanel/product_panel.html',
	    controller: 'productPanelCtrl',
	    controllerAs: 'ctrl',
	    scope: {},
	    bindToController: {
	    	currentCategory: '=',
	    	onChangeProductSelected: '&'
	    }/*,
	    link: function(scope, elem, attrs, ctrl) {
	    	scope.$watch('currentCategory', function(newVal, oldVal) {
         		scope.showSteps = false;
         		console.log(newVal, oldVal);
    		}, true);
	    }*/
	}
});