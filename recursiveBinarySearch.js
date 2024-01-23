// function recursiveBinary(arr, e) {
//   return search(arr, e, 0, arr.length - 1);
// }

// function search(arr, e, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) return -1;
//   let middIndex = Math.floor((leftIndex + rightIndex) / 2);
//   if (e === arr[middIndex]) return middIndex;
//   return e < arr[middIndex]
//     ? search(arr, e, leftIndex, middIndex - 1)
//     : search(arr, e, middIndex + 1, rightIndex);
// }

//  Big-O = O(logn)-Logrithmic  cause the input size redusces by half every every iteration

// console.log(recursiveBinary([1, 2, 3, 4, 5, 6, 7], 5));
// console.log(recursiveBinary([1, 2, 3, 4, 5, 6, 7, -5, 9, 0, 25], 25));
// console.log(recursiveBinary([1, 2, 3, 4, 5, 6, 7], 30));
// console.log(recursiveBinary([1, 2, 3, 4, 5, 6, 7], 2));
// console.log(recursiveBinary([1, 2, 3, 4, 5, 6, 7, -5, 9, 0, 25], -5)); // return -1 cause array not sorted
