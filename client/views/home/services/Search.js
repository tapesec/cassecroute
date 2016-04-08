angular.module('cassecroute')
	
	.factory('HomeSearch', function($q, $state, algolia) {
		
		const client = algolia.Client('PRS3PO0GB2', '70ff404aa7da4a72ace6d2ea89ada561');
	    const index = client.initIndex('getstarted_actors');
	    const Autocomplete = new google.maps.places.AutocompleteService();
	    const Geocoder = new google.maps.Geocoder();

		return {
			
			getSearchPlacesPredictions: _onSearchPlaceKeypress,
			getSearchRecipePredictions: _searchRecepe,
			submit: _searchSubmit

		}

		function _onSearchPlaceKeypress(keypress) {
	    	return _searchPlace(keypress).then(function(res) {
	    		return res;
	    	}, function(err) {
	    		return null;
	    	});
	    };

		function _searchPlace(keypress) {
		
			var deferred = $q.defer();

			Autocomplete.getQueryPredictions(
			    { input: keypress, componentRestrictions: { country: "fr" }, types: ['cities'] }, function(predictions, status) {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					deferred.resolve(predictions);
				} else {
					deferred.reject(status);
				}
			});

			return deferred.promise;
		}

		function _searchRecepe(keypress) {

	    	return index
		    	.search(keypress)
		    	.then(function searchSuccess(content) {
		      		return content.hits;
		    	}, function searchFailure(err) {
		      		return null;
		    	});
	    }

	    function _searchSubmit(recipe, place) {

	    	if (typeof place != "string" && place != null) place = place.description;
	    	if (recipe && 'name' in recipe) recipe = recipe.name;

	    	_geocodeAddress(place).then(function(coords) {
	    		
	    		$state.go('list', { recipe, place: place, lat: coords.lat, lng: coords.lng });
	    	}).catch(function(err) {
	    		return false;
	    	});
			
		}

		function _geocodeAddress(place) {

			var deferred = $q.defer();

		  	Geocoder.geocode({ address: place , region: 'fr' }, function(results, status) {
		    if (status === google.maps.GeocoderStatus.OK) {
		      	
		      	deferred.resolve({
		      		lat: results[0].geometry.location.lat(),
		      		lng: results[0].geometry.location.lng()
		      	});
		    } else {
		    	console.log(status);
		    	deferred.reject(status);
		    }
		  	});
		  	return deferred.promise;
		}
	});