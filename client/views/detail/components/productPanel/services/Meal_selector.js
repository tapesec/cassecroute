angular.module('cassecroute')

.factory('MealSelector', function MealSelector() {
	
	var currentStep = 0
	,	meal = {}
	, 	nb_products_selected = 0
	,	nb_steps = 0
	,	currentSelection = []
	,	breadcrump = [];

	function pickProductStepByStep() {
        var possibility = {};
        meal.steps.forEach(function(step, i) {
            possibility[i] = step;
        });
        return {
            next: () => {
            	if (nb_steps > currentStep) {
	                nb_products_selected++;
	                var i = currentStep;
	                possibility[i].position = i;
	                if (nb_products_selected == possibility[i].nb_products_allowed) {
	                	currentStep++;
	                	nb_products_selected = 0;
	                	return possibility[i];	
	                } else {
	                	return possibility[i];
	                }
                } else {
                	currentStep++;
                	return null;
                }
            }
        }
    }

	return {
		getNextStep: function() {
			return pickProductStepByStep().next();
		},
		initStep: function(p) {
			meal = p;
			for (let step of meal.steps) {
				breadcrump.push(step.step_name);
			}
			nb_steps = meal.steps.length;
		},
		isSelectionInProgress: function() {
			var inProgress = nb_steps >= currentStep;
			if (inProgress) {
				return true;
			} else {
				currentStep = 0;
				breadcrump = [];
				return false;
			}
		},
		resetSelection: function() {
			currentStep = 0;
			currentSelection = [];
			breadcrump = [];
		},
		addSelection: function(product) {
			currentSelection.push(product);
		},
		getSelection: function() {
			var meal_composition = currentSelection;
			meal.composition = meal_composition;
			currentSelection = [];
			return meal;
		},
		getStepsNames: function() {
			return breadcrump;
		}

	}
});