angular.module('cassecroute')


.factory('Cart', cart);



/***
* @description le panier de l'acheteur
*/
function cart($q) {

	return {
		load: load,
		persist: persist,
		getTotalPrice: getTotalPrice,
		isEmpty: isEmpty
	};

	function load(id_etablishment) {
		Session.setDefault(id_etablishment, {});
		return Session.get(id_etablishment);
	}

	function persist(key, value) {
		Session.setPersistent(key, value);
	}

	function getTotalPrice(key) {
		var price = 0;
		for (let attr in Session.get(key)) {
			price += (Session.get(key)[attr].price * Session.get(key)[attr].nb_selected);
		}
		return price;
	}

	function isEmpty(id_etablishment) {
		var deferred = $q.defer();
		if (Session.get(id_etablishment)) {
			deferred.resolve({});
		} else {
			deferred.reject('Cart is empty !');
		}
		return deferred.promise;

	}
}