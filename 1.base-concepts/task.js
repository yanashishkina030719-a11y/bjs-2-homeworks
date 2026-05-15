"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {

  }
  else if (discriminant === 0) {
      arr.push(-b / (2 * a));
  }
  if (discriminant > 0) {
      let sqrtD = Math.sqrt(discriminant);
      arr.push((-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a));
  }
  return arr;

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
    let S = amount - contribution;
    
    if (S <= 0) {
        return 0;
    }
    
    let monthlyPayment = S * (P + (P / (Math.pow(1 + P, countMonths) - 1)));
    let totalPayment = monthlyPayment * countMonths;
    
    return Math.round(totalPayment * 100) / 100;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));    
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); 
console.log(calculateTotalMortgage(10, 0, 20000, 24));  
console.log(calculateTotalMortgage(10, 20000, 50000, 12)); 
console.log(calculateTotalMortgage(15, 0, 10000, 36));  
}
