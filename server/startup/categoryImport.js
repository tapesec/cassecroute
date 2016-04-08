Meteor.startup(function () {

    if (Category.find().count() === 0) {

        var categories = [
        {
            "_id": "yeRvzYmZo32Fz8LT9",
            'name': 'Pains baguette',
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'id_etablishment': "SxF8t3m2i8kEBzd2r",
            'image': "",
            'removed': false
        },
        {
            "_id": "dxgqFjFTsFwRNBqbs",
            'name': 'Dessert',
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'id_etablishment': "SxF8t3m2i8kEBzd2r",
            'image': "",
            'removed': false
        },
        {
            "_id": "9ygDztjvsX9SDheJx",
            'name': 'Boissons',
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'id_etablishment': "SxF8t3m2i8kEBzd2r",
            'image': "",
            'removed': false
        },
        {
            "_id": "QvTiJbdG72jXSZbmz",
            'name': 'Menus',
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'id_etablishment': "SxF8t3m2i8kEBzd2r",
            'image': "",
            'removed': false  
        }
        ];
 
        for (var i = 0; i < categories.length; i++) {
            Category.insert(categories[i]);
        }
    }
});