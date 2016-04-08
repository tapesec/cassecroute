Category = new Mongo.Collection("categories");

if (Meteor.isServer) {

	Meteor.publish("categoriesItemsList", function (args) {
		console.log(args);
		return Category.find({ 'id_etablishment': args.id_etablishment });
	});

	Meteor.methods({
		'getCategories': (id_etablishment) => {
			return Category.find({ 'id_etablishment': id_etablishment }).fetch();
		}
	});
}

