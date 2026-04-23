//Accept a string and print it in reverse order

let str = "dohcrahdam";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr);

//otherway

let str = "ranihc"
let reverseStr = str.split("").reverse().join("");
console.log(reversedStr)