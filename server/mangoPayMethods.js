/***
* @description procédures de paiement
*
*
MangoPaySDK.production = false;
MangoPaySDK.apiVersion = 'v2';
MangoPaySDK.authenticate('PRS3PO0GB2', 'eh2XascgFBX4eaDrM4d4x9xTOjOhntxyjM8XOjF3Sihw941q40');



/*MangoPaySDK.card.create(new MangoPaySDK.card.Card({
    Currency: 'EUR',
    CardType: MangoPaySDK.card.type.VISA_MASTERCARD,
    UserId: userId,
    CardNumber: 3569990000000140,
    CardExpirationDate: 1016,
    CardCvx: 123
}), function (err, cardRegistration) {
    if (err || !cardRegistration || cardRegistration.Status !== MangoPaySDK.cardRegistraton.status.VALIDATED) {
        console.error(err);
    } else {
        console.log(cardRegistration.CardId);
    }
});*/

class MangopayAPI {

	

	constructor() {
		this.adresse = "https://api.sandbox.mangopay.com";
		this.version = "/v2";
		this.postOauthCredentials(function(error, result) {
			if (error) {
        		throw error;
        	} else {
        		this.oAuthCredential = result.data.access_token;
        		console.log("tokken "+this.oAuthCredential);
        	}
		});
	}

	/***
	* @description récupère un tokken d'authentification
	*/
	postOauthCredentials(cb) {
		HTTP.call("POST", "https://api.sandbox.mangopay.com/v2/oauth/token",
			{ 
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					//'Host': 'example.server.com',
					'Authorization': "Basic bGFzYWxsZTMzOmVoMlhhc2NnRkJYNGVhRHJNNGQ0eDl4VE9qT2hudHh5ak04WE9qRjNTaWh3OTQxcTQw"
				},
				content: "grant_type=client_credentials" 
			},
	        function (error, result) {
	        	cb(error, result);
	        });
	}

	postUserNatural(cb) {
		HTTP.call("POST", "https://api.sandbox.mangopay.com/v2/lasalle33/users/natural", 
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': "Basic bGFzYWxsZTMzOmVoMlhhc2NnRkJYNGVhRHJNNGQ0eDl4VE9qT2hudHh5ak04WE9qRjNTaWh3OTQxcTQw"
				},
				data: {
					"Birthday": 324489753,
			    	"Nationality": "FR",
			    	"CountryOfResidence": "FR",
			    	"Email": "lionel.dupouy@gmail.com",
			    	"FirstName": "Lionnel",
			    	"LastName": "DUPOUY"
				}
			},
			function(error, result) {
				cb(error, result);
				
			}
		);
	}

	createCardRegistration(params, cb) {

		HTTP.call("POST", "https://api.sandbox.mangopay.com/v2/lasalle33/cardregistrations",
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': "Basic bGFzYWxsZTMzOmVoMlhhc2NnRkJYNGVhRHJNNGQ0eDl4VE9qT2hudHh5ak04WE9qRjNTaWh3OTQxcTQw"
				},
				data: {
					UserId: params.data.Id,
					Currency: "EUR",
					CardType: "CB_VISA_MASTERCARD"
				}
			}, 
			function(error, result) {
				cb(error, result);
			}
		);
	}	
}

var mangopay = new MangopayAPI();

Meteor.methods({
	'payIn': function() {

		var postUser = Meteor.wrapAsync(mangopay.postUserNatural);
		var userData = postUser();
		var createCard = Meteor.wrapAsync(mangopay.createCardRegistration);
		var dataToReturn = createCard(userData);

		/*mangopay.postUserNatural(function(error, result) {
			if (error) {
				throw new Meteor.Error("Mangopay-error", error.Type);
			} else {
				mangopay.createCardRegistration(result, function(error, result) {
					console.log(result);
					if (error) {
						throw new Meteor.Error("Mangopay-error", error.Type);	
					} else {
						return result.data;
					};
				});
			}
		});*/
		console.log(dataToReturn);
		return dataToReturn.data;
	}
});


/**/