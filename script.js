function firstChar(text) {
  // your code here
	if(text.length == 0 || text == ' ')
		return text[1];
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
