module.exports = function zeros(expression) {
  // your solution
  let oneFactorial = [];
  let twoFactorial = [];
  let fives = 0;
  let twos = 0;
  let Str = expression.split('*');
  // expression.split('*').map(Str => Str.endsWith('!!') ? twoStepFactorial.push(Str.slice(0, -2)) : oneStepFactorial.push(Str.slice(0, -1)));
  

  Str.map(function(Str){
    if(Str.endsWith('!!')){
      twoFactorial.push(Str.slice(0, -2));
    }else{
      oneFactorial.push(Str.slice(0, -1));
    }
  })

  function zeros(num, step) {     
    for (num; num > 0; num -= step) {      
      let base = 5;
      while (base <= num) {
        if (num % base === 0) {
          fives++;
        }
        base *= 5;
      }   
      if (num % 2 === 0) twos++; 
    }     
  }  

  oneFactorial.forEach(num => zeros(num, 1));
  twoFactorial.forEach(num => zeros(num, 2));
  
  return Math.min(twos,fives);
}

