angular.module('cassecroute')

.controller('shoppingCartCtrl', function($scope, $reactive, $state, Cart, $stateParams) {
	
	$reactive(this).attach($scope);

	var vm = this;
	vm.cartItems = Cart.load($stateParams.etablishmentId);
	vm.cartIsEmpty = cartIsEmpty;
	vm.removeProduct = removeProduct;
	vm.totalPrice = Cart.getTotalPrice($stateParams.etablishmentId);
	vm.purchasseOrder = purchasseOrder;

	$scope.$watch(function() { return vm.cart; }, function(newVal, oldVal) {
		if (newVal) {
			var product = angular.copy(newVal);
			if (vm.cartItems[product._id]) {
				vm.cartItems[product._id].nb_selected++;
			} else {
				product.nb_selected = 1;
				vm.cartItems[product._id] = product;
			}
			Cart.persist($stateParams.etablishmentId, vm.cartItems);
			vm.totalPrice = Cart.getTotalPrice($stateParams.etablishmentId);
		}
	}, true);

	function cartIsEmpty(cart) {
		return _.isEmpty(cart);
	}

	function removeProduct(product) {

	}

	function purchasseOrder() {
		$state.go('validation', { etablishmentId: $stateParams.etablishmentId });
	}


});