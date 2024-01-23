// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let smallNum = arr[i + 1];
//         arr[i + 1] = arr[i];
//         arr[i] = smallNum;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// }

// Big-O = O(n^2)-Quadratic cause there's nested loob

// console.log(bubbleSort([9, 8, 11, -5, -2, -10, 0, 4, 10, 13]));
