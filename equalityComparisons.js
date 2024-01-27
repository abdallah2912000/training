// let c = null;
// let e = null;
// let d = undefined;
// let q;
// let s = new String("1");
// let v = new Number(1);
// let nan = NaN;
// let notNumber = parseInt("abdo");

// console.log(1 == "1");
// //Return true because the operator == does the type conversion of the operands before comparison.
// console.log(1 === "1");
// // Return false because the === operator compares the values and the data types of the operands.
// console.log(Object.is(1, "1"));
// // Return false because the Object.is compare values without coerce either value.
// console.log("#".repeat(20));
// console.log(c == e); // null - Return true
// console.log(c === e); //null - Return true
// console.log(Object.is(c, e)); //null - Return true
// console.log("#".repeat(20));
// console.log(d == q); //undefined - Return true
// console.log(d === q); // undefined - Return true
// console.log(Object.is(d, q)); // undefined - Return true
// console.log("#".repeat(20));
// console.log(s == "1");
// //Return true because the operator == does the type conversion of the operands before comparison.
// console.log(s === "1");
// // Return false because the === operator compares the values and the data types of the operands,and New String is object data type.
// console.log(Object.is(s, "1"));
// // Return false because the Object.is compare values without coerce either value,and New String is object data type.
// console.log("#".repeat(20));
// console.log(s == 1);
// //Return true because the operator == does the type conversion of the operands before comparison.
// console.log(s === 1);
// // Return false because the === operator compares the values and the data types of the operands,and New String is object data type.
// console.log(Object.is(s, 1));
// // Return false because the Object.is compare values without coerce either value,and New String is object data type.
// console.log("#".repeat(20));
// console.log(-0 == +0); //Return true because -0 and +0 are treated as the same value.
// console.log(-0 === +0); //Return true because -0 and +0 are treated as the same value.
// console.log(Object.is(-0, +0)); //Return false in Object,is() shuld both are +0 or -0
// console.log("#".repeat(20));
// console.log(nan == notNumber); //return false
// console.log(nan === notNumber); //return false
// console.log(Object.is(nan, notNumber)); //return true
// console.log("#".repeat(20));
// console.log("" == false);
// //Return true because the operator == does the type conversion of the operands before comparison.
// console.log("" === false);
// // Return false because the === operator compares the values and the data types of the operands.
// console.log(Object.is("", false));
// // Return false because the Object.is compare values without coerce either value.
