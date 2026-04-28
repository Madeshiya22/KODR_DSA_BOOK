//special number
let num = 12;
let temp = num;
let sum = 0;

while (temp > 0) {
    let digit =  temp % 10;
    sum +=digit
    temp = Math.floor(temp / 10);
}

console.log(num % sum === 0 ? "Special Number" : "Not Special Number");