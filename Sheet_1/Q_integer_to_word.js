// 🔹 Global mappings
const under_20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
    "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
    "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty",
    "Sixty", "Seventy", "Eighty", "Ninety"];

// 🔹 Indian units
const units = [
    [1e7, "Crore"],
    [1e5, "Lakh"],
    [1e3, "Thousand"],
    [1, ""]
];

// 🔹 Helper (0–999)
function helper(n) {
    if (n === 0) return "";

    if (n < 20) return under_20[n];

    if (n < 100) {
        return tens[Math.floor(n / 10)] +
            (n % 10 !== 0 ? " " + under_20[n % 10] : "");
    }

    return under_20[Math.floor(n / 100)] + " Hundred" +
        (n % 100 !== 0 ? " " + helper(n % 100) : "");
}

// 🔹 Main function (while loop)
function numberToWords(num) {
    if (num === 0) return "Zero";

    let result = "";
    let i = 0;

    while (i < units.length) {
        let value = units[i][0];
        let name = units[i][1];

        if (num >= value) {
            let current = Math.floor(num / value);

            if (current > 0) {
                result += helper(current) + (name ? " " + name : "") + " ";
                num %= value;
            }
        }

        i++;
    }

    return result.trim();
}
console.log(numberToWords(165000))