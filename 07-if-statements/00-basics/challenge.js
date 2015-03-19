module.exports.favoriteNumber = function(favoriteNumber, guess){
  if (guess > favoriteNumber) {
    return "Too high"
  } else if (guess < favoriteNumber){
    return "Too low";
  } else {
    return "You got it!";
  }
};

module.exports.checkLock = function(first,second,third,fourth){
  if ((first == 3 || first == 5 || first == 7) && (second == 2) && (third >= 5 && third <= 100) && (fourth < 9 || fourth > 20)){
    return "correct";
  }  else
    return "incorrect";
};

module.exports.canIGet = function(item, money){
  if ((money >= 999 && money < 1299) && (item == "MacBook Air")){
    return true;
  } else if ((money >= 1299 && money < 2499) && (item == "MacBook Pro")){
    return true;
  } else if ((money >= 2499) && (item == "Mac Pro")){
    return true;
  } else if ((money >= 1) && (item == "Apple Sticker")){
    return true
  } else {
    return false;
  }
};