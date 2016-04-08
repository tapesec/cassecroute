angular.module('cassecroute')

.directive('shoppingCart', function() {
	return {
		restrict: 'E',
	    templateUrl: 'client/views/detail/components/shoppingCart/shopping_cart.html',
	    controller: 'shoppingCartCtrl',
	    controllerAs: 'ctrl',
	    scope: {},
	    bindToController: {
	    	cart: '='
	    }
	}
});