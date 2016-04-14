angular.module('cassecroute')


.controller('paymentFormCtrl', function($scope, $reactive) {

	$reactive(this).attach($scope);
	var vm = this;

	vm.payIn = payIn;
	
	function payIn() {
		Meteor.call('payIn', function(a,b) {
			console.log(a,b);
		});	
	}
});