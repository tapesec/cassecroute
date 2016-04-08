Etablishment = new Mongo.Collection("etablishments");

if (Meteor.isServer) {
	

	Meteor.publish("geoNearEtablishments", function (coords) {
		console.log(coords, 'coords');
		var pipeline = [
			{
				$geoNear: {
					near: {type: 'Point', coordinates: [parseFloat(coords[0].lat), parseFloat(coords[0].lng)]},
					distanceField: 'dist.calculated',
					maxDistance: 10000,
					includeLocs: 'dist.location',
					spherical: true,
					limit: 1000
				}
			}
		];


	  	ReactiveAggregate(this, Etablishment, pipeline);
	});

	Meteor.publish("etablishmentById", function (param) {

		return Etablishment.find({ _id: param[0].id_etablishment });
	});

}

