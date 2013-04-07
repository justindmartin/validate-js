/*!
 * validate-js
 * http://github.com/justindmartin1/validate-js
 *
 * Copyright 2013 Justin Martin
 * Released under the MIT license
 * http://github.com/justindmartin1/validate-js/blob/master/LICENSE.md
 */

var validate = {
	email: function(emailAddress){
		var regex = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
		return regex.test(emailAddress);
	},
	ISBN: function(ISBN){

		/*if(ISBN.length != 10 && ISBN.length != 13){
			return false;
		}*/

		var ISBNArray = ISBN.split('');
		var ISBNCheckDigit = 0;
		console.log(ISBNArray[ISBNArray.length-1]);
		for(var i = 1; i < ISBNArray.length; i++){
			ISBNArray[i-1] = parseInt(ISBNArray[i-1]);
			if(i % 2 == 0){
				ISBNCheckDigit += ISBNArray[i-1] * 3;
			}else{
				ISBNCheckDigit += ISBNArray[i-1];
			}
		}
		ISBNArray[ISBNArray.length-1] = parseInt(ISBNArray[ISBNArray.length-1]);
		ISBNCheckDigit = ISBNCheckDigit % 10;
		if(ISBNCheckDigit != 0 && ISBNArray[ISBNArray.length-1] == 'X'){
			ISBNCheckDigit = 'X';
		}else if(ISBNCheckDigit != 0){
			ISBNCheckDigit = 10 - ISBNCheckDigit;
		}
		
		//is valid?
		if(ISBNCheckDigit == ISBNArray[ISBNArray.length-1]){
			return true;
		}else{
			return false;
		}
	},
	phoneNumber: function(phoneNumber){
		//only validates United States phone numbers

		//remove all non numeric characters
		phoneNumber = phoneNumber.replace(/\D/g,'');

		//if phoneNumber is correct length
		if(phoneNumber.length == 7 || phoneNumber.length == 10 || phoneNumber.length == 11){
			if(phoneNumber.length == 11){
				phoneNumber = phoneNumber.substr(1,10);
			}
			if(parseInt(phoneNumber.substr(0,1)) < 2){
				return false;
			}else{
				return true;
			}
		}else{
			return false;
		}
	},
	URL: function(URL){
		var regex = new RegExp(/^((ht|f)tps?\:\/\/)?[a-zA-Z]{1}([\w\-]+\.)+([\w]{2,5})/i);
		return regex.test(URL);
	}
};
