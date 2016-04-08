Meteor.startup(function () {

    /*if (Etablishment.find().count() === 0) {
        Etablishment._ensureIndex({'location.coordinates':'2dsphere'});
        var etablishments = [
        {
            'name': 'Le 48',
            'description': 'Le 48 Merignac vous accueil de 8h à 18h du lundi au samedi sans interuption',
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'address': "2 rue Maurice Levy",
            'location': {
                'type': 'Point',
                'coordinates': [44.8465219,-0.721318999999994]
            },
            'logo': "",
            'removed': false
        },
        {
            'name': 'Chez Paul',
            'description': 'Les meilleurs sandwich sont cuisinés chez Paul',
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'address': "4 rue Paoquelin Molière",
            'location': {
                'type': 'Point',
                'coordinates': [44.846808, -0.721228]
            },
            'logo': "",
            'removed': false
        }
        ];
 
        for (var i = 0; i < etablishments.length; i++) {
            Etablishment.insert(etablishments[i]);
        }
    }*/
});