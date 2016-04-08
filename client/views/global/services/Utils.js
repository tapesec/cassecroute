angular.module('cassecroute')

.factory('Utils', function() {
	
	return {
		formatDistances: _formatDistances
	}


	function _formatDistances(distance) {

		if (distance < 1000) return `à ${Math.floor(distance)} mètres`;
		else return `à ${ (distance / 1000).toFixed(2) } kilomètres`;
	}
});