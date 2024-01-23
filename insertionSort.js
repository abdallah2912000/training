function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let nti = arr[i];
    let se = i - 1;
    while (se >= 0 && arr[se] > nti) {
      arr[se + 1] = arr[se];
      se = i - 1;
    }
    arr[se + 1] = nti;
  }
}

console.log(insertionSort([1, 3, 9, 7, 8, 5]));
