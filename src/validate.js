var validate = {
	ISBN13: function(ISBN){
		var ISBNArray = ISBN.split('');
		var ISBNCheckDigit = 0;
		for(var i = 1; i < 13; i++){
			ISBNArray[i-1] = parseInt(ISBNArray[i-1]);
			if(i % 2 == 0){
				ISBNCheckDigit += ISBNArray[i-1] * 3;
			}else{
				ISBNCheckDigit += ISBNArray[i-1];
			}
		}
		ISBNArray[12] = parseInt(ISBNArray[12]);
		ISBNCheckDigit = ISBNCheckDigit % 10;
		if(ISBNCheckDigit != 0){
			ISBNCheckDigit = 10 - ISBNCheckDigit;
		}
		
		//is valid?
		if(ISBNCheckDigit == ISBNArray[12]){
			return true;
		}else{
			return false;
		}
	}
};
