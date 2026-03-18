//16. Accept name and age from the user. Check if the user is a valid voter or not.
// (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote.
//  Part 2 - Print after how many years the user will be eligible)

let Name = prompt('Enter your name:');
let age = Number(prompt('Enter your age:'));

console.log(age >= 18 ? `${Name}, you are a valid voter.` : `${Name}, you are not a valid voter.`);

console.log(age < 18 ? "you are eligible to vote after" + ` ${18 - age}` + 'years' : "you are already eligible to vote");
