//1.	Sum of two integers

// let a = 10;
// let b = 20;
// console.log(a+b)

//2. Print the message along with values and sum (Ex - The sum of 45 & 12 = 57)

// 11. Find circumference and area of circle

// let radius = 5;
// let circumference = 2 * Math.PI * radius;
// let area = Math.PI * radius * radius;
// console.log(`Circumference of the circle: ${circumference}`);
// console.log(`Area of the circle: ${area}`);

//12. Accept two numbers and print the greatest between them

// let a= 45;
// let b = 12;
// if (a > b) {
//     console.log(`The greatest number is: ${a}`);
// } else {
//     console.log(`The greatest number is: ${b}`);
// }

//13.Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))

// let gender = 'male';

// if (gender === 'male') {
//     console.log('Good Morning Sir');
// } else if (gender === 'female') {
//     console.log('Good Morning Maam');
// } else {
//     console.log(`Good Morning ${gender}`);
// }

//14. Extend the previous program and handle the wrong inputs.
// Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.

// let gender = prompt('Enter your gender (male/female):');

// console.log(
//     gender === 'male' || gender === 'Male' ? 'Good Morning Sir' :
//     gender === 'female' || gender === 'Female' ? 'Good Morning Maam' :
//     'Wrong Input'
// )

//15. Accept an integer and check whether it is an even number or odd.

// let number = Number( prompt('Enter an integer:'));

// console.log(number % 2 === 0 ? `${number} `+ ' is an even number' : `${number}` + ' is an odd number')

//16. Accept name and age from the user. Check if the user is a valid voter or not.
// (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote.
//  Part 2 - Print after how many years the user will be eligible)

// let Name = prompt('Enter your name:');
// let age = Number(prompt('Enter your age:'));

// console.log(age >= 18 ? `${Name}, you are a valid voter.` : `${Name}, you are not a valid voter.`);

// console.log(age < 18 ? "you are eligible to vote after" + ` ${18 - age}` + 'years' : "you are already eligible to vote");

//17.Accept a day number between 1-7 and print the corresponding day name.


// do {
// dayNumber = Number(prompt("Enter a number between 1 to 7:"));
// } while (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7);

// switch (dayNumber) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day number. Please enter a number between 1 and 7.");
// }

// 18. Accept three numbers and print the greatest among them

// let a = Number(prompt('Enter first number:'));
// let b = Number(prompt('Enter second number:'));
// let c = Number(prompt('Enter third number:'));

// // console.log(a>b && a>c ? `${a}` + "is the greatest Number " : b>c ? `${b}`  + "is the greatest Number" : `${c}` + "is the greatest Number");
// console.log(Math.max(a,b,c))

//19.Accept a year and check if it a leap year or not (google to find out what's a leap year)

 // let year = Number(prompt('Enter a year:'));

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }

// In short cut method
// console.log((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? `${year} is a leap year.` : `${year} is not a leap year.`); 

//20. Shop discount

// let billAmount = Number(prompt('Enter the total bill amount:'));
// let discountPercentage = Number(prompt('Enter the discount percentage:'));

// let discountAmount = (billAmount * discountPercentage) / 100;
// let finalAmount = billAmount - discountAmount;

// console.log(finalAmount);

// if price is greater than then 500 discount is 10% and if price is greater than 1000 then discount is 20% 

// let billAmount = Number(prompt('Enter the total bill amount:'));
// let discountPercentage;
// console.log(" discount Amount: " +  billAmount >= 1000 ? discountPercentage = 20 : billAmount >= 500 ? discountPercentage = 10 : discountPercentage = 0)
// let discountAmount = (billAmount * discountPercentage) / 100;
// let finalAmount = billAmount - discountAmount;
// console.log(finalAmount)



//21. Bijli Bill

// let ElectUnit = Number(prompt('Enter the number of units consumed:'));
// let billAmount = 0;

// console.log(ElectUnit <= 100 ? billAmount = ElectUnit * 5 :
// ElectUnit > 100 && ElectUnit <= 200 ? billAmount = (100 * 5) + ((ElectUnit - 100) * 7) :
// billAmount = (100 * 5) + (100 * 7) + ((ElectUnit - 200) * 10));

// console.log(`The total bill amount is: ${billAmount}`); 

 

