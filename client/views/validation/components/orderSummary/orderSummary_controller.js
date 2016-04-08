angular.module('cassecroute')


.controller('orderSummaryCtrl', function($scope, $reactive, $stateParams, Cart) {
	$reactive(this).attach($scope);
	var vm = this;
	vm.recalculPrice = recalculPrice;

	vm.orderSummary = Cart.load($stateParams.etablishmentId);
	vm.totalPrice = Cart.getTotalPrice($stateParams.etablishmentId);

	function recalculPrice() {
		Cart.persist($stateParams.etablishmentId, vm.orderSummary);
		vm.totalPrice = Cart.getTotalPrice($stateParams.etablishmentId);
	}
});