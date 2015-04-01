module.exports.copy = function(obj){
  var newObj = {};
  for (key in obj) {
    newObj[key] = obj[key];
  };
  return newObj;
};

module.exports.extend = function(dest, src){
  for (key in src) {
    dest[key] = src[key];
  }
  return dest;
};

module.exports.hasElems = function(obj, arr){
  var newArr = [];
  var i = arr.length;
  for (key in obj) {
    newArr.push(key);
  };
  while(i--) {
    if (arr[i] !== newArr[i]) return false;
  }
  return true;
};