Meteor.startup(function () {

    if (Product.find().count() === 0) {

        var products = [
        {
            "_id": "JJXsdzHFAzFNhedvN",
            'name': 'Janbon beurre',
            'description': 'Une demi baguette de pain avec 2 tranches de jambon et du beurre avec 3 cornichons',
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'id_etablishment': "SxF8t3m2i8kEBzd2r",
            'id_category': "yeRvzYmZo32Fz8LT9",
            'image': "",
            'removed': false,
            'price': 5,
            'type': 'recipe',
            'quantity': 10,
            'sale_type': 'both'
        },
        {
            "_id": "hodWBZmEQqpyfwNCg",
            'name': 'Poulet crudité',
            'description': 'lorem ipsum si dolor consequor',
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'id_etablishment': "SxF8t3m2i8kEBzd2r",
            'id_category': "yeRvzYmZo32Fz8LT9",
            'image': "",
            'removed': false,
            'price': 6,
            'type': 'recipe',
            'quantity': 12,
            'sale_type': 'both'
        },
        {
            "_id": "uyzgCagcQMenD8vMB",
            'name': 'Thon mayonnaise',
            'description': 'Il était une fois un marchand de foie qui vendait du foie dans la ville de Foix',
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'id_etablishment': "SxF8t3m2i8kEBzd2r",
            'id_category': "yeRvzYmZo32Fz8LT9",
            'image': "",
            'removed': false,
            'price': 7,
            'type': 'recipe',
            'quantity': 10,
            'sale_type': 'both'
        },
        {
            "_id": "aBAesFr4uffStpskh",
            'name': 'Fanta',
            'description': '50 cl',
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'id_etablishment': "SxF8t3m2i8kEBzd2r",
            'id_category': "9ygDztjvsX9SDheJx",
            'image': "",
            'removed': false,
            'price': 2,
            'type': 'drink',
            'quantity': 10,
            'sale_type': 'both'
        },
        {
            "_id": "v3o3fLRjaQTuhXFnh",
            'name': 'Flanc',
            'description': 'Flanc chocolat',
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'id_etablishment': "SxF8t3m2i8kEBzd2r",
            'id_category': "dxgqFjFTsFwRNBqbs",
            'image': "",
            'removed': false,
            'price': 2,
            'type': 'dessert',
            'quantity': 10,
            'sale_type': 'both'
        },
        {
            '_id': "gW8djsTpENBBdfghs",
            'name': 'Menu du midi',
            'description': 'Menu de 500kcal',
            'price': 8,
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'id_category': "QvTiJbdG72jXSZbmz",
            'id_etablishment': "SxF8t3m2i8kEBzd2r",
            'image': "",
            'type': 'meal',
            'sale_type': 'meal',
            'quantity': 10,
            'steps': [{
                "step_name": "Sandwich",
                "products_allowed": [{
                    "_id": "JJXsdzHFAzFNhedvN",
                    'name': 'Janbon beurre',
                    'description': 'Une demi baguette de pain avec 2 tranches de jambon et du beurre avec 3 cornichons',
                    'createdAt': new Date(),
                    'updatedAt': new Date(),
                    'id_etablishment': "SxF8t3m2i8kEBzd2r",
                    'id_category': "yeRvzYmZo32Fz8LT9",
                    'image': "",
                    'removed': false,
                    'price': 5,
                    'type': 'recipe',
                    'quantity': 10,
                    'sale_type': 'both'
                }],
                "nb_products_allowed": 1
            }, {
                "step_name": "Boisson",
                "products_allowed": [{
                    "_id": "aBAesFr4uffStpskh",
                    'name': 'Fanta',
                    'description': '50 cl',
                    'createdAt': new Date(),
                    'updatedAt': new Date(),
                    'id_etablishment': "SxF8t3m2i8kEBzd2r",
                    'id_category': "9ygDztjvsX9SDheJx",
                    'image': "",
                    'removed': false,
                    'price': 2,
                    'type': 'drink',
                    'quantity': 10,
                    'sale_type': 'both'
                }],
                "nb_products_allowed": 1
            }, {
                "step_name": "Dessert",
                "products_allowed": [{
                    "_id": "v3o3fLRjaQTuhXFnh",
                    'name': 'Flanc',
                    'description': 'Flanc chocolat',
                    'createdAt': new Date(),
                    'updatedAt': new Date(),
                    'id_etablishment': "SxF8t3m2i8kEBzd2r",
                    'id_category': "dxgqFjFTsFwRNBqbs",
                    'image': "",
                    'removed': false,
                    'price': 2,
                    'type': 'dessert',
                    'quantity': 10,
                    'sale_type': 'both'
                }],
                "nb_products_allowed": 1
            }],
            'removed': false
        }
        ];
 
        for (var i = 0; i < products.length; i++) {
            Product.insert(products[i]);
        }
    }
});