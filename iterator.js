let arr = [1, 2, 3, 4, 5];

// function makeIter(a) {
//   let init = 0;
//   return {
//     next: () => {
//       if (init > a.length - 1) return { value: undefined, done: true };
//       return { value: arr[init++], done: false };
//     },
//   };
// }

// let myArr = makeIter(arr);
// console.log(myArr.next().value);

// let myArr2 = arr[Symbol.iterator]();
// myArr2.next();
// console.log(myArr2.next());

// let iter = arr[Symbol.iterator]();
// let next = iter.next();
// let num = next.value;
// while (!next.done) {
//   console.log(num);
//   next = iter.next();
//   num = next.value;
// }
