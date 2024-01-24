// function quickSort(arr) {
//   if (arr.length < 2) return arr;
//   let pivot = arr[arr.length - 1];
//   let right = [];
//   let left = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

//Big-O = O(n^2)-Quqdratic   if array is already sorted (Worst case)
//Big-O = O(nlogn)-Logratamtic   (Avg case)

// console.log(quickSort([1, 4, 3, 6, 9, 2, 10, 0, -5, -3, -10]));
