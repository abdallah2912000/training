// function binarySearch(arr, e) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   while (leftIndex <= rightIndex) {
//     let middIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (e === arr[middIndex]) {
//       return middIndex;
//     }
//     if (e < arr[middIndex]) {
//       rightIndex = middIndex - 1;
//     } else {
//       leftIndex = middIndex + 1;
//     }
//   }
//   return -1;
// }

// Big-O = O(logn)-Logrithmic  cause the input size redusces by half every every iteration

// Arrays must be sorted
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 1));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, -5, 9, 0, 25], 25));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 30));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 2));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, -5, 9, 0, 25], -5)); //Invalid Array
