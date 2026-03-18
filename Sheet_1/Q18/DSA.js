// 18. Accept three numbers and print the greatest among them

let a = Number(prompt('Enter first number:'));
let b = Number(prompt('Enter second number:'));
let c = Number(prompt('Enter third number:'));

// console.log(a>b && a>c ? `${a}` + "is the greatest Number " : b>c ? `${b}`  + "is the greatest Number" : `${c}` + "is the greatest Number");
console.log(Math.max(a,b,c))
