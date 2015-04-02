module.exports.stream = function(conditionalFn, actionFn){
  while(conditionalFn()) actionFn();
};

module.exports.sumNumbers = function(arr){
  var sumArray = 0;
  var arrLen = arr.length;
  while(arrLen--){
    sumArray = sumArray + arr[arrLen];
  }
  return sumArray;
};

