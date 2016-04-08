angular.module('cassecroute', [
               'angular-meteor', 
               'ui.router', 
               'uiGmapgoogle-maps', 
               'algoliasearch', 
               'ui.bootstrap']);

angular.module('cassecroute')
.config(function ($urlRouterProvider, $stateProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
    
    $locationProvider.html5Mode(true);
    
    // les routes de l'application
    $stateProvider
    	.state('home', {
    		url: '/',
    		templateUrl: "client/views/home/home.html",
    		controller: "homeCtrl",
    		controllerAs: "home"
    	})

      	.state('list', {
      		url: '/list/:recipe/:place/:lat/:lng',
      		template: "<list-view></list-view>",
            resolve: {
                result: function ($q, $stateParams) {
                    var deferred = $q.defer();
   
                    var coords = [{ lat: $stateParams.lat, lng: $stateParams.lng }];

                    Meteor.subscribe('geoNearEtablishments', coords, {
                        onReady: deferred.resolve,
                        onStop: deferred.reject
                    });
     
                    return deferred.promise;
                }
      	    }
        })

      	.state('detail', {
        	url: '/detail/:etablishmentId',
        	template: "<detail></detail>",
            resolve: {
                etablishment: function($q, $stateParams) {
                    var deferred = $q.defer();

                    var id_etablishment = [{ id_etablishment: $stateParams.etablishmentId }];
                    
                    Meteor.subscribe('etablishmentById', id_etablishment, {
                        onReady: deferred.resolve,
                        onStop: deferred.reject
                    });

                    return deferred.promise;
                }
            }
      	})

        .state('validation', {
            url: '/validation/:etablishmentId',
            template: '<validation></validation>',
            resolve: {
                summary: function($stateParams, Cart) {
                    //console.log(Cart.isEmpty($stateParams.etablishmentId));
                    return Cart.isEmpty($stateParams.etablishmentId);
                }
            }
        });
 
    $urlRouterProvider.otherwise("/");

    // intitalisation des API google
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCfkUQ0fCBFihBXYSEChSWMm6NJgNZR-3g',
        v: '3.24', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});