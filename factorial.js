/* 
    In mathmemtics, the factorial of a non-negtative integer "n" denoted n!,
    is the product of all positive integer less than or equal "n".
    ex: factorial(4) = 4*3*2*1 = 24
    ex: factorial(5) = 5*4*3*2*1 = 120
*/

// My solution
// const factorial = (n) => {
//   if (n === 1 || n === 0) return 1;    //Big-O = O(n)-Linear
//   return n * factorial(n - 1);
// };

// Not My solution

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {      //Big-O = O(n)-Linear
//     result = result * i;
//   }
//   return result;
// }

// console.log(factorial(4));
