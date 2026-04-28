//Mirrored Right Triangle Pattern
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n - i; j++) {
//         str += "  "; // Two spaces for better alignment
//     }
//     for (let k = 1; k <= i; k++) {
//         str += "* ";
//     }
//     console.log(str);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n - i; j++) {
//         str += " "; // Two spaces for better alignment
//     }
//     for (let k = 1; k <= i; k++) {
//         str += "* ";
//     }
//     console.log(str);
// }

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <=n - i; j++) {
    str += " ";
  }
  for (let k = 1; k <= i; k++) {
    str += "* ";
  }
  console.log(str);
}
