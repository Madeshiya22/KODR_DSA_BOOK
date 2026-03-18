//17.Accept a day number between 1-7 and print the corresponding day name.


do {
dayNumber = Number(prompt("Enter a number between 1 to 7:"));
} while (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7);

switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number. Please enter a number between 1 and 7.");
}