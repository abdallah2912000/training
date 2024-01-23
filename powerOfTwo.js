// function isPowerOfTwo(e) {
//   for (let i = 0; i < e; i++) {
//     if ((e / 2) % 2 === 0) {
//       return true;
//     }
//     return e === 2 || e === 1 ? true : false;
//   }
// }    Big-O = O(logn)-Logrithmic

// function isPowerOfTwo(e) {
//   return (e & (e - 1)) === 0
//     ? `${e} is a power of two`
//     : `${e} is not a power of two`;
// }       // Big-O = O(1)-Constant

// console.log(isPowerOfTwo(3));
// console.log(isPowerOfTwo(4));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(9));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(16));
