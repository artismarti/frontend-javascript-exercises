module.exports.getKeys = function(object){
  var arr = [];
  for (key in object) {
    arr.push(key);
  }
  return arr;
};

module.exports.getValues = function(obj){
  var arr = [];
  for (key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};

module.exports.objectToArray = function(object){
  var arr = [];
  for (key in object) {
    arr.push(key + " is " + object[key]);
  }
  return arr;
};