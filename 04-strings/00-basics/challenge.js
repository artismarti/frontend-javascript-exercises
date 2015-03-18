module.exports.formLetter = function(firstName, senderName, message) {
	return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
	var sub1 = bigString.substring(startA, endA);
	var sub2 = bigString.substring(startB, endB);
	return sub1.concat(sub2);

};

module.exports.findFirstMatch = function(text, searchString) {
	var text = text;
	var searchString = searchString;
	return text.indexOf(searchString);

};

module.exports.findLastMatch = function(text, searchString) {
	var text = text;
	var searchString = searchString;
	return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
	var text = text;
	var searchString = searchString;
	var searchFirstIndexOf = text.indexOf(searchString);
	var searchLastIndexOf = text.lastIndexOf(searchString);
	var textMiddleIndex = searchFirstIndexOf + searchString.length;
	return text.substring(textMiddleIndex, searchLastIndexOf)
};