// Restaurant Ordering System

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// let choice;

// do {
//   choice = Number(
//     prompt(
//       "Enter your choice: \n1. Sweets \n2. NorthIndian \n3. SouthIndian \n4. Korean \n5. Chinese \n6. Exit\n",
//     ),
//   );

//   switch (choice) {
//     case 1:
//       let sweets = Number(prompt("Enter the number of sweets you want to order: \n1. Gulab Jamun \n2. Jalebi \n3. Rasgulla \n4. Barfi \n5. Ladoo\n"));
//       console.log("Sweets:", sweets);
//       break;
//     case 2:
//       let northIndian = Number(prompt("Enter the number of North Indian dishes you want to order: \n1. Butter Chicken \n2. Paneer Tikka \n3. Chole Bhature \n4. Dal Makhani \n5. Naan\n"));
//       console.log("northIndian:", northIndian);
//       break;

//     case 3:
//       let southIndian = Number(prompt("Enter the number of South Indian dishes you want to order: \n1. Dosa \n2. Idli \n3. Vada \n4. Sambar \n5. Rasam\n"));
//       console.log("southIndian:", southIndian);
//       break;

//     case 4:
//       let korean = Number(prompt("Enter the number of Korean dishes you want to order: \n1. Kimchi \n2. Bulgogi \n3. Japchae \n4. Pajeon \n5. Naengmyeon\n"));
//       console.log("korean:", korean);
//       break;
//       case 5:
//         let chinese = Number(prompt("Enter the number of Chinese dishes you want to order: \n1. Kung Pao Chicken \n2. Sweet and Sour Pork \n3. Fried Rice \n4. Dumplings \n5. Spring Rolls\n"));
//         console.log("chinese:", chinese );
//         break;
//         case 6:
//           console.log("Exiting the program. Goodbye!");
//           break;
//     default:
//       console.log("Invalid choice. Please try again.");
//   }
// } while (choice != 6);

import promptSync from "prompt-sync";
const prompt = promptSync();

let order;
let cartTotal = 0;

do {
  console.log("\nWelcome to our restaurant!");
  console.log("1. View Menu");
  console.log("2. Place Order");
  console.log("3. View Bill");
  console.log("4. Exit");

  order = Number(prompt("Enter your choice: "));

  switch (order) {
    case 1:
      console.log("\nMenu:");
      console.log("1. Pizza - $10");
      console.log("2. Burger - $5");
      console.log("3. Salad - $7");
      break;

    case 2:
      let item = Number(prompt("Enter item number: "));
      let quantity = Number(prompt("Enter quantity: "));
      let price = 0;

      switch (item) {
        case 1:
          price = 10;
          break;
        case 2:
          price = 5;
          break;
        case 3:
          price = 7;
          break;
        default:
          console.log("Invalid item!");
      }

      if (price > 0 && quantity > 0) {
        let total = price * quantity;
        cartTotal += total;

        console.log(`Added to cart: $${total}`);
      } else {
        console.log("Invalid quantity or item.");
      }
      break;

    case 3:
      console.log(`\nYour current bill: $${cartTotal}`);
      break;

    case 4:
      console.log("\nFinal Bill:");
      console.log(`Total Amount: $${cartTotal}`);
      console.log("Thank you! Visit again ");
      break;

    default:
      console.log("Invalid choice!");
  }

} while (order !== 4);