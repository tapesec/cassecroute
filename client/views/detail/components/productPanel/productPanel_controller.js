angular.module('cassecroute')

.controller('productPanelCtrl', function($scope, $reactive, MealSelector) {
	$reactive(this).attach($scope);
	
    var vm = this; 
    vm.startChoice = startChoice;
    vm.pickProduct = pickProduct;
    vm.fillCart = fillCart;
    vm.showSteps = false;
    vm.currentCategory = {};


    $scope.$watch(function() { 
        return vm.currentCategory; 
    }, function(newVal, oldVal) {
        
        vm.showSteps = false;
        MealSelector.resetSelection();
    }, true);

    

    vm.helpers({
        'products': () => {
            return Product.find({
                removed: false
            });
        }
    });

    vm.subscribe('productsByCategory', () => {
    	return [{ id_category: vm.getReactively('currentCategory._id', true) }];
    }, 
    {
        onReady: function () {
            
    	},
        onStop: function () {

    	}
    });

    function pickProduct(product) {
        if ('steps' in product) {
            MealSelector.initStep(product);
            vm.breadcrump = MealSelector.getStepsNames();
            vm.showSteps = MealSelector.isSelectionInProgress();
            vm.currentStep = MealSelector.getNextStep();
        } else {
            // start to fill the  basket
            vm.fillCart(product);
        }
    }   

    function startChoice(product) {
        
        if (vm.showSteps) {
            MealSelector.addSelection(product);
            vm.currentStep = MealSelector.getNextStep();
            if (vm.currentStep == null) {
                vm.fillCart(MealSelector.getSelection());
            }
            vm.showSteps = MealSelector.isSelectionInProgress();
        } 
    }

    function fillCart(product) {
        var product = angular.copy(product);
        product.selectedTime = new Date().getTime();
        vm.onChangeProductSelected({ product: product });
    }

                 
});