module.exports.sumNumbers = function(numbers){
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  };
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString){
  inputString = inputString.toLowerCase();
  inputString = inputString.split(',');
  return inputString;
};

module.exports.addIndex = function(input){
  var output = new Array();
  for (var i = 0; i < input.length; i++) {
    output.push(i + " is " + input[i]);
  }
  return output;
};

