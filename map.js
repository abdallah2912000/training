//First Map
// let map = new Map();

// Map accept any data type as keys and don't convert to string
// map.set(1, "one").set("tow", 2).set({ 1: "one" }, "object");

// console.log(map);
// console.log(map.has(1)); // Return Boolean value

//Map allow you to iterate for keys and values
//Keys by for...of
// for (let key of map.keys()) {
//   console.log(key);
// }
// console.log("#".repeat(20));

//Values/keys by forEach
// map.forEach((v, k) => {
//   console.log(`${k} is a key for ${v}`);
// });

//Values by for...of
// console.log("#".repeat(20));
// for (let value of map.values()) {
//   console.log(value);
// }

//Entries
// console.log("#".repeat(20));
// console.log(map.entries());
// console.log("#".repeat(20));

// for (let [k, v] of map.entries()) {
//   console.log(`${k} has a value ${v}`);
// }
// console.log("#".repeat(20));

//Second WeakMap
// let weakMap = new WeakMap();
// weakMap.set(1, "one");
//return type error cause WeakMap don't accept a primitive data type as a key only object data type.
// let arr = [1, 2];
// let obj = { 1: "one" };
// weakMap.set(arr, "array").set(obj, "object");
// console.log(weakMap);
// console.log(weakMap.has(arr)); // return boolean value

// WeakSet don't support iteration