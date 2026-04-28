//  Inverted Right Triangle Pattern
//  let n = 5;
//     for (let i = n; i >= 1; i--) {
//         let str = "";
//         for (let j = 1; j <= i; j++) {
//             str += "* ";
//         }   
//         console.log(str);
//     }
    
let n = 5;
for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
        str += "  ";
    }
    for (let k = 1; k <= i; k++) {
        str += "* ";
    }
    console.log(str);
}