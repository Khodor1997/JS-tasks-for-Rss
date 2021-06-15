module.exports = function check(str, bracketsConfig) {
  var arr = str.split('');
  openBr = [];
  closeBr = [];

  for(let j = 0; j < bracketsConfig.length; j++) {
      bracketsConfig.forEach(function(element) {
      openBr.push(element[0]);
      closeBr.push(element[1]);
  });
 }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < openBr.length; j++) {
      if (arr[i] === openBr[j] && arr[i + 1] === closeBr[j]) {
        arr.splice(i,2);
        i = -1;
      }
    }
  }
  if(arr.length == 0){
    return true;
  }
  else{
    return false;
  }
}

