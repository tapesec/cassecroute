angular.module('cassecroute')

.controller('listSearchResultCtrl', function ($scope, $reactive, Utils, $stateParams, $state) {

	$reactive(this).attach($scope);
	var vm = this;

	vm.formatDistances = Utils.formatDistances;
	vm.order = _order;

	vm.helpers({

	  	'etablishments': () => {
	    	return Etablishment.find({
	    		removed: false
	    	});
	  	}
	});

	function _order(id) {
		$state.go('detail', { etablishmentId: id });
	}
});