angular.module('cassecroute')

.controller('categoriesItemsCtrl', function($scope, $reactive, $stateParams, $timeout) {
	$reactive(this).attach($scope);
	var vm = this;
    vm.selectThisCat = selectThisCat;

    /*$timeout(function() {
        var cat = Category.find({ removed: false }).fetch();
            vm.selectThisCat(cat[0]);
        }, 100);*/

    var id_etablishment = [{ id_etablishment: $stateParams.etablishmentId }];
    
    /*vm.helpers({
        'categories': () => {
            var cats = Category.find({
                removed: false
            });

            vm.selectThisCat(cats.fetch()[0]);

            return cats;
        }
    });*/

    vm.call('getCategories', $stateParams.etablishmentId, (err, result) => {
        vm.categories = result;
        vm.selectThisCat(result[0], true);
    });


    /*vm.subscribe('categoriesItemsList', () => {
    	return id_etablishment; 
    }, {
        onReady: function () {
            console.log('ok')
        },
        onStop: function () {

        }
    });*/

    function selectThisCat(cat, apply) {
        var cat = angular.copy(cat);
        if (apply) {
            vm.onChangeCategorySelected({ cat, apply: true });
        } else {
            vm.onChangeCategorySelected({ cat: cat });  
        }
    }



});