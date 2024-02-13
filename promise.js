// let isShopOpen = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject();
//     }
//   });
// };

// order(2000, () => console.log(`Strawberray was selcted.`))
//   .then(() => {
//     return order(0, () => console.log(`Production has started.`));
//   })
//   .then(() => {
//     return order(2000, () => console.log(`The fruit was chopped.`));
//   })
//   .then(() => {
//     return order(1000, () => console.log(`The Machine is started.`));
//   })
//   .then(() => {
//     return order(2000, () => console.log(`Holder was selected.`));
//   })
//   .then(() => {
//     return order(3000, () => console.log(`Choclate was selected.`));
//   })
//   .then(() => {
//     return order(2000, () => console.log(`Ice cream was served.`));
//   })
//   .catch(() => console.log("Our Shop is close."))
//   .finally(() => console.log("The Cusuomer is left."))
