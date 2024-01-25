//First Set

// let arr = [1, 2, 3, 4, 5, 5, 1, 2, 3];
// let set = new Set(arr); //Set will guard against duplicate values

// console.log(set);
// console.log("#".repeat(20));
// set.forEach((e) => {
//   console.log(e); // set support iterations
// });
// console.log("#".repeat(20));
// set.add("10"); //can add eny data type in set
// console.log(set.size); //return number of element in set
// // console.log(set.entries());
// console.log(set.has(2)); //return boolean value
// set.delete(1);
// console.log(set); //deleting in set is easy
// let a = set.clear(); //clear remove all values from set
// console.log(set); // return set without entries
// console.log(a); //return undefined

//Second WeakSet

// let arr = [1, 2, 3, 4, 5, 5, 1, 2, 3];
// let obj = { 1: "one" };

// let weakSet = new WeakSet([arr, arr, obj, { 2: "mmd" }]);
// // WaekSet accept non-primitive data type only and like set will guard against duplicate values

// console.log(weakSet);
// console.log("#".repeat(20));
// console.log(weakSet.has(arr)); //return boolean value
// console.log("#".repeat(20));
// weakSet.delete(arr); // Deleting is easy like set
// console.log(weakSet);
// console.log("#".repeat(20));

// Weak Set don't allow iteration
