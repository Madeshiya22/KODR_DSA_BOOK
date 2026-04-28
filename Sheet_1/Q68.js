// //Strong number using methods.
// import PromptSync from "prompt-sync";
// const prompt = PromptSync();
// function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// function isStrongNumber(num) {
//     let sum = 0;
//     let temp = num;
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += factorial(digit);
//         temp = Math.floor(temp / 10);
//     }
//     return sum === num;
// }
// let number = Number(prompt('Enter a number: '));
// if (isStrongNumber(number)) {
//     console.log(`${number} is a Strong number.`);
// }
// else {
//     console.log(`${number} is not a Strong number.`);
// }

// let num = 145,
//   temp = num;
// let sum = 0;

// while (num > 0) {
//   let digit = num % 10;
//   let multiply = 1;

//   for (let i = 1; i <= digit; i++) {
//     multiply *= i;
//   }
//   sum += multiply;

//   num = Math.floor(num / 10);
// }
// console.log(sum === temp);

let num = 145;
let temp = num
let sum = 0;

while(num>0){
    let digit = num%10;
    let multiply = 1;

    for(let i =1; i<digit;i++){
        multiply *=i;
    }
    sum += multiply

    num = Math.floor(num/10)

}
console.log(temp)