// Right Triangle - Alphabet Pattern A to M

// let n = 5;
// let charCode = 65; // ASCII code for 'A'
// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         // str += String.fromCharCode(64 + j) + " "; 
//         str += String.fromCharCode(charCode) + " ";
//         charCode++;
//     }   
//     console.log(str);
// }



let n = 5;
let charcode = 65;
for(let i= 1; i<=n;i++){
    let str = " "
    for(let j=1; j<=i; j++){
        // str += String.fromCharCode(charcode)+ " ";
        str +=String.fromCharCode(64+j)+" "
        charcode++;
    }
    console.log(str)
}