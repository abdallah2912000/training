// function mergeSort(arr) {
//   if (arr.length < 2) return arr;
//   let midd = Math.floor(arr.length / 2);
//   let leftArr = arr.slice(0, midd);
//   let rightArr = arr.slice(midd);
//   return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// function merge(leftArr, rightArr) {
//   const sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     leftArr[0] <= rightArr[0]
//       ? sortedArr.push(leftArr.shift())
//       : sortedArr.push(rightArr.shift());
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// }

//Big-O = O(nlogn)-Logrithmic

// console.log(mergeSort([1, 6, 3, 8, 2, 0, 4, -4, -10, 5, 7]));
