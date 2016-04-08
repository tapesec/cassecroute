angular.module('cassecroute')

.controller('detailCtrl', function($scope, $reactive, $state) {
	
	$reactive(this).attach($scope);
	
	var vm = this;
	vm.goSearchList = goSearchList;
	vm.setCurrentCategory = setCurrentCategory;
	vm.fillCart = fillCart;
	vm.currentCategory = "";
	vm.cart = null;

	vm.helpers({

	  	'etablishment': () => {
	    	return Etablishment.findOne({
	    		removed: false
	    	});
	  	}
	});


	function setCurrentCategory(cat, apply) {

		if (apply) {
			$scope.$apply(function() {
				vm.currentCategory = cat;
			});	
		} else {
			vm.currentCategory = cat;
		}
		
	}

	function fillCart(product) {
		vm.cart = product;
	}

	function goSearchList() {
		$state.go('list');
	}
	
	
});