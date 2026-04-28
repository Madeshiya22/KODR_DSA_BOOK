// V pattern
// import promptSync from "prompt-sync";
// const prompt = promptSync();
// let n = Number(prompt("Enter the number of rows: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n+4 ; j++) {
//     if (i == j || i + j === n + 4) process.stdout.write("* ");
//     else process.stdout.write("  ");
//   }
//   console.log("\n");
// }

let n =4;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2*n - 1; j++) {
    if (i == j || i + j === 2*n) process.stdout.write("* ");
    else process.stdout.write("  ");
  } 
    console.log("\n");
}