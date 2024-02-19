// function* seq() {
//   for (let i = 0; true; i++) {
//     yield i;
//   }
// }
// let val = seq();
// // val.next();
// console.log(val.next().value);

function* gen() {
  var arr = [1, 2, 3];
  yield* arr;
}

let a = gen();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
