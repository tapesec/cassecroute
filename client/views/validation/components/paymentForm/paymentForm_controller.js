angular.module('cassecroute')


.controller('paymentFormCtrl', function($scope, $reactive, MangopayCardRegistration) {

	$reactive(this).attach($scope);
	var vm = this;

	vm.payIn = payIn;
	vm.testData = {};

	MangopayCardRegistration.cardRegistration.baseURL = "https://api.sandbox.mangopay.com";
	MangopayCardRegistration.cardRegistration.clientId = "lasalle33";
	
	function payIn() {
		Meteor.call('payIn', function(error, result) {
			if (error) {
				console.log(error);
			} else {
				console.log(result);
				vm.testData = result;
				vm.formData = {};

				console.log(result);

				MangopayCardRegistration.cardRegistration.init({
				    cardRegistrationURL: result.CardRegistrationURL, 
				    preregistrationData: result.PreregistrationData, 
				    accessKey: result.AccessKey,
				    Id: result.Id
				});

				// Card data collected from the user
				var cardData = {
				     cardNumber: vm.formData.number, 
				     cardExpirationDate: vm.formData.expire, 
				     cardCvx: vm.formData.csc,
				     cardType: "CB_VISA_MASTERCARD"
				};


				// Register card
				MangopayCardRegistration.cardRegistration.registerCard(
				    cardData, 
				    function(res) {
				        // Success, you can use res.CardId now that points to registered card
				        console.log('success', res);
				    },
				    function(res) {
				        // Handle error, see res.ResultCode and res.ResultMessage
				        console.log(res, 'error');
				    }
				);



			}
		});
	}
});