Product = new Mongo.Collection("products");

if (Meteor.isServer) {

	Meteor.publish("productsByCategory", function (arg) {
		console.log(arg, 'cat id');
		return Product.find({ id_category: arg.id_category });
	});

	Meteor.methods({
		'getProductsByStep': (ids) => {
			return Product.find({ _id:  { $in: ids } }).fetch();
		}
	});
}

