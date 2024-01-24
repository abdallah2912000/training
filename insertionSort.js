// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let insertNumber = arr[i];
//     let sortNumber = i - 1;
//     while (sortNumber >= 0 && arr[sortNumber] > insertNumber) {
//       arr[sortNumber + 1] = arr[sortNumber];
//       sortNumber = sortNumber - 1;
//     }
//     arr[sortNumber + 1] = insertNumber;
//   }
//   return arr;
// }

// Big-O = O(n^2)-Quadratic   cause nested loob

// console.log(insertionSort([-3, -5, 10, -1, 0, 5, 3]));
