module.exports.newArray = function(a,b,c,d){
  var newArray = [a,b,c,d];
  return newArray;
};

module.exports.firstAndLast = function(array){
  var lastElementIndex = array.length - 1;
  var newArray = [array[0], array[lastElementIndex]];
  return newArray;
};