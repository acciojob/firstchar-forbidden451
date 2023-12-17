function firstChar(text) {
  // your code here
	if(text == '' || text == ' ') 
		return '';
	// else if(text == ' ')
	// 	return '';
	else if(text.length > 0){
		text = text.trim();
		return text[0];
	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));  
