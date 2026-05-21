"use strict";

// Задача 1
function solveEquation(a, b, c) {
    let arr = [];
    let discriminant = b ** 2 - 4 * a * c;
    
    if (discriminant < 0) {
    } else if (discriminant === 0) {
        arr.push(-b / (2 * a));
    } else if (discriminant > 0) {
        let sqrtD = Math.sqrt(discriminant);
        arr.push((-b + sqrtD) / (2 * a));
        arr.push((-b - sqrtD) / (2 * a));
    }
    
    return arr;
}

// Задача 2
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

console.log(solveEquation(1, -3, 2));  // [2, 1]
console.log(calculateTotalMortgage(10, 0, 50000, 12));    // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24));    // 22149.56
console.log(calculateTotalMortgage(10, 20000, 50000, 12)); // 0
console.log(calculateTotalMortgage(15, 0, 10000, 36));     // 12479.52