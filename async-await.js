// let isShopOpen = true;

// let check = (time) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(resolve, time);
//     } else {
//       reject();
//     }
//   });
// };

// async function order() {
//   try {
//     await check(2000);
//     console.log(`Strawberray was selcted.`);
//     await check(0);
//     console.log(`Production has started.`);
//     await check(2000);
//     console.log(`The fruit was chopped.`);
//     await check(1000);
//     console.log(`The Machine is started.`);
//     await check(2000);
//     console.log(`Holder was selected.`);
//     await check(3000);
//     console.log(`Choclate was selected.`);
//     await check(2000);
//     console.log(`Ice cream was served.`);
//   } catch (error) {
//     console.log("Our Shop is close.");
//   } finally {
//     console.log("The Cusuomer is left.");
//   }
// }

// order();
