angular.module('cassecroute')

.controller('mapAreaCtrl', function ($scope, $reactive, Utils, $stateParams, uiGmapGoogleMapApi) {

	$reactive(this).attach($scope);
	var vm = this;

	uiGmapGoogleMapApi.then(function(maps) {

		vm.gmap = {
			position: { 
				latitude: $stateParams.lat, 
				longitude: $stateParams.lng
			},
			zoom: 12,
			dragging: true,
			refresh: true,
			options: {
				scrollwheel: false
			}
		}

		vm.helpers({

	  		'etablishments': () => {
	    		return Etablishment.find({
	    			removed: false
	    		});
	  		}
		});
    });
});